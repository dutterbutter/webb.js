// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { getCachedFixtureURI, withLocalFixtures } from '@webb-tools/api-providers/index.js';
import { LoggerService } from '@webb-tools/app-util/index.js';

const logger = LoggerService.get('IPFS');

export async function fetchSubstrateTornadoProvingKey () {
  const IPFSUrl = 'https://ipfs.io/ipfs/QmfQUgqRXCdUiogiRU8ZdLFZD2vqVb9fHpLkL6DsGHwoLH';
  const cachedURI = getCachedFixtureURI('proving_key_substrate_mixer.bin');
  const ipfsKeyRequest = await fetch(withLocalFixtures() ? cachedURI : IPFSUrl);
  const circuitKeyArrayBuffer = await ipfsKeyRequest.arrayBuffer();

  logger.info(`Done Fetching key from ${ipfsKeyRequest.url}`);
  const circuitKey = new Uint8Array(circuitKeyArrayBuffer);

  return circuitKey;
}