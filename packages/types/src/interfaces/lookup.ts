// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<egg_standalone_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: 'u8'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup32: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup35: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup36: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup37: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
        depositors: 'Vec<AccountId32>',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Executed: {
        refIndex: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      PreimageNoted: {
        proposalHash: 'H256',
        who: 'AccountId32',
        deposit: 'u128',
      },
      PreimageUsed: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
      },
      PreimageInvalid: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageMissing: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageReaped: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
        reaper: 'AccountId32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup39: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup40: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup42: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup44: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup47: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        electionCompute: 'PalletElectionProviderMultiPhaseElectionCompute',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        electionCompute: 'Option<PalletElectionProviderMultiPhaseElectionCompute>',
      },
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      SignedPhaseStarted: {
        round: 'u32',
      },
      UnsignedPhaseStarted: {
        round: 'u32'
      }
    }
  },
  /**
   * Lookup48: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup50: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: '(u32,u128,u128)',
      Rewarded: '(AccountId32,u128)',
      Slashed: '(AccountId32,u128)',
      OldSlashingReportDiscarded: 'u32',
      StakersElected: 'Null',
      Bonded: '(AccountId32,u128)',
      Unbonded: '(AccountId32,u128)',
      Withdrawn: '(AccountId32,u128)',
      Kicked: '(AccountId32,AccountId32)',
      StakingElectionFailed: 'Null',
      Chilled: 'AccountId32',
      PayoutStarted: '(u32,AccountId32)'
    }
  },
  /**
   * Lookup51: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup52: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128'
      }
    }
  },
  /**
   * Lookup53: pallet_bounties::pallet::Event<T>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup54: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup55: pallet_bags_list::pallet::Event<T>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64'
      }
    }
  },
  /**
   * Lookup56: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallLookupFailed: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        error: 'FrameSupportScheduleLookupError'
      }
    }
  },
  /**
   * Lookup59: frame_support::traits::schedule::LookupError
   **/
  FrameSupportScheduleLookupError: {
    _enum: ['Unknown', 'BadFormat']
  },
  /**
   * Lookup60: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup61: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup63: pallet_dkg_metadata::pallet::Event<T>
   **/
  PalletDkgMetadataEvent: {
    _enum: {
      PublicKeySubmitted: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      NextPublicKeySubmitted: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      NextPublicKeySignatureSubmitted: {
        pubKeySig: 'Bytes',
      },
      PublicKeyChanged: {
        compressedPubKey: 'Bytes',
        uncompressedPubKey: 'Bytes',
      },
      PublicKeySignatureChanged: {
        pubKeySig: 'Bytes',
      },
      MisbehaviourReportsSubmitted: {
        misbehaviourType: 'DkgRuntimePrimitivesMisbehaviourType',
        reporters: 'Vec<DkgRuntimePrimitivesCryptoPublic>',
      },
      RefreshKeysFinished: {
        nextAuthoritySetId: 'u64'
      }
    }
  },
  /**
   * Lookup64: dkg_runtime_primitives::MisbehaviourType
   **/
  DkgRuntimePrimitivesMisbehaviourType: {
    _enum: ['Keygen', 'Sign']
  },
  /**
   * Lookup66: dkg_runtime_primitives::crypto::Public
   **/
  DkgRuntimePrimitivesCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup67: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup69: pallet_dkg_proposals::pallet::Event<T>
   **/
  PalletDkgProposalsEvent: {
    _enum: {
      ProposerThresholdChanged: {
        newThreshold: 'u32',
      },
      ChainWhitelisted: {
        chainId: 'WebbProposalsHeaderTypedChainId',
      },
      ProposerAdded: {
        proposerId: 'AccountId32',
      },
      ProposerRemoved: {
        proposerId: 'AccountId32',
      },
      VoteFor: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
        who: 'AccountId32',
      },
      VoteAgainst: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
        who: 'AccountId32',
      },
      ProposalApproved: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalRejected: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalSucceeded: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      ProposalFailed: {
        chainId: 'WebbProposalsHeaderTypedChainId',
        proposalNonce: 'u32',
      },
      AuthorityProposersReset: {
        proposers: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup70: webb_proposals::header::TypedChainId
   **/
  WebbProposalsHeaderTypedChainId: {
    _enum: {
      None: 'Null',
      Evm: 'u32',
      Substrate: 'u32',
      PolkadotParachain: 'u32',
      KusamaParachain: 'u32',
      RococoParachain: 'u32',
      Cosmos: 'u32',
      Solana: 'u32'
    }
  },
  /**
   * Lookup72: pallet_dkg_proposal_handler::pallet::Event<T>
   **/
  PalletDkgProposalHandlerEvent: {
    _enum: {
      InvalidProposalSignature: {
        kind: 'DkgRuntimePrimitivesProposalProposalKind',
        data: 'Bytes',
        invalidSignature: 'Bytes',
      },
      ProposalSigned: {
        key: 'DkgRuntimePrimitivesProposalDkgPayloadKey',
        targetChain: 'WebbProposalsHeaderTypedChainId',
        data: 'Bytes',
        signature: 'Bytes'
      }
    }
  },
  /**
   * Lookup73: dkg_runtime_primitives::proposal::ProposalKind
   **/
  DkgRuntimePrimitivesProposalProposalKind: {
    _enum: ['Refresh', 'ProposerSetUpdate', 'EVM', 'AnchorCreate', 'AnchorUpdate', 'TokenAdd', 'TokenRemove', 'WrappingFeeUpdate', 'ResourceIdUpdate', 'RescueTokens', 'MaxDepositLimitUpdate', 'MinWithdrawalLimitUpdate', 'SetVerifier', 'SetTreasuryHandler', 'FeeRecipientUpdate']
  },
  /**
   * Lookup74: dkg_runtime_primitives::proposal::DKGPayloadKey
   **/
  DkgRuntimePrimitivesProposalDkgPayloadKey: {
    _enum: {
      EVMProposal: 'u32',
      RefreshVote: 'u32',
      ProposerSetUpdateProposal: 'u32',
      AnchorCreateProposal: 'u32',
      AnchorUpdateProposal: 'u32',
      TokenAddProposal: 'u32',
      TokenRemoveProposal: 'u32',
      WrappingFeeUpdateProposal: 'u32',
      ResourceIdUpdateProposal: 'u32',
      RescueTokensProposal: 'u32',
      MaxDepositLimitUpdateProposal: 'u32',
      MinWithdrawalLimitUpdateProposal: 'u32',
      SetVerifierProposal: 'u32',
      SetTreasuryHandlerProposal: 'u32',
      FeeRecipientUpdateProposal: 'u32'
    }
  },
  /**
   * Lookup75: pallet_hasher::pallet::Event<T, I>
   **/
  PalletHasherEvent: 'Null',
  /**
   * Lookup76: pallet_asset_registry::pallet::Event<T>
   **/
  PalletAssetRegistryEvent: {
    _enum: {
      Registered: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
      },
      Updated: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
      },
      MetadataSet: {
        assetId: 'u32',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      LocationSet: {
        assetId: 'u32',
        location: 'Null'
      }
    }
  },
  /**
   * Lookup78: pallet_asset_registry::types::AssetType<AssetId>
   **/
  PalletAssetRegistryAssetType: {
    _enum: {
      Token: 'Null',
      PoolShare: 'Vec<u32>'
    }
  },
  /**
   * Lookup80: orml_currencies::module::Event<T>
   **/
  OrmlCurrenciesModuleEvent: {
    _enum: {
      Transferred: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceUpdated: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'i128',
      },
      Deposited: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup82: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      RepatriatedReserve: {
        currencyId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'u32',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128'
      }
    }
  },
  /**
   * Lookup83: pallet_token_wrapper::pallet::Event<T>
   **/
  PalletTokenWrapperEvent: {
    _enum: {
      WrappedToken: {
        poolShareAsset: 'u32',
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      UnwrappedToken: {
        poolShareAsset: 'u32',
        assetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      UpdatedWrappingFeePercent: {
        intoPoolShareId: 'u32',
        wrappingFeePercent: 'u128'
      }
    }
  },
  /**
   * Lookup84: pallet_verifier::pallet::Event<T, I>
   **/
  PalletVerifierEvent: 'Null',
  /**
   * Lookup86: pallet_mt::pallet::Event<T, I>
   **/
  PalletMtEvent: {
    _enum: {
      TreeCreation: {
        treeId: 'u32',
        who: 'AccountId32',
      },
      LeafInsertion: {
        treeId: 'u32',
        leafIndex: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement'
      }
    }
  },
  /**
   * Lookup87: egg_standalone_runtime::protocol_substrate_config::Element
   **/
  EggStandaloneRuntimeProtocolSubstrateConfigElement: '[u8;32]',
  /**
   * Lookup88: pallet_linkable_tree::pallet::Event<T, I>
   **/
  PalletLinkableTreeEvent: {
    _enum: {
      LinkableTreeCreation: {
        treeId: 'u32'
      }
    }
  },
  /**
   * Lookup89: pallet_mixer::pallet::Event<T, I>
   **/
  PalletMixerEvent: {
    _enum: {
      MixerCreation: {
        treeId: 'u32',
      },
      Deposit: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      Withdraw: {
        treeId: 'u32',
        recipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup90: pallet_anchor::pallet::Event<T, I>
   **/
  PalletAnchorEvent: {
    _enum: {
      AnchorCreation: {
        treeId: 'u32',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Refresh: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      Deposit: {
        depositor: 'AccountId32',
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
        amount: 'u128',
      },
      PostDeposit: {
        depositor: 'AccountId32',
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement'
      }
    }
  },
  /**
   * Lookup91: pallet_anchor_handler::pallet::Event<T, I>
   **/
  PalletAnchorHandlerEvent: {
    _enum: ['AnchorCreated', 'AnchorEdgeAdded', 'AnchorEdgeUpdated']
  },
  /**
   * Lookup92: pallet_signature_bridge::pallet::Event<T, I>
   **/
  PalletSignatureBridgeEvent: {
    _enum: {
      MaintainerSet: {
        oldMaintainer: 'Bytes',
        newMaintainer: 'Bytes',
      },
      ChainWhitelisted: {
        chainId: 'u64',
      },
      ProposalApproved: {
        chainId: 'u64',
        proposalNonce: 'u32',
      },
      ProposalSucceeded: {
        chainId: 'u64',
        proposalNonce: 'u32',
      },
      ProposalFailed: {
        chainId: 'u64',
        proposalNonce: 'u32'
      }
    }
  },
  /**
   * Lookup93: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup96: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup99: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup104: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup105: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup106: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup108: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup109: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup110: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup111: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup117: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup118: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup120: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup122: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup126: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup128: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup129: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup130: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup131: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup132: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup133: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup134: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup135: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup136: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup139: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup140: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup142: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup143: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposalHash: 'H256',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
        secondsUpperBound: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposalHash: 'H256',
      },
      external_propose_majority: {
        proposalHash: 'H256',
      },
      external_propose_default: {
        proposalHash: 'H256',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      cancel_queued: {
        which: 'u32',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      note_preimage: {
        encodedProposal: 'Bytes',
      },
      note_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      reap_preimage: {
        proposalHash: 'H256',
        proposalLenUpperBound: 'Compact<u32>',
      },
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      enact_proposal: {
        proposalHash: 'H256',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup144: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup146: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup147: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        hasReplacement: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup148: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup149: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<[u128;3]>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        numSignedSubmissions: 'u32',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup150: pallet_election_provider_multi_phase::RawSolution<egg_standalone_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'EggStandaloneRuntimeNposSolution16',
    score: '[u128;3]',
    round: 'u32'
  },
  /**
   * Lookup151: egg_standalone_runtime::NposSolution16
   **/
  EggStandaloneRuntimeNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup203: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup207: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup208: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      set_history_depth: {
        newHistoryDepth: 'Compact<u32>',
        eraItemsDeleted: 'Compact<u32>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'u128',
        minValidatorBond: 'u128',
        maxNominatorCount: 'Option<u32>',
        maxValidatorCount: 'Option<u32>',
        chillThreshold: 'Option<Percent>',
        minCommission: 'Perbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32'
      }
    }
  },
  /**
   * Lookup209: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup210: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup215: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'EggStandaloneRuntimeOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup216: egg_standalone_runtime::opaque::SessionKeys
   **/
  EggStandaloneRuntimeOpaqueSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    grandpa: 'SpFinalityGrandpaAppPublic',
    dkg: 'DkgRuntimePrimitivesCryptoPublic'
  },
  /**
   * Lookup217: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup218: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup219: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup220: pallet_bounties::pallet::Call<T>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup221: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup222: pallet_bags_list::pallet::Call<T>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'AccountId32',
      },
      put_in_front_of: {
        lighter: 'AccountId32'
      }
    }
  },
  /**
   * Lookup223: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed'
      }
    }
  },
  /**
   * Lookup225: frame_support::traits::schedule::MaybeHashed<egg_standalone_runtime::Call, primitive_types::H256>
   **/
  FrameSupportScheduleMaybeHashed: {
    _enum: {
      Value: 'Call',
      Hash: 'H256'
    }
  },
  /**
   * Lookup226: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup227: pallet_dkg_metadata::pallet::Call<T>
   **/
  PalletDkgMetadataCall: {
    _enum: {
      set_signature_threshold: {
        newThreshold: 'u16',
      },
      set_keygen_threshold: {
        newThreshold: 'u16',
      },
      set_refresh_delay: {
        newDelay: 'u8',
      },
      submit_public_key: {
        keysAndSignatures: 'DkgRuntimePrimitivesAggregatedPublicKeys',
      },
      submit_next_public_key: {
        keysAndSignatures: 'DkgRuntimePrimitivesAggregatedPublicKeys',
      },
      submit_public_key_signature: {
        signatureProposal: 'DkgRuntimePrimitivesProposalRefreshProposalSigned',
      },
      submit_misbehaviour_reports: {
        reports: 'DkgRuntimePrimitivesAggregatedMisbehaviourReports',
      },
      unjail: 'Null',
      force_unjail_keygen: {
        authority: 'DkgRuntimePrimitivesCryptoPublic',
      },
      force_unjail_signing: {
        authority: 'DkgRuntimePrimitivesCryptoPublic',
      },
      manual_increment_nonce: 'Null',
      manual_refresh: 'Null',
      force_change_authorities: 'Null'
    }
  },
  /**
   * Lookup228: dkg_runtime_primitives::AggregatedPublicKeys
   **/
  DkgRuntimePrimitivesAggregatedPublicKeys: {
    keysAndSignatures: 'Vec<(Bytes,Bytes)>'
  },
  /**
   * Lookup229: dkg_runtime_primitives::proposal::RefreshProposalSigned
   **/
  DkgRuntimePrimitivesProposalRefreshProposalSigned: {
    nonce: 'u32',
    signature: 'Bytes'
  },
  /**
   * Lookup230: dkg_runtime_primitives::AggregatedMisbehaviourReports<dkg_runtime_primitives::crypto::Public>
   **/
  DkgRuntimePrimitivesAggregatedMisbehaviourReports: {
    misbehaviourType: 'DkgRuntimePrimitivesMisbehaviourType',
    roundId: 'u64',
    offender: 'DkgRuntimePrimitivesCryptoPublic',
    reporters: 'Vec<DkgRuntimePrimitivesCryptoPublic>',
    signatures: 'Vec<Bytes>'
  },
  /**
   * Lookup231: pallet_dkg_proposals::pallet::Call<T>
   **/
  PalletDkgProposalsCall: {
    _enum: {
      set_threshold: {
        threshold: 'u32',
      },
      set_resource: {
        id: 'WebbProposalsHeaderResourceId',
        method: 'Bytes',
      },
      remove_resource: {
        id: 'WebbProposalsHeaderResourceId',
      },
      whitelist_chain: {
        chainId: 'WebbProposalsHeaderTypedChainId',
      },
      add_proposer: {
        nativeAccount: 'AccountId32',
        externalAccount: 'Bytes',
      },
      remove_proposer: {
        v: 'AccountId32',
      },
      acknowledge_proposal: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        rId: 'WebbProposalsHeaderResourceId',
        prop: 'Bytes',
      },
      reject_proposal: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        rId: 'WebbProposalsHeaderResourceId',
        prop: 'Bytes',
      },
      eval_vote_state: {
        nonce: 'u32',
        srcChainId: 'WebbProposalsHeaderTypedChainId',
        prop: 'Bytes'
      }
    }
  },
  /**
   * Lookup232: webb_proposals::header::ResourceId
   **/
  WebbProposalsHeaderResourceId: '[u8;32]',
  /**
   * Lookup233: pallet_dkg_proposal_handler::pallet::Call<T>
   **/
  PalletDkgProposalHandlerCall: {
    _enum: {
      submit_signed_proposals: {
        props: 'Vec<DkgRuntimePrimitivesProposal>',
      },
      force_submit_unsigned_proposal: {
        prop: 'DkgRuntimePrimitivesProposal'
      }
    }
  },
  /**
   * Lookup235: dkg_runtime_primitives::proposal::Proposal
   **/
  DkgRuntimePrimitivesProposal: {
    _enum: {
      Signed: {
        kind: 'DkgRuntimePrimitivesProposalProposalKind',
        data: 'Bytes',
        signature: 'Bytes',
      },
      Unsigned: {
        kind: 'DkgRuntimePrimitivesProposalProposalKind',
        data: 'Bytes'
      }
    }
  },
  /**
   * Lookup236: pallet_hasher::pallet::Call<T, I>
   **/
  PalletHasherCall: {
    _enum: {
      force_set_parameters: {
        parameters: 'Bytes'
      }
    }
  },
  /**
   * Lookup237: pallet_asset_registry::pallet::Call<T>
   **/
  PalletAssetRegistryCall: {
    _enum: {
      register: {
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'u128',
      },
      update: {
        assetId: 'u32',
        name: 'Bytes',
        assetType: 'PalletAssetRegistryAssetType',
        existentialDeposit: 'Option<u128>',
      },
      set_metadata: {
        assetId: 'u32',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      set_location: {
        assetId: 'u32',
        location: 'Null',
      },
      add_asset_to_pool: {
        pool: 'Bytes',
        assetId: 'u32',
      },
      delete_asset_from_pool: {
        pool: 'Bytes',
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup239: orml_currencies::module::Call<T>
   **/
  OrmlCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'u32',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup240: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'u32',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'u32',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup241: pallet_token_wrapper::pallet::Call<T>
   **/
  PalletTokenWrapperCall: {
    _enum: {
      set_wrapping_fee: {
        fee: 'u128',
        intoPoolShareId: 'u32',
      },
      wrap: {
        fromAssetId: 'u32',
        intoPoolShareId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32',
      },
      unwrap: {
        fromPoolShareId: 'u32',
        intoAssetId: 'u32',
        amount: 'u128',
        recipient: 'AccountId32'
      }
    }
  },
  /**
   * Lookup242: pallet_verifier::pallet::Call<T, I>
   **/
  PalletVerifierCall: {
    _enum: {
      force_set_parameters: {
        parameters: 'Bytes'
      }
    }
  },
  /**
   * Lookup244: pallet_mt::pallet::Call<T, I>
   **/
  PalletMtCall: {
    _enum: {
      create: {
        depth: 'u8',
      },
      insert: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      force_set_default_hashes: {
        defaultHashes: 'Vec<EggStandaloneRuntimeProtocolSubstrateConfigElement>'
      }
    }
  },
  /**
   * Lookup246: pallet_linkable_tree::pallet::Call<T, I>
   **/
  PalletLinkableTreeCall: {
    _enum: {
      create: {
        maxEdges: 'u32',
        depth: 'u8'
      }
    }
  },
  /**
   * Lookup247: pallet_mixer::pallet::Call<T, I>
   **/
  PalletMixerCall: {
    _enum: {
      create: {
        depositSize: 'u128',
        depth: 'u8',
        asset: 'u32',
      },
      deposit: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      withdraw: {
        id: 'u32',
        proofBytes: 'Bytes',
        root: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
        nullifierHash: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
        recipient: 'AccountId32',
        relayer: 'AccountId32',
        fee: 'u128',
        refund: 'u128'
      }
    }
  },
  /**
   * Lookup248: pallet_anchor::pallet::Call<T, I>
   **/
  PalletAnchorCall: {
    _enum: {
      create: {
        depositSize: 'u128',
        maxEdges: 'u32',
        depth: 'u8',
        asset: 'u32',
      },
      deposit: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      deposit_and_update_linked_anchors: {
        treeId: 'u32',
        leaf: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
      },
      withdraw: {
        id: 'u32',
        proofBytes: 'Bytes',
        roots: 'Vec<EggStandaloneRuntimeProtocolSubstrateConfigElement>',
        nullifierHash: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
        recipient: 'AccountId32',
        relayer: 'AccountId32',
        fee: 'u128',
        refund: 'u128',
        commitment: 'EggStandaloneRuntimeProtocolSubstrateConfigElement'
      }
    }
  },
  /**
   * Lookup249: pallet_anchor_handler::pallet::Call<T, I>
   **/
  PalletAnchorHandlerCall: {
    _enum: {
      execute_anchor_create_proposal: {
        depositSize: 'u128',
        srcChainId: 'u64',
        rId: '[u8;32]',
        maxEdges: 'u32',
        treeDepth: 'u8',
        asset: 'u32',
      },
      execute_anchor_update_proposal: {
        rId: '[u8;32]',
        anchorMetadata: 'PalletLinkableTreeEdgeMetadata'
      }
    }
  },
  /**
   * Lookup250: pallet_linkable_tree::types::EdgeMetadata<ChainID, egg_standalone_runtime::protocol_substrate_config::Element, LastLeafIndex>
   **/
  PalletLinkableTreeEdgeMetadata: {
    srcChainId: 'u64',
    root: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
    latestLeafIndex: 'u32'
  },
  /**
   * Lookup251: pallet_signature_bridge::pallet::Call<T, I>
   **/
  PalletSignatureBridgeCall: {
    _enum: {
      set_maintainer: {
        message: 'Bytes',
        signature: 'Bytes',
      },
      force_set_maintainer: {
        newMaintainer: 'Bytes',
      },
      set_resource: {
        id: '[u8;32]',
        method: 'Bytes',
      },
      remove_resource: {
        id: '[u8;32]',
      },
      whitelist_chain: {
        id: 'u64',
      },
      execute_proposal: {
        srcId: 'u64',
        call: 'Call',
        proposalData: 'Bytes',
        signature: 'Bytes'
      }
    }
  },
  /**
   * Lookup252: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup255: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup256: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup259: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup261: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup262: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup264: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup266: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup268: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup269: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup273: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup274: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup276: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup280: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u32',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u32',
        expiry: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup281: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup282: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup283: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup284: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup287: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup288: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup291: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup292: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals']
  },
  /**
   * Lookup294: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup295: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup297: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup298: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup299: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'ReportSelf', 'DuplicatedCandidate', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup300: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup302: pallet_election_provider_multi_phase::ReadySolution<sp_core::crypto::AccountId32>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: '[u128;3]',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup303: pallet_election_provider_multi_phase::RoundSnapshot<T>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup311: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, egg_standalone_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    reward: 'u128'
  },
  /**
   * Lookup312: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed']
  },
  /**
   * Lookup313: pallet_staking::StakingLedger<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup315: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup316: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup317: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup319: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup321: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup322: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup326: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup328: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup330: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup331: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup334: pallet_staking::Releases
   **/
  PalletStakingReleases: {
    _enum: ['V1_0_0Ancient', 'V2_0_0', 'V3_0_0', 'V4_0_0', 'V5_0_0', 'V6_0_0', 'V7_0_0', 'V8_0_0']
  },
  /**
   * Lookup335: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow']
  },
  /**
   * Lookup339: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup340: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup341: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup344: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup345: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals']
  },
  /**
   * Lookup346: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup347: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup349: pallet_bounties::pallet::Error<T>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup350: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup351: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup352: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup353: pallet_bags_list::list::Node<T>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64'
  },
  /**
   * Lookup354: pallet_bags_list::list::Bag<T>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup356: pallet_bags_list::pallet::Error<T>
   **/
  PalletBagsListError: {
    _enum: ['NotInSameBag', 'IdNotFound', 'NotHeavier']
  },
  /**
   * Lookup359: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<egg_standalone_runtime::Call, primitive_types::H256>, BlockNumber, egg_standalone_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV3: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'FrameSupportScheduleMaybeHashed',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'EggStandaloneRuntimeOriginCaller'
  },
  /**
   * Lookup360: egg_standalone_runtime::OriginCaller
   **/
  EggStandaloneRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      Void: 'SpCoreVoid',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      Council: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup361: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup362: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup363: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup364: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup365: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: 'Option<(AccountId32,u128)>',
      Requested: 'u32'
    }
  },
  /**
   * Lookup368: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooLarge', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup369: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup373: pallet_dkg_metadata::types::RoundMetadata
   **/
  PalletDkgMetadataRoundMetadata: {
    currRoundPubKey: 'Bytes',
    nextRoundPubKey: 'Bytes',
    refreshSignature: 'Bytes'
  },
  /**
   * Lookup377: pallet_dkg_metadata::pallet::Error<T>
   **/
  PalletDkgMetadataError: {
    _enum: ['NoMappedAccount', 'InvalidThreshold', 'MustBeAQueuedAuthority', 'MustBeAnActiveAuthority', 'InvalidRefreshDelay', 'InvalidPublicKeys', 'AlreadySubmittedPublicKey', 'AlreadySubmittedSignature', 'UsedSignature', 'InvalidSignature', 'InvalidMisbehaviourReports', 'RefreshInProgress', 'ManualRefreshFailed', 'NoNextPublicKey', 'InvalidControllerAccount']
  },
  /**
   * Lookup380: pallet_dkg_proposals::types::ProposalVotes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDkgProposalsProposalVotes: {
    votesFor: 'Vec<AccountId32>',
    votesAgainst: 'Vec<AccountId32>',
    status: 'PalletDkgProposalsProposalStatus',
    expiry: 'u32'
  },
  /**
   * Lookup381: pallet_dkg_proposals::types::ProposalStatus
   **/
  PalletDkgProposalsProposalStatus: {
    _enum: ['Initiated', 'Approved', 'Rejected']
  },
  /**
   * Lookup382: pallet_dkg_proposals::pallet::Error<T>
   **/
  PalletDkgProposalsError: {
    _enum: ['InvalidPermissions', 'ThresholdNotSet', 'InvalidChainId', 'InvalidThreshold', 'ChainNotWhitelisted', 'ChainAlreadyWhitelisted', 'ResourceDoesNotExist', 'ProposerAlreadyExists', 'ProposerInvalid', 'MustBeProposer', 'ProposerAlreadyVoted', 'ProposalAlreadyExists', 'ProposalDoesNotExist', 'ProposalNotComplete', 'ProposalAlreadyComplete', 'ProposalExpired', 'ProposerCountIsZero']
  },
  /**
   * Lookup384: pallet_dkg_proposal_handler::pallet::Error<T>
   **/
  PalletDkgProposalHandlerError: {
    _enum: ['NoneValue', 'StorageOverflow', 'ProposalFormatInvalid', 'ProposalSignatureInvalid', 'ProposalDoesNotExists', 'ProposalAlreadyExists', 'ChainIdInvalid', 'ProposalsLengthOverflow']
  },
  /**
   * Lookup385: pallet_hasher::pallet::Error<T, I>
   **/
  PalletHasherError: {
    _enum: ['ParametersNotInitialized', 'HashError']
  },
  /**
   * Lookup386: pallet_asset_registry::types::AssetDetails<AssetId, Balance, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetRegistryAssetDetails: {
    name: 'Bytes',
    assetType: 'PalletAssetRegistryAssetType',
    existentialDeposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup387: pallet_asset_registry::types::AssetMetadata<frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetRegistryAssetMetadata: {
    symbol: 'Bytes',
    decimals: 'u8'
  },
  /**
   * Lookup388: pallet_asset_registry::pallet::Error<T>
   **/
  PalletAssetRegistryError: {
    _enum: ['NoIdAvailable', 'AssetNotFound', 'TooLong', 'AssetNotRegistered', 'AssetAlreadyRegistered', 'InvalidSharedAssetLen', 'AssetExistsInPool', 'AssetNotFoundInPool']
  },
  /**
   * Lookup389: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup391: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup393: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup394: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount']
  },
  /**
   * Lookup395: pallet_token_wrapper::pallet::Error<T>
   **/
  PalletTokenWrapperError: {
    _enum: ['InvalidAmount', 'UnregisteredAssetId', 'NotFoundInPool', 'InsufficientBalance', 'NoWrappingFeePercentFound']
  },
  /**
   * Lookup396: pallet_verifier::pallet::Error<T, I>
   **/
  PalletVerifierError: {
    _enum: ['ParametersNotInitialized', 'VerifyError']
  },
  /**
   * Lookup398: webb_primitives::types::DepositDetails<sp_core::crypto::AccountId32, Balance>
   **/
  WebbPrimitivesDepositDetails: {
    depositor: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup399: pallet_mt::types::TreeMetadata<sp_core::crypto::AccountId32, LeafIndex, egg_standalone_runtime::protocol_substrate_config::Element>
   **/
  PalletMtTreeMetadata: {
    creator: 'Option<AccountId32>',
    paused: 'bool',
    leafCount: 'u32',
    maxLeaves: 'u32',
    depth: 'u8',
    root: 'EggStandaloneRuntimeProtocolSubstrateConfigElement',
    edgeNodes: 'Vec<EggStandaloneRuntimeProtocolSubstrateConfigElement>'
  },
  /**
   * Lookup400: pallet_mt::pallet::Error<T, I>
   **/
  PalletMtError: {
    _enum: ['InvalidPermissions', 'InvalidTreeDepth', 'InvalidLeafIndex', 'ExceedsMaxLeaves', 'TreeDoesntExist', 'ExceedsMaxDefaultHashes']
  },
  /**
   * Lookup404: pallet_linkable_tree::pallet::Error<T, I>
   **/
  PalletLinkableTreeError: {
    _enum: ['UnknownRoot', 'InvalidMerkleRoots', 'InvalidNeighborWithdrawRoot', 'TooManyEdges', 'EdgeAlreadyExists', 'EdgeDoesntExists']
  },
  /**
   * Lookup405: pallet_mixer::types::MixerMetadata<Balance, AssetId>
   **/
  PalletMixerMixerMetadata: {
    depositSize: 'u128',
    asset: 'u32'
  },
  /**
   * Lookup407: pallet_mixer::pallet::Error<T, I>
   **/
  PalletMixerError: {
    _enum: ['InvalidPermissions', 'InvalidWithdrawProof', 'AlreadyRevealedNullifier', 'InvalidArbitraryData', 'UnknownRoot', 'NoMixerFound']
  },
  /**
   * Lookup408: pallet_anchor::types::AnchorMetadata<Balance, AssetId>
   **/
  PalletAnchorAnchorMetadata: {
    depositSize: 'u128',
    asset: 'u32'
  },
  /**
   * Lookup409: pallet_anchor::pallet::Error<T, I>
   **/
  PalletAnchorError: {
    _enum: ['InvalidMerkleRoots', 'UnknownRoot', 'InvalidWithdrawProof', 'NoAnchorFound', 'InvalidArbitraryData', 'AlreadyRevealedNullifier']
  },
  /**
   * Lookup411: pallet_anchor_handler::types::UpdateRecord<TreeId, ResourceId, ChainID, egg_standalone_runtime::protocol_substrate_config::Element, LeafIndex>
   **/
  PalletAnchorHandlerUpdateRecord: {
    treeId: 'u32',
    resourceId: '[u8;32]',
    edgeMetadata: 'PalletLinkableTreeEdgeMetadata'
  },
  /**
   * Lookup412: pallet_anchor_handler::pallet::Error<T, I>
   **/
  PalletAnchorHandlerError: {
    _enum: ['InvalidPermissions', 'ResourceIsAlreadyAnchored', 'AnchorHandlerNotFound', 'SourceChainIdNotFound', 'StorageOverflow']
  },
  /**
   * Lookup413: pallet_signature_bridge::pallet::Error<T, I>
   **/
  PalletSignatureBridgeError: {
    _enum: ['InvalidPermissions', 'InvalidChainId', 'ChainNotWhitelisted', 'ChainAlreadyWhitelisted', 'ResourceDoesNotExist', 'SignatureInvalid', 'MustBeMaintainer', 'ProposalAlreadyExists', 'CallNotConsistentWithProposalData', 'CallDoesNotMatchResourceId', 'IncorrectExecutionChainIdType', 'InvalidNonce']
  },
  /**
   * Lookup415: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup416: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup417: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup420: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup421: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup422: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup425: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup426: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup427: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup428: egg_standalone_runtime::Runtime
   **/
  EggStandaloneRuntimeRuntime: 'Null'
};