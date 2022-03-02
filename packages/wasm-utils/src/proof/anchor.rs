use std::convert::TryInto;

use arkworks_circuits::setup::anchor::setup_proof_x5_4;
use arkworks_circuits::setup::common::AnchorProof;
use arkworks_utils::prelude::ark_bls12_381::Bls12_381;
use arkworks_utils::prelude::ark_bn254::Bn254;
use arkworks_utils::utils::common::Curve as ArkCurve;
use rand::rngs::OsRng;

use crate::proof::{AnchorProofInput, Proof};
use crate::types::{Backend, Curve, OpStatusCode, OperationError};

pub fn create_proof(anchor_proof_input: AnchorProofInput, rng: &mut OsRng) -> Result<Proof, OperationError> {
	let AnchorProofInput {
		exponentiation,
		width,
		curve,
		backend,
		secret,
		nullifier,
		recipient: recipient_raw,
		relayer: relayer_raw,
		pk,
		refund,
		fee,
		chain_id,
		leaves,
		leaf_index,
		roots,
		refresh_commitment,
	} = anchor_proof_input;
	let roots_array: [Vec<u8>; 2] = roots.try_into().map_err(|_| OpStatusCode::InvalidProofParameters)?;

	let anchor_proof: AnchorProof = match (backend, curve, exponentiation, width) {
		(Backend::Arkworks, Curve::Bn254, 5, 4) => setup_proof_x5_4::<Bn254, OsRng>(
			ArkCurve::Bn254,
			chain_id,
			secret,
			nullifier,
			leaves,
			leaf_index,
			roots_array,
			recipient_raw,
			relayer_raw,
			refresh_commitment.to_vec(),
			fee,
			refund,
			pk,
			rng,
		),
		(Backend::Arkworks, Curve::Bls381, 5, 4) => setup_proof_x5_4::<Bls12_381, OsRng>(
			ArkCurve::Bls381,
			chain_id,
			secret,
			nullifier,
			leaves,
			leaf_index,
			roots_array,
			recipient_raw,
			relayer_raw,
			refresh_commitment.to_vec(),
			fee,
			refund,
			pk,
			rng,
		),
		_ => return Err(OpStatusCode::InvalidProofParameters.into()),
	}
	.map_err(|e| {
		let mut error: OperationError = OpStatusCode::InvalidProofParameters.into();
		error.data = Some(format!("Anchor {}", e));
		error
	})?;
	Ok(Proof {
		proof: anchor_proof.proof,
		nullifier_hash: anchor_proof.nullifier_hash_raw,
		root: anchor_proof.roots_raw[0].clone(),
		roots: anchor_proof.roots_raw,
		public_inputs: anchor_proof.public_inputs_raw,
		leaf: anchor_proof.leaf_raw,
	})
}
