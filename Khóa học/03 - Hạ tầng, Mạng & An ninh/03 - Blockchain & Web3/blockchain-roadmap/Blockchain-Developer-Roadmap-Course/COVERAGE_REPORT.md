# Coverage Report

This report maps the generated course back to the scraped Blockchain Developer roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\blockchain.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\5efff17a-81c6-47d4-9b58-cacd5f91f129\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/blockchain

## Generated Coverage

- Phases: 5
- Modules: 15
- Lessons: 385

## Roadmap Topic Mapping

### Module 01 - Basic Blockchain Knowledge

- Phase: 01 - Blockchain Foundations
- Outcome: Understand what blockchain is, why decentralization matters and where blockchain fits in real products.
- Project: Mini project: Write a note explaining what blockchain solves compared with a centralized database.
- Lesson count: 22

#### Blockchain Basics

- What is Blockchain?
- Distributed Ledger
- Block
- Chain
- Transaction
- Node
- Immutability
- Decentralization
- Why Blockchain Matters
- Blockchain vs Centralized Database
- Trust Minimization
- Peer-to-Peer Network
- Public Blockchain
- Private Blockchain

#### Use Cases

- Finance Use Cases
- Supply Chain Use Cases
- Identity Use Cases
- NFT Use Cases
- DAO Use Cases
- Payment Use Cases
- Insurance Use Cases
- When Not to Use Blockchain

### Module 02 - Blockchain Structure

- Phase: 01 - Blockchain Foundations
- Outcome: Understand the internal structure of blocks, transactions, hashes, Merkle trees, nodes and ledgers.
- Project: Mini project: Simulate a tiny blockchain in JavaScript or Python.
- Lesson count: 24

#### Block Structure

- Block Header
- Previous Hash
- Timestamp
- Nonce
- Transaction Root
- Block Height
- Genesis Block
- Block Validation

#### Transaction Structure

- Sender
- Receiver
- Amount
- Gas Fee
- Signature
- Transaction Hash
- Transaction Receipt
- Event Logs

#### Data Structures

- Hash
- Merkle Tree
- Merkle Root
- Merkle Proof
- Ledger
- State
- Account Model
- UTXO Model

### Module 03 - Blockchain Operations

- Phase: 01 - Blockchain Foundations
- Outcome: Follow transaction lifecycle, wallet operations, gas fees, mempool and testnet workflow.
- Project: Mini project: Create a testnet wallet, get faucet tokens and send one test transaction.
- Lesson count: 27

#### Transaction Lifecycle

- Create Transaction
- Sign with Private Key
- Broadcast Transaction
- Mempool
- Miner or Validator Processing
- Confirmation
- Finalization
- Transaction Failure
- Reverted Transaction

#### Wallet Operations

- Seed Phrase
- Private Key
- Public Key
- Address
- Sign Message
- Verify Message
- Hot Wallet
- Cold Wallet
- Custodial Wallet
- Non-custodial Wallet

#### Gas and Fees

- Gas Limit
- Gas Price
- Base Fee
- Priority Fee
- EIP-1559
- Gas Estimation
- Testnet Faucet
- Explorer Transaction Lookup

### Module 04 - General Blockchain Knowledge

- Phase: 02 - Cryptography Consensus and Ecosystems
- Outcome: Understand mining, incentives, forks, cryptocurrency, wallets, interoperability and trust tradeoffs.
- Project: Mini project: Compare Bitcoin, Ethereum, Solana and TON by architecture and developer experience.
- Lesson count: 23

#### Mining and Incentives

- Mining
- Incentive Models
- Block Reward
- Transaction Fee
- Validator Reward
- Staking
- Slashing
- MEV Basics

#### Forks and Trust

- Decentralization vs Trust
- Blockchain Forking
- Soft Fork
- Hard Fork
- Chain Split
- Governance Basics
- Protocol Upgrade

#### Cryptocurrency and Interoperability

- Cryptocurrency
- Coin vs Token
- Crypto Wallet
- Interoperability
- Bridge
- Cross-chain Messaging
- Wrapped Asset
- Bridge Risk

### Module 05 - Cryptography for Blockchain

- Phase: 02 - Cryptography Consensus and Ecosystems
- Outcome: Use hashing, public/private keys, addresses and digital signatures at a practical blockchain level.
- Project: Mini project: Code a sign-message and verify-signer demo.
- Lesson count: 21

#### Hashing

- Hash Function
- SHA-256
- keccak256
- Collision Resistance
- Preimage Resistance
- Hashing Transactions
- Hashing Blocks

#### Keys and Addresses

- Public Key
- Private Key
- Address Derivation
- Wallet Address
- Mnemonic Phrase
- HD Wallet
- Key Management

#### Digital Signatures

- Digital Signature
- Sign Message
- Verify Signature
- Recover Signer Address
- ECDSA
- Replay Attack Basics
- Signature UX

### Module 06 - Consensus Protocols

- Phase: 02 - Cryptography Consensus and Ecosystems
- Outcome: Compare proof-of-work, proof-of-stake, finality and BFT-style consensus design.
- Project: Mini project: Write a comparison table for PoW, PoS, delegated PoS and BFT-style consensus.
- Lesson count: 21

#### Proof of Work

- Proof of Work
- Miner Puzzle
- Difficulty
- Energy Cost
- Spam Resistance
- Longest Chain Rule
- 51 Percent Attack

#### Proof of Stake

- Proof of Stake
- Validator
- Stake
- Block Proposal
- Attestation
- Slashing
- Delegated Proof of Stake

#### Finality

- Finality
- Probabilistic Finality
- Economic Finality
- BFT-style Consensus
- Confirmation Depth
- Reorg
- Liveness and Safety

### Module 07 - Blockchain Ecosystems

- Phase: 02 - Cryptography Consensus and Ecosystems
- Outcome: Understand EVM chains, non-EVM chains, TVM chains and L2 ecosystems from a developer point of view.
- Project: Mini project: Deploy the same contract to local EVM and one EVM testnet.
- Lesson count: 26

#### EVM-based Chains

- Ethereum
- Polygon
- BNB Smart Chain
- Gnosis Chain
- Avalanche C-Chain
- Fantom
- EVM Compatibility
- Chain ID
- RPC Endpoint
- Block Explorer

#### TVM and Non-EVM Chains

- Solana
- TON
- TVM-based Chains
- Everscale
- Gosh
- Venom
- Account Model Differences
- Developer Tooling Differences

#### L2 Blockchains

- Arbitrum
- Optimism
- Base
- zkSync
- Starknet
- Moonbeam
- Moonriver
- L2 Testnets

### Module 08 - Smart Contracts

- Phase: 03 - Smart Contracts and Tooling
- Outcome: Write basic smart contracts and understand their lifecycle, state, events, language choices and IDEs.
- Project: Mini project: Write a TodoList or SimpleStorage smart contract.
- Lesson count: 31

#### Smart Contract Concepts

- What is a Smart Contract?
- On-chain State
- Contract Account
- Contract Lifecycle
- Deployment
- Constructor
- Function Call
- View Function
- Pure Function
- Event
- Modifier

#### Solidity Basics

- Solidity
- Variables
- Functions
- Mapping
- Struct
- Array
- Enum
- Visibility
- msg.sender
- msg.value
- require
- revert
- Custom Error

#### Languages and IDE

- Vyper Overview
- Rust Overview
- Remix IDE
- VS Code Solidity Plugin
- Solidity Compiler
- ABI
- Bytecode

### Module 09 - Smart Contract Frameworks

- Phase: 03 - Smart Contracts and Tooling
- Outcome: Use Hardhat, Foundry and legacy frameworks to compile, test, deploy, verify and debug contracts.
- Project: Mini project: Create a Hardhat or Foundry project, deploy locally and deploy to testnet.
- Lesson count: 24

#### Hardhat

- Hardhat
- Hardhat Init
- Compile Contract
- Hardhat Network
- Write Unit Test
- Deployment Script
- Code Coverage
- Contract Verification
- Debugging Stack Trace
- Hardhat Tasks

#### Foundry

- Foundry
- Forge
- Cast
- Anvil
- Solidity-native Testing
- Foundry Fuzz Test
- Foundry Script
- Gas Snapshot

#### Legacy and Python Tooling

- Truffle
- Brownie
- Ganache
- Migration Scripts
- Python Web3
- Read Legacy Codebase

### Module 10 - ERC Tokens Wallets Faucets and Storage

- Phase: 03 - Smart Contracts and Tooling
- Outcome: Build token contracts, connect wallets, use faucets and store decentralized metadata.
- Project: Mini project: Create an ERC-20 token or ERC-721 NFT using OpenZeppelin.
- Lesson count: 28

#### ERC Tokens

- ERC-20
- Fungible Token
- balanceOf
- transfer
- allowance
- approve
- transferFrom
- Mint
- Burn
- ERC-721
- NFT
- Metadata
- tokenURI
- ERC-1155 Overview
- OpenZeppelin Contracts

#### Wallets and Faucets

- MetaMask
- WalletConnect
- Account Switching
- Network Switching
- Faucet
- Testnet Token
- Explorer Verification

#### Decentralized Storage

- IPFS
- Arweave
- NFT Metadata Storage
- Content Addressing
- Pinning Service
- Metadata JSON

### Module 11 - Oracles and Chainlink

- Phase: 04 - dApps Oracles Security and Scaling
- Outcome: Use oracles to connect deterministic smart contracts with off-chain data and systems.
- Project: Mini project: Write a smart contract that reads an ETH/USD price feed.
- Lesson count: 17

#### Oracle Basics

- Oracle Problem
- Off-chain Data
- Deterministic Smart Contracts
- Centralized Oracle
- Decentralized Oracle
- Oracle Node
- Data Feed
- Oracle Network

#### Chainlink

- Chainlink
- Price Feed
- AggregatorV3Interface
- Stale Price Check
- Decimals
- Oracle Update Frequency
- Hybrid Smart Contract
- Automation Overview
- VRF Overview

### Module 12 - Smart Contract Security

- Phase: 04 - dApps Oracles Security and Scaling
- Outcome: Identify, test and mitigate common smart contract vulnerabilities.
- Project: Mini project: Audit a vulnerable mini contract and write a finding report.
- Lesson count: 28

#### Threat Vectors

- Common Threat Vectors
- Reentrancy
- Missing Access Control
- Integer Logic Bug
- Oracle Manipulation
- Front-running
- Sandwich Attack
- Denial of Service
- Upgradeable Contract Risk
- Unchecked External Call

#### Secure Design

- Access Control
- Ownable
- Role-based Permissioning
- Checks Effects Interactions
- Pull over Push Payments
- Pausable Contract
- Reentrancy Guard
- Source of Randomness Attack
- Commit Reveal Pattern

#### Security Tooling

- Static Analysis
- Slither
- MythX
- Manticore
- Fuzz Testing
- Echidna
- Foundry Fuzz Test
- Invariant Test
- Audit Report

### Module 13 - dApp Development

- Phase: 04 - dApps Oracles Security and Scaling
- Outcome: Build decentralized applications that connect frontend, wallet, RPC node and smart contracts.
- Project: Mini project: Token Dashboard with wallet connect, ERC-20 balance and transfer flow.
- Lesson count: 28

#### dApp Architecture

- dApp Architecture
- Frontend
- Wallet Provider
- Smart Contract
- Node RPC
- Blockchain
- Read Contract
- Write Contract
- Transaction Hash
- Transaction Confirmation UI

#### Frontend and Client Libraries

- JavaScript
- TypeScript
- React
- Vue
- Angular
- ethers.js
- web3.js
- Moralis
- wagmi Overview
- viem Overview

#### Node as a Service

- Alchemy
- Infura
- Moralis RPC
- QuickNode
- RPC Rate Limits
- RPC Error Handling
- Client Node
- Hosted Node Tradeoffs

### Module 14 - Building for Scale

- Phase: 04 - dApps Oracles Security and Scaling
- Outcome: Understand channels, rollups, validium, plasma, sidechains and Ethereum scaling tradeoffs.
- Project: Mini project: Deploy a contract to one L2 testnet and compare fees/gas with an L1 testnet.
- Lesson count: 22

#### Channels

- State Channel
- Payment Channel
- Off-chain Transaction
- On-chain Settlement
- Channel Dispute
- Channel Use Cases

#### Rollups

- Optimistic Rollups
- Fraud Proof
- Challenge Window
- ZK Rollups
- Zero-knowledge Proof
- Batch Transactions
- Sequencer
- Bridge to L2
- Withdrawal Delay

#### Other Scaling Approaches

- Validium
- Plasma
- Sidechains
- Data Availability
- Ethereum Scaling
- Security Assumptions
- Cost vs Security Tradeoff

### Module 15 - Capstone and Portfolio

- Phase: 05 - Capstone and Portfolio
- Outcome: Build a full-stack blockchain portfolio and show readiness for junior blockchain developer roles.
- Project: Capstone: Full-stack dApp with contract, tests, frontend, wallet connection, deploy and security notes.
- Lesson count: 43

#### Capstone Projects

- Token Launchpad Mini
- NFT Minting dApp
- DeFi Staking Mini
- ERC-20 Token Contract
- ERC-721 NFT Contract
- IPFS Metadata
- React Frontend
- Connect Wallet
- Mint Transfer Stake Withdraw
- Deployment Script
- Unit Tests
- Explorer Verification

#### Completion Checklist

- Understand Blocks Transactions Nodes Consensus
- Use Wallet Faucet Testnet
- Write Basic Solidity Contract
- Test with Hardhat or Foundry
- Deploy Contract to Testnet
- Use OpenZeppelin ERC-20 ERC-721
- Connect Frontend with ethers.js or web3.js
- Understand Oracles and Chainlink
- Know Common Security Bugs
- Run Static Analysis or Fuzz Testing
- Understand L2 Optimistic and ZK Rollups
- Complete Full-stack dApp

#### Recommended Stack

- JavaScript TypeScript Solidity
- Hardhat First
- Foundry Second
- React
- ethers.js
- MetaMask
- OpenZeppelin Contracts
- Alchemy or Infura
- IPFS
- Slither
- Foundry Fuzz Test
- Ethereum Sepolia
- Polygon or Arbitrum Testnet

#### Related Roadmaps

- Backend Roadmap
- JavaScript Roadmap
- Python Roadmap
- Rust Roadmap
- DevOps Roadmap
- Security Roadmap
