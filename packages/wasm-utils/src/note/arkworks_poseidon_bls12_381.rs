use ark_ff::to_bytes;
use ark_std::rand::rngs::OsRng;
use arkworks_circuits::setup::mixer::setup_leaf_x5;
use arkworks_gadgets::leaf::mixer::Private;
use arkworks_gadgets::prelude::ark_bls12_381::Fq as Fr;
use arkworks_gadgets::prelude::*;
use arkworks_utils::utils::common::Curve;

use crate::note::NoteSecretGenerator;
use crate::types::OpStatusCode;
use crate::utils::get_hash_params_x5;

pub struct ArkworksPoseidonBls12_381NoteGenerator;

impl NoteSecretGenerator for ArkworksPoseidonBls12_381NoteGenerator {
	fn generate_secrets(width: usize, exponentiation: usize, rng: &mut OsRng) -> Result<Vec<u8>, OpStatusCode> {
		let curve = Curve::Bls381;
		let leaf_private: Private<Fr> = match (exponentiation, width) {
			(5, 3) | (5, 5) => {
				let (params_5, ..) = get_hash_params_x5::<Fr>(curve);
				let (leaf_private, ..) = setup_leaf_x5(&params_5, rng);
				leaf_private
			}
			(..) => {
				unreachable!("unreachable exponentiation {} width {}", width, exponentiation)
			}
		};
		let secrets = to_bytes![leaf_private.secret(), leaf_private.nullifier()].unwrap();
		Ok(secrets)
	}
}

#[cfg(test)]
mod test {}
