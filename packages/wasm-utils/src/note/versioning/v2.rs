use crate::note::*;
use crate::types::OpStatusCode;

pub fn note_from_str(s: &str) -> Result<JsNote, OpStatusCode> {
	let scheme_and_parts: Vec<&str> = s.split("://").collect();
	let scheme = scheme_and_parts[0];

	let parts: Vec<&str> = scheme_and_parts[1].split("/").collect();
	if parts.len() < 5 {
		return Err(OpStatusCode::InvalidNoteLength);
	}
	// Raw parts
	let authority = parts[0];
	let chain_ids = parts[1];
	let chain_identifying_data = parts[2];
	let secrets = parts[3];
	let misc = parts[4].replace("?", "");

	// Authority parsing
	let authority_parts: Vec<&str> = authority.split(":").collect();
	assert_eq!(authority_parts.len(), 2, "Invalid authority length");
	let version = NoteVersion::from_str(authority_parts[0])?;
	let protocol = NoteProtocol::from_str(authority_parts[1])?;

	// Chain IDs parsing
	let chain_ids_parts: Vec<&str> = chain_ids.split(":").collect();
	assert_eq!(chain_ids_parts.len(), 2, "Invalid chain IDs length");
	let source_chain_id = chain_ids_parts[0];
	let target_chain_id = chain_ids_parts[1];

	// Chain Identifying Data parsing
	let chain_identifying_data_parts: Vec<&str> = chain_identifying_data.split(":").collect();
	assert_eq!(
		chain_identifying_data_parts.len(),
		2,
		"Invalid chain identifying data length"
	);
	let source_identifying_data = chain_identifying_data_parts[0];
	let target_identifying_data = chain_identifying_data_parts[1];

	// Misc data parsing
	let misc_parts: Vec<&str> = misc.split("&").collect();
	let mut curve = None;
	let mut width = None;
	let mut exponentiation = None;
	let mut hash_function = None;
	let mut backend = None;
	let mut token_symbol = None;
	let mut denomination = None;
	let mut amount = None;

	for part in misc_parts {
		let part_parts: Vec<&str> = part.split("=").collect();
		assert_eq!(part_parts.len(), 2, "Invalid misc data length");
		let key = part_parts[0];
		let value = part_parts[1];
		println!("{}={}", key, value);
		match key {
			"curve" => curve = Some(value),
			"width" => width = Some(value),
			"exp" => exponentiation = Some(value),
			"hf" => hash_function = Some(value),
			"backend" => backend = Some(value),
			"token" => token_symbol = Some(value),
			"denom" => denomination = Some(value),
			"amount" => amount = Some(value),
			_ => return Err(OpStatusCode::InvalidNoteMiscData),
		}
	}

	let secret_parts: Vec<Vec<u8>> = secrets
		.split(":")
		.map(|v| hex::decode(v.to_string()).unwrap_or_default())
		.collect::<Vec<Vec<u8>>>();

	Ok(JsNote {
		scheme: scheme.to_string(),
		protocol,
		version,
		target_chain_id: target_chain_id.to_string(),
		source_chain_id: source_chain_id.to_string(),
		source_identifying_data: source_identifying_data.to_string(),
		target_identifying_data: target_identifying_data.to_string(),
		token_symbol: token_symbol.map(|v| v.to_string()),
		curve: curve.map(|v| v.parse::<Curve>().unwrap()),
		hash_function: hash_function.map(|v| HashFunction::from_str(v).unwrap()),
		backend: backend.map(|b| b.parse().unwrap()),
		denomination: denomination.map(|v| v.parse::<u8>().unwrap()),
		amount: amount.map(|v| v.parse::<String>().unwrap()),
		exponentiation: exponentiation.map(|v| v.parse::<i8>().unwrap()),
		width: width.map(|v| v.parse::<usize>().unwrap()),
		secrets: secret_parts,
	})
}
