import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/OptimisticP2P/OptimisticP2P"

export function createCurrencyAddedEvent(
  _addedBy: Address,
  _currency: string
): CurrencyAdded {
  let currencyAddedEvent = changetype<CurrencyAdded>(newMockEvent())

  currencyAddedEvent.parameters = new Array()

  currencyAddedEvent.parameters.push(
    new ethereum.EventParam("_addedBy", ethereum.Value.fromAddress(_addedBy))
  )
  currencyAddedEvent.parameters.push(
    new ethereum.EventParam("_currency", ethereum.Value.fromString(_currency))
  )

  return currencyAddedEvent
}

export function createCurrencyRemovedEvent(
  _removedBy: Address,
  _currency: string
): CurrencyRemoved {
  let currencyRemovedEvent = changetype<CurrencyRemoved>(newMockEvent())

  currencyRemovedEvent.parameters = new Array()

  currencyRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_removedBy",
      ethereum.Value.fromAddress(_removedBy)
    )
  )
  currencyRemovedEvent.parameters.push(
    new ethereum.EventParam("_currency", ethereum.Value.fromString(_currency))
  )

  return currencyRemovedEvent
}

export function createDAOVotedEvent(appealId: BigInt, daoVote: i32): DAOVoted {
  let daoVotedEvent = changetype<DAOVoted>(newMockEvent())

  daoVotedEvent.parameters = new Array()

  daoVotedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  daoVotedEvent.parameters.push(
    new ethereum.EventParam(
      "daoVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(daoVote))
    )
  )

  return daoVotedEvent
}

export function createMerchantStakedEvent(
  merchant: Address,
  amount: BigInt
): MerchantStaked {
  let merchantStakedEvent = changetype<MerchantStaked>(newMockEvent())

  merchantStakedEvent.parameters = new Array()

  merchantStakedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  merchantStakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return merchantStakedEvent
}

export function createMerchantUnstakedEvent(
  merchant: Address,
  amount: BigInt
): MerchantUnstaked {
  let merchantUnstakedEvent = changetype<MerchantUnstaked>(newMockEvent())

  merchantUnstakedEvent.parameters = new Array()

  merchantUnstakedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  merchantUnstakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return merchantUnstakedEvent
}

export function createMerchantVotedEvent(
  appealId: BigInt,
  merchant: Address,
  settled: boolean,
  merchantVote: i32,
  roundId: BigInt
): MerchantVoted {
  let merchantVotedEvent = changetype<MerchantVoted>(newMockEvent())

  merchantVotedEvent.parameters = new Array()

  merchantVotedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  merchantVotedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  merchantVotedEvent.parameters.push(
    new ethereum.EventParam("settled", ethereum.Value.fromBoolean(settled))
  )
  merchantVotedEvent.parameters.push(
    new ethereum.EventParam(
      "merchantVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(merchantVote))
    )
  )
  merchantVotedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )

  return merchantVotedEvent
}

export function createNewMerchantEvent(merchant: Address): NewMerchant {
  let newMerchantEvent = changetype<NewMerchant>(newMockEvent())

  newMerchantEvent.parameters = new Array()

  newMerchantEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return newMerchantEvent
}

export function createNewOfferEvent(
  token: Address,
  currency: string,
  paymentMethod: Bytes,
  offerId: BigInt,
  rate: BigInt,
  minOrder: BigInt,
  maxOrder: BigInt,
  active: boolean,
  merchant: Address,
  accountHash: Bytes,
  depositAddress: Address,
  offerType: i32
): NewOffer {
  let newOfferEvent = changetype<NewOffer>(newMockEvent())

  newOfferEvent.parameters = new Array()

  newOfferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromString(currency))
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "paymentMethod",
      ethereum.Value.fromFixedBytes(paymentMethod)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "minOrder",
      ethereum.Value.fromUnsignedBigInt(minOrder)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "maxOrder",
      ethereum.Value.fromUnsignedBigInt(maxOrder)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "accountHash",
      ethereum.Value.fromFixedBytes(accountHash)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "depositAddress",
      ethereum.Value.fromAddress(depositAddress)
    )
  )
  newOfferEvent.parameters.push(
    new ethereum.EventParam(
      "offerType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(offerType))
    )
  )

  return newOfferEvent
}

export function createNewOrderEvent(
  offerId: BigInt,
  trader: Address,
  orderType: i32,
  quantity: BigInt,
  depositAddress: Address,
  accountHash: Bytes,
  appealId: BigInt,
  status: i32
): NewOrder {
  let newOrderEvent = changetype<NewOrder>(newMockEvent())

  newOrderEvent.parameters = new Array()

  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(orderType))
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "depositAddress",
      ethereum.Value.fromAddress(depositAddress)
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "accountHash",
      ethereum.Value.fromFixedBytes(accountHash)
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  newOrderEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return newOrderEvent
}

export function createNewSettlerEvent(settler: Address): NewSettler {
  let newSettlerEvent = changetype<NewSettler>(newMockEvent())

  newSettlerEvent.parameters = new Array()

  newSettlerEvent.parameters.push(
    new ethereum.EventParam("settler", ethereum.Value.fromAddress(settler))
  )

  return newSettlerEvent
}

export function createNewTraderEvent(trader: Address): NewTrader {
  let newTraderEvent = changetype<NewTrader>(newMockEvent())

  newTraderEvent.parameters = new Array()

  newTraderEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )

  return newTraderEvent
}

export function createOfferDisabledEvent(
  offerId: BigInt,
  active: boolean
): OfferDisabled {
  let offerDisabledEvent = changetype<OfferDisabled>(newMockEvent())

  offerDisabledEvent.parameters = new Array()

  offerDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerDisabledEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return offerDisabledEvent
}

export function createOfferEnabledEvent(
  offerId: BigInt,
  active: boolean
): OfferEnabled {
  let offerEnabledEvent = changetype<OfferEnabled>(newMockEvent())

  offerEnabledEvent.parameters = new Array()

  offerEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerEnabledEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return offerEnabledEvent
}

export function createOrderAcceptedEvent(
  orderId: BigInt,
  status: i32
): OrderAccepted {
  let orderAcceptedEvent = changetype<OrderAccepted>(newMockEvent())

  orderAcceptedEvent.parameters = new Array()

  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return orderAcceptedEvent
}

export function createOrderAppealedEvent(
  orderId: BigInt,
  appealId: BigInt,
  appealer: Address,
  reasonHash: Bytes,
  daoVote: i32,
  appealDecision: i32,
  status: i32
): OrderAppealed {
  let orderAppealedEvent = changetype<OrderAppealed>(newMockEvent())

  orderAppealedEvent.parameters = new Array()

  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam("appealer", ethereum.Value.fromAddress(appealer))
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "reasonHash",
      ethereum.Value.fromFixedBytes(reasonHash)
    )
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "daoVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(daoVote))
    )
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "appealDecision",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(appealDecision))
    )
  )
  orderAppealedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return orderAppealedEvent
}

export function createOrderCancelledEvent(
  orderId: BigInt,
  status: i32
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return orderCancelledEvent
}

export function createOrderPaidEvent(orderId: BigInt, status: i32): OrderPaid {
  let orderPaidEvent = changetype<OrderPaid>(newMockEvent())

  orderPaidEvent.parameters = new Array()

  orderPaidEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderPaidEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return orderPaidEvent
}

export function createOrderReleasedEvent(
  orderId: BigInt,
  status: i32
): OrderReleased {
  let orderReleasedEvent = changetype<OrderReleased>(newMockEvent())

  orderReleasedEvent.parameters = new Array()

  orderReleasedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderReleasedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return orderReleasedEvent
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

export function createPaymentMethodAddedEvent(
  _addedBy: Address,
  _method: string
): PaymentMethodAdded {
  let paymentMethodAddedEvent = changetype<PaymentMethodAdded>(newMockEvent())

  paymentMethodAddedEvent.parameters = new Array()

  paymentMethodAddedEvent.parameters.push(
    new ethereum.EventParam("_addedBy", ethereum.Value.fromAddress(_addedBy))
  )
  paymentMethodAddedEvent.parameters.push(
    new ethereum.EventParam("_method", ethereum.Value.fromString(_method))
  )

  return paymentMethodAddedEvent
}

export function createPaymentMethodRemovedEvent(
  _removedBy: Address,
  _method: string
): PaymentMethodRemoved {
  let paymentMethodRemovedEvent = changetype<PaymentMethodRemoved>(
    newMockEvent()
  )

  paymentMethodRemovedEvent.parameters = new Array()

  paymentMethodRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_removedBy",
      ethereum.Value.fromAddress(_removedBy)
    )
  )
  paymentMethodRemovedEvent.parameters.push(
    new ethereum.EventParam("_method", ethereum.Value.fromString(_method))
  )

  return paymentMethodRemovedEvent
}

export function createPenaltySlashedEvent(
  appealId: BigInt,
  affected: Array<Address>
): PenaltySlashed {
  let penaltySlashedEvent = changetype<PenaltySlashed>(newMockEvent())

  penaltySlashedEvent.parameters = new Array()

  penaltySlashedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  penaltySlashedEvent.parameters.push(
    new ethereum.EventParam(
      "affected",
      ethereum.Value.fromAddressArray(affected)
    )
  )

  return penaltySlashedEvent
}

export function createRewardDistributedEvent(
  appealId: BigInt,
  beneficiaries: Array<Address>
): RewardDistributed {
  let rewardDistributedEvent = changetype<RewardDistributed>(newMockEvent())

  rewardDistributedEvent.parameters = new Array()

  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiaries",
      ethereum.Value.fromAddressArray(beneficiaries)
    )
  )

  return rewardDistributedEvent
}

export function createSettlerAssignedToCaseEvent(
  _settler: Address,
  _caseId: BigInt
): SettlerAssignedToCase {
  let settlerAssignedToCaseEvent = changetype<SettlerAssignedToCase>(
    newMockEvent()
  )

  settlerAssignedToCaseEvent.parameters = new Array()

  settlerAssignedToCaseEvent.parameters.push(
    new ethereum.EventParam("_settler", ethereum.Value.fromAddress(_settler))
  )
  settlerAssignedToCaseEvent.parameters.push(
    new ethereum.EventParam(
      "_caseId",
      ethereum.Value.fromUnsignedBigInt(_caseId)
    )
  )

  return settlerAssignedToCaseEvent
}

export function createSettlerStakedEvent(
  settler: Address,
  amount: BigInt
): SettlerStaked {
  let settlerStakedEvent = changetype<SettlerStaked>(newMockEvent())

  settlerStakedEvent.parameters = new Array()

  settlerStakedEvent.parameters.push(
    new ethereum.EventParam("settler", ethereum.Value.fromAddress(settler))
  )
  settlerStakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return settlerStakedEvent
}

export function createSettlerUnstakedEvent(
  settler: Address,
  amount: BigInt
): SettlerUnstaked {
  let settlerUnstakedEvent = changetype<SettlerUnstaked>(newMockEvent())

  settlerUnstakedEvent.parameters = new Array()

  settlerUnstakedEvent.parameters.push(
    new ethereum.EventParam("settler", ethereum.Value.fromAddress(settler))
  )
  settlerUnstakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return settlerUnstakedEvent
}

export function createSettlerVotedEvent(
  appealId: BigInt,
  settler: Address,
  settled: boolean,
  settlerVote: i32,
  roundId: BigInt
): SettlerVoted {
  let settlerVotedEvent = changetype<SettlerVoted>(newMockEvent())

  settlerVotedEvent.parameters = new Array()

  settlerVotedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  settlerVotedEvent.parameters.push(
    new ethereum.EventParam("settler", ethereum.Value.fromAddress(settler))
  )
  settlerVotedEvent.parameters.push(
    new ethereum.EventParam("settled", ethereum.Value.fromBoolean(settled))
  )
  settlerVotedEvent.parameters.push(
    new ethereum.EventParam(
      "settlerVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(settlerVote))
    )
  )
  settlerVotedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )

  return settlerVotedEvent
}

export function createTokenAddedEvent(
  _token: Address,
  _addedBy: Address
): TokenAdded {
  let tokenAddedEvent = changetype<TokenAdded>(newMockEvent())

  tokenAddedEvent.parameters = new Array()

  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("_addedBy", ethereum.Value.fromAddress(_addedBy))
  )

  return tokenAddedEvent
}

export function createTokenRemovedEvent(
  _token: Address,
  _addedBy: Address
): TokenRemoved {
  let tokenRemovedEvent = changetype<TokenRemoved>(newMockEvent())

  tokenRemovedEvent.parameters = new Array()

  tokenRemovedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  tokenRemovedEvent.parameters.push(
    new ethereum.EventParam("_addedBy", ethereum.Value.fromAddress(_addedBy))
  )

  return tokenRemovedEvent
}

export function createTraderVotedEvent(
  appealId: BigInt,
  trader: Address,
  settled: boolean,
  traderVote: i32,
  roundId: BigInt
): TraderVoted {
  let traderVotedEvent = changetype<TraderVoted>(newMockEvent())

  traderVotedEvent.parameters = new Array()

  traderVotedEvent.parameters.push(
    new ethereum.EventParam(
      "appealId",
      ethereum.Value.fromUnsignedBigInt(appealId)
    )
  )
  traderVotedEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader))
  )
  traderVotedEvent.parameters.push(
    new ethereum.EventParam("settled", ethereum.Value.fromBoolean(settled))
  )
  traderVotedEvent.parameters.push(
    new ethereum.EventParam(
      "traderVote",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(traderVote))
    )
  )
  traderVotedEvent.parameters.push(
    new ethereum.EventParam(
      "roundId",
      ethereum.Value.fromUnsignedBigInt(roundId)
    )
  )

  return traderVotedEvent
}
