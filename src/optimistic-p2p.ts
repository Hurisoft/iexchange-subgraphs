import { ByteArray, Bytes } from "@graphprotocol/graph-ts";
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
  TraderVoted as TraderVotedEvent,
} from "../generated/OptimisticP2P/OptimisticP2P";
import { ERC20 } from "../generated/OptimisticP2P/ERC20";
import {
  Account,
  P2PToken,
  Currency,
  PaymentMethod,
  Offer,
  Order,
  Appeal,
  AppealRound,
} from "../generated/schema";
import { saveAccount } from "./helpers";

export function handleCurrencyAdded(event: CurrencyAddedEvent): void {
  const id = Bytes.fromUTF8(event.params._currency);
  let currency = Currency.load(id);
  if (currency == null) {
    currency = new Currency(id);
  }
  currency.addedBy = event.params._addedBy;
  currency.currency = event.params._currency;
  currency.isAccepted = true;
  saveAccount(event.params._addedBy);
  currency.save();
}

export function handleCurrencyRemoved(event: CurrencyRemovedEvent): void {
  const id = Bytes.fromUTF8(event.params._currency);
  let currency = Currency.load(id);
  if (currency == null) {
    return;
  }
  currency.removedBy = event.params._removedBy;
  currency.isAccepted = false;
  saveAccount(event.params._removedBy);
  currency.save();
}

export function handlePaymentMethodAdded(event: PaymentMethodAddedEvent): void {
  const id = Bytes.fromUTF8(event.params._method);
  let method = PaymentMethod.load(id);
  if (method == null) {
    method = new PaymentMethod(id);
  }
  method.addedBy = event.params._addedBy;
  method.method = event.params._method;
  method.isAccepted = true;
  saveAccount(event.params._addedBy);
  method.save();
}

export function handlePaymentMethodRemoved(
  event: PaymentMethodRemovedEvent
): void {
  const id = Bytes.fromUTF8(event.params._method);
  let method = PaymentMethod.load(id);
  if (method == null) {
    return;
  }
  method.removedBy = event.params._removedBy;
  method.isAccepted = false;
  saveAccount(event.params._removedBy);
  method.save();
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  const id = event.params._token;
  let token = P2PToken.load(id);
  if (token == null) {
    token = new P2PToken(id);
  }
  const erc20 = ERC20.bind(event.params._token);
  token.name = erc20.try_name().reverted ? "" : erc20.name();
  token.symbol = erc20.try_symbol().reverted ? "" : erc20.symbol();
  token.addedBy = event.params._addedBy;
  token.isTraded = true;
  saveAccount(event.params._addedBy);
  token.save();
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  const id = event.params._token;
  let token = P2PToken.load(id);
  if (token == null) {
    return;
  }
  token.removedBy = event.params._addedBy;
  token.isTraded = false;
  saveAccount(event.params._addedBy);
  token.save();
}

export function handleNewTrader(event: NewTraderEvent): void {
  const id = event.params.trader;
  let account = Account.load(id);
  if (account == null) {
    account = new Account(id);
    account.isSettler = false;
    account.isMerchant = false;
    account.isKYCAgent = false;
    account.isAMLAgent = false;
    account.isDao = false;
  }
  account.isTrader = true;
  account.save();
}

export function handleNewMerchant(event: NewMerchantEvent): void {
  const id = event.params.merchant;
  let account = Account.load(id);
  if (account == null) {
    account = new Account(id);
    account.isSettler = false;
    account.isTrader = false;
    account.isKYCAgent = false;
    account.isAMLAgent = false;
    account.isDao = false;
  }
  account.isMerchant = true;
  account.save();
}

export function handleNewSettler(event: NewSettlerEvent): void {
  const id = event.params.settler;
  let account = Account.load(id);
  if (account == null) {
    account = new Account(id);
    account.isTrader = false;
    account.isMerchant = false;
    account.isKYCAgent = false;
    account.isAMLAgent = false;
    account.isDao = false;
  }
  account.isSettler = true;
  account.save();
}

// export function handleMerchantStaked(event: MerchantStakedEvent): void {}

export function handleMerchantUnstaked(event: MerchantUnstakedEvent): void {
  const id = event.params.merchant;
  let account = Account.load(id);
  if (account == null) {
    return;
  }
  account.isMerchant = false;
  account.save();
}

// export function handleSettlerStaked(event: SettlerStakedEvent): void {}

export function handleSettlerUnstaked(event: SettlerUnstakedEvent): void {
  const id = event.params.settler;
  let account = Account.load(id);
  if (account == null) {
    return;
  }
  account.isSettler = false;
  account.save();
}

export function handleNewOffer(event: NewOfferEvent): void {
  const id = event.params.offerId.toString();
  let offer = Offer.load(id);
  if (offer == null) {
    offer = new Offer(id);
  }
  offer.token = event.params.token;
  offer.currency = Bytes.fromUTF8(event.params.currency);
  offer.paymentMethod = Bytes.fromUTF8(event.params.paymentMethod);
  offer.rate = event.params.rate;
  offer.minOrder = event.params.minOrder;
  offer.maxOrder = event.params.maxOrder;
  offer.active = event.params.active;
  offer.merchant = event.params.merchant;
  offer.accountHash = event.params.accountHash;
  offer.depositAddress = event.params.depositAddress;
  offer.offerType = event.params.offerType;
  offer.blockNumber = event.block.number;
  offer.blockTimestamp = event.block.timestamp;
  offer.transactionHash = event.transaction.hash;
  saveAccount(event.params.depositAddress);
  offer.save();
}

export function handleOfferDisabled(event: OfferDisabledEvent): void {
  const id = event.params.offerId.toString();
  let offer = Offer.load(id);
  if (offer == null) {
    return;
  }
  offer.active = event.params.active;
  offer.save();
}

export function handleOfferEnabled(event: OfferEnabledEvent): void {
  const id = event.params.offerId.toString();
  let offer = Offer.load(id);
  if (offer == null) {
    return;
  }
  offer.active = event.params.active;
  offer.save();
}

export function handleNewOrder(event: NewOrderEvent): void {
  const id = event.params.orderId.toString();
  let order = Order.load(id);
  if (order == null) {
    order = new Order(id);
  }
  order.offer = event.params.offerId.toString();
  order.trader = event.params.trader;
  order.orderType = event.params.orderType;
  order.quantity = event.params.quantity;
  order.depositAddress = event.params.depositAddress;
  order.accountHash = event.params.accountHash;
  order.appeal = event.params.appealId.toString();
  order.status = event.params.status;
  order.blockNumber = event.block.number;
  order.blockTimestamp = event.block.timestamp;
  order.transactionHash = event.transaction.hash;
  saveAccount(event.params.depositAddress);
  order.save();
}

export function handleOrderAccepted(event: OrderAcceptedEvent): void {
  const id = event.params.orderId.toString();
  let order = Order.load(id);
  if (order == null) {
    return;
  }
  order.status = event.params.status;
  order.save();
}

export function handleOrderPaid(event: OrderPaidEvent): void {
  const id = event.params.orderId.toString();
  let order = Order.load(id);
  if (order == null) {
    return;
  }
  order.status = event.params.status;
  order.save();
}

export function handleOrderReleased(event: OrderReleasedEvent): void {
  const id = event.params.orderId.toString();
  let order = Order.load(id);
  if (order == null) {
    return;
  }
  order.status = event.params.status;
  order.save();
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  const id = event.params.orderId.toString();
  let order = Order.load(id);
  if (order == null) {
    return;
  }
  order.status = event.params.status;
  order.save();
}

export function handleOrderAppealed(event: OrderAppealedEvent): void {
  const orderId = event.params.orderId.toString();
  let order = Order.load(orderId);
  if (order == null) {
    return;
  }
  const appealId = event.params.appealId.toString();
  let appeal = Appeal.load(appealId);
  if (appeal == null) {
    appeal = new Appeal(appealId);
  }
  appeal.order = orderId;
  appeal.appealer = event.params.appealer;
  appeal.reasonHash = event.params.reasonHash;
  appeal.daoVote = event.params.daoVote;
  appeal.appealDecision = 0;
  appeal.blockNumber = event.block.number;
  appeal.blockTimestamp = event.block.timestamp;
  appeal.transactionHash = event.transaction.hash;
  appeal.save();
  order.status = event.params.status;
  order.appeal = appealId;
  order.save();
}

// export function handleOwnershipTransferred(
//   event: OwnershipTransferredEvent
// ): void {}

// export function handlePenaltySlashed(event: PenaltySlashedEvent): void {}

// export function handleRewardDistributed(event: RewardDistributedEvent): void {}

export function handleSettlerAssignedToCase(
  event: SettlerAssignedToCaseEvent
): void {
  const id = event.params._caseId.toString();
  const appeal = Appeal.load(id);
  if (appeal == null) {
    return;
  }
  appeal.currentSettler = event.params._settler;
  appeal.settlerPickTime = event.block.timestamp;
  appeal.save();
}

export function handleSettlerVoted(event: SettlerVotedEvent): void {
  const settlerId = event.params.settler;
  const account = Account.load(settlerId);
  if (account == null) {
    return;
  }
  const appealId = event.params.appealId.toString();
  const appeal = Appeal.load(appealId);
  if (appeal == null) {
    return;
  }
  let roundId = appealId.concat(event.params.roundId.toString());
  let round = AppealRound.load(roundId);
  if (round == null) {
    round = new AppealRound(roundId);
    round.merchantVote = 0;
    round.traderVote = 0;
    round.appeal = appealId;
  }
  round.settler = event.params.settler;
  round.settled = event.params.settled;
  round.settlerVote = event.params.settlerVote;
  round.save();
}

export function handleTraderVoted(event: TraderVotedEvent): void {
  const traderId = event.params.trader;
  const account = Account.load(traderId);
  if (account == null) {
    return;
  }
  const appealId = event.params.appealId.toString();
  const appeal = Appeal.load(appealId);
  if (appeal == null) {
    return;
  }
  let roundId = appealId.concat(event.params.roundId.toString());
  const round = AppealRound.load(roundId);
  if (round == null) {
    return;
  }
  round.settled = event.params.settled;
  round.traderVote = event.params.traderVote;
  round.save();

  if (event.params.settled) {
    appeal.appealDecision = event.params.traderVote;
    appeal.save();
  }
}

export function handleMerchantVoted(event: MerchantVotedEvent): void {
  const merchantId = event.params.merchant;
  const account = Account.load(merchantId);
  if (account == null) {
    return;
  }
  const appealId = event.params.appealId.toString();
  const appeal = Appeal.load(appealId);
  if (appeal == null) {
    return;
  }
  let roundId = appealId.concat(event.params.roundId.toString());
  const round = AppealRound.load(roundId);
  if (round == null) {
    return;
  }
  round.settled = event.params.settled;
  round.merchantVote = event.params.merchantVote;
  round.save();

  if (event.params.settled) {
    appeal.appealDecision = event.params.merchantVote;
    appeal.save();
  }
}

export function handleDAOVoted(event: DAOVotedEvent): void {
  const appealId = event.params.appealId.toString();
  const appeal = Appeal.load(appealId);
  if (appeal == null) {
    return;
  }

  const id = event.address;
  let account = Account.load(id);
  if (account == null) {
    account = new Account(id);
    account.isSettler = false;
    account.isTrader = false;
    account.isMerchant = false;
    account.isKYCAgent = false;
    account.isAMLAgent = false;
  }
  account.isDao = true;
  account.save();

  appeal.daoVote = event.params.daoVote;
  appeal.appealDecision = event.params.daoVote;
  appeal.save();
}
