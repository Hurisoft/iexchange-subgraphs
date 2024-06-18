import {
  AgentAdded as AgentAddedEvent,
  AgentRemoved as AgentRemovedEvent,
  KYCLevelDowngraded as KYCLevelDowngradedEvent,
  KYCLevelUpgraded as KYCLevelUpgradedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/KYCWhitelist/KYCWhitelist"
import {
  AgentAdded,
  AgentRemoved,
  KYCLevelDowngraded,
  KYCLevelUpgraded,
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

export function handleKYCLevelDowngraded(event: KYCLevelDowngradedEvent): void {
  let entity = new KYCLevelDowngraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._address = event.params._address
  entity._agent = event.params._agent
  entity._level = event.params._level

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleKYCLevelUpgraded(event: KYCLevelUpgradedEvent): void {
  let entity = new KYCLevelUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._address = event.params._address
  entity._agent = event.params._agent
  entity._level = event.params._level

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
