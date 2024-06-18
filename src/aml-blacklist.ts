import {
  AgentAdded as AgentAddedEvent,
  AgentRemoved as AgentRemovedEvent,
  BlacklistAdded as BlacklistAddedEvent,
  BlacklistRemoved as BlacklistRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/AMLBlacklist/AMLBlacklist"
import {
  AgentAdded,
  AgentRemoved,
  BlacklistAdded,
  BlacklistRemoved,
  OwnershipTransferred,
} from "../generated/schema"

export function handleAgentAdded(event: AgentAddedEvent): void {
  let entity = new AgentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAgentRemoved(event: AgentRemovedEvent): void {
  let entity = new AgentRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlacklistAdded(event: BlacklistAddedEvent): void {
  let entity = new BlacklistAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._address = event.params._address
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlacklistRemoved(event: BlacklistRemovedEvent): void {
  let entity = new BlacklistRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._address = event.params._address
  entity._agent = event.params._agent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
