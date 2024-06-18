import {
  CurrencyAdded as CurrencyAddedEvent,
  CurrencyRemoved as CurrencyRemovedEvent,
  DAOVoted as DAOVotedEvent,
  MerchantStaked as MerchantStakedEvent,
  MerchantUnstaked as MerchantUnstakedEvent,
  MerchantVoted as MerchantVotedEvent,
  NewMerchant as NewMerchantEvent,
  NewOffer as NewOfferEvent,
  NewOrder as NewOrderEvent,
  NewSettler as NewSettlerEvent,
  NewTrader as NewTraderEvent,
  OfferDisabled as OfferDisabledEvent,
  OfferEnabled as OfferEnabledEvent,
  OrderAccepted as OrderAcceptedEvent,
  OrderAppealed as OrderAppealedEvent,
  OrderCancelled as OrderCancelledEvent,
  OrderPaid as OrderPaidEvent,
  OrderReleased as OrderReleasedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PaymentMethodAdded as PaymentMethodAddedEvent,
  PaymentMethodRemoved as PaymentMethodRemovedEvent,
  PenaltySlashed as PenaltySlashedEvent,
  RewardDistributed as RewardDistributedEvent,
  SettlerAssignedToCase as SettlerAssignedToCaseEvent,
  SettlerStaked as SettlerStakedEvent,
  SettlerUnstaked as SettlerUnstakedEvent,
  SettlerVoted as SettlerVotedEvent,
  TokenAdded as TokenAddedEvent,
  TokenRemoved as TokenRemovedEvent,
  TraderVoted as TraderVotedEvent
} from "../generated/OptimisticP2P/OptimisticP2P"
import {
  CurrencyAdded,
  CurrencyRemoved,
  DAOVoted,
  MerchantStaked,
  MerchantUnstaked,
  MerchantVoted,
  NewMerchant,
  NewOffer,
  NewOrder,
  NewSettler,
  NewTrader,
  OfferDisabled,
  OfferEnabled,
  OrderAccepted,
  OrderAppealed,
  OrderCancelled,
  OrderPaid,
  OrderReleased,
  OwnershipTransferred,
  PaymentMethodAdded,
  PaymentMethodRemoved,
  PenaltySlashed,
  RewardDistributed,
  SettlerAssignedToCase,
  SettlerStaked,
  SettlerUnstaked,
  SettlerVoted,
  TokenAdded,
  TokenRemoved,
  TraderVoted
} from "../generated/schema"

export function handleCurrencyAdded(event: CurrencyAddedEvent): void {
  let entity = new CurrencyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._addedBy = event.params._addedBy
  entity._currency = event.params._currency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCurrencyRemoved(event: CurrencyRemovedEvent): void {
  let entity = new CurrencyRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._removedBy = event.params._removedBy
  entity._currency = event.params._currency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDAOVoted(event: DAOVotedEvent): void {
  let entity = new DAOVoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.daoVote = event.params.daoVote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerchantStaked(event: MerchantStakedEvent): void {
  let entity = new MerchantStaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchant = event.params.merchant
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerchantUnstaked(event: MerchantUnstakedEvent): void {
  let entity = new MerchantUnstaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchant = event.params.merchant
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerchantVoted(event: MerchantVotedEvent): void {
  let entity = new MerchantVoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.merchant = event.params.merchant
  entity.settled = event.params.settled
  entity.merchantVote = event.params.merchantVote
  entity.roundId = event.params.roundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewMerchant(event: NewMerchantEvent): void {
  let entity = new NewMerchant(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOffer(event: NewOfferEvent): void {
  let entity = new NewOffer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.currency = event.params.currency
  entity.paymentMethod = event.params.paymentMethod
  entity.offerId = event.params.offerId
  entity.rate = event.params.rate
  entity.minOrder = event.params.minOrder
  entity.maxOrder = event.params.maxOrder
  entity.active = event.params.active
  entity.merchant = event.params.merchant
  entity.accountHash = event.params.accountHash
  entity.depositAddress = event.params.depositAddress
  entity.offerType = event.params.offerType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOrder(event: NewOrderEvent): void {
  let entity = new NewOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerId = event.params.offerId
  entity.trader = event.params.trader
  entity.orderType = event.params.orderType
  entity.quantity = event.params.quantity
  entity.depositAddress = event.params.depositAddress
  entity.accountHash = event.params.accountHash
  entity.appealId = event.params.appealId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewSettler(event: NewSettlerEvent): void {
  let entity = new NewSettler(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.settler = event.params.settler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTrader(event: NewTraderEvent): void {
  let entity = new NewTrader(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferDisabled(event: OfferDisabledEvent): void {
  let entity = new OfferDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerId = event.params.offerId
  entity.active = event.params.active

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferEnabled(event: OfferEnabledEvent): void {
  let entity = new OfferEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerId = event.params.offerId
  entity.active = event.params.active

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderAccepted(event: OrderAcceptedEvent): void {
  let entity = new OrderAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderAppealed(event: OrderAppealedEvent): void {
  let entity = new OrderAppealed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.appealId = event.params.appealId
  entity.appealer = event.params.appealer
  entity.reasonHash = event.params.reasonHash
  entity.daoVote = event.params.daoVote
  entity.appealDecision = event.params.appealDecision
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderPaid(event: OrderPaidEvent): void {
  let entity = new OrderPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderReleased(event: OrderReleasedEvent): void {
  let entity = new OrderReleased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMethodAdded(event: PaymentMethodAddedEvent): void {
  let entity = new PaymentMethodAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._addedBy = event.params._addedBy
  entity._method = event.params._method

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMethodRemoved(
  event: PaymentMethodRemovedEvent
): void {
  let entity = new PaymentMethodRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._removedBy = event.params._removedBy
  entity._method = event.params._method

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePenaltySlashed(event: PenaltySlashedEvent): void {
  let entity = new PenaltySlashed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.affected = event.params.affected

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardDistributed(event: RewardDistributedEvent): void {
  let entity = new RewardDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.beneficiaries = event.params.beneficiaries

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlerAssignedToCase(
  event: SettlerAssignedToCaseEvent
): void {
  let entity = new SettlerAssignedToCase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._settler = event.params._settler
  entity._caseId = event.params._caseId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlerStaked(event: SettlerStakedEvent): void {
  let entity = new SettlerStaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.settler = event.params.settler
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlerUnstaked(event: SettlerUnstakedEvent): void {
  let entity = new SettlerUnstaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.settler = event.params.settler
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlerVoted(event: SettlerVotedEvent): void {
  let entity = new SettlerVoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.settler = event.params.settler
  entity.settled = event.params.settled
  entity.settlerVote = event.params.settlerVote
  entity.roundId = event.params.roundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let entity = new TokenAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._token = event.params._token
  entity._addedBy = event.params._addedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  let entity = new TokenRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._token = event.params._token
  entity._addedBy = event.params._addedBy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTraderVoted(event: TraderVotedEvent): void {
  let entity = new TraderVoted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appealId = event.params.appealId
  entity.trader = event.params.trader
  entity.settled = event.params.settled
  entity.traderVote = event.params.traderVote
  entity.roundId = event.params.roundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
