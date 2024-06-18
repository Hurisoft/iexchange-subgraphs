import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AgentAdded,
  AgentRemoved,
  KYCLevelDowngraded,
  KYCLevelUpgraded,
  OwnershipTransferred
} from "../generated/KYCWhitelist/KYCWhitelist"

export function createAgentAddedEvent(_agent: Address): AgentAdded {
  let agentAddedEvent = changetype<AgentAdded>(newMockEvent())

  agentAddedEvent.parameters = new Array()

  agentAddedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return agentAddedEvent
}

export function createAgentRemovedEvent(_agent: Address): AgentRemoved {
  let agentRemovedEvent = changetype<AgentRemoved>(newMockEvent())

  agentRemovedEvent.parameters = new Array()

  agentRemovedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return agentRemovedEvent
}

export function createKYCLevelDowngradedEvent(
  _address: Address,
  _agent: Address,
  _level: i32
): KYCLevelDowngraded {
  let kycLevelDowngradedEvent = changetype<KYCLevelDowngraded>(newMockEvent())

  kycLevelDowngradedEvent.parameters = new Array()

  kycLevelDowngradedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  kycLevelDowngradedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )
  kycLevelDowngradedEvent.parameters.push(
    new ethereum.EventParam(
      "_level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_level))
    )
  )

  return kycLevelDowngradedEvent
}

export function createKYCLevelUpgradedEvent(
  _address: Address,
  _agent: Address,
  _level: i32
): KYCLevelUpgraded {
  let kycLevelUpgradedEvent = changetype<KYCLevelUpgraded>(newMockEvent())

  kycLevelUpgradedEvent.parameters = new Array()

  kycLevelUpgradedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  kycLevelUpgradedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )
  kycLevelUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_level))
    )
  )

  return kycLevelUpgradedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
