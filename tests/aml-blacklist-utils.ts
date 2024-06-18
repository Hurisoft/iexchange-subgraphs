import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AgentAdded,
  AgentRemoved,
  BlacklistAdded,
  BlacklistRemoved,
  OwnershipTransferred
} from "../generated/AMLBlacklist/AMLBlacklist"

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

export function createBlacklistAddedEvent(
  _address: Address,
  _agent: Address
): BlacklistAdded {
  let blacklistAddedEvent = changetype<BlacklistAdded>(newMockEvent())

  blacklistAddedEvent.parameters = new Array()

  blacklistAddedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  blacklistAddedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return blacklistAddedEvent
}

export function createBlacklistRemovedEvent(
  _address: Address,
  _agent: Address
): BlacklistRemoved {
  let blacklistRemovedEvent = changetype<BlacklistRemoved>(newMockEvent())

  blacklistRemovedEvent.parameters = new Array()

  blacklistRemovedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  blacklistRemovedEvent.parameters.push(
    new ethereum.EventParam("_agent", ethereum.Value.fromAddress(_agent))
  )

  return blacklistRemovedEvent
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
