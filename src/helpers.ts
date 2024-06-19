import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Account } from "../generated/schema";

export function saveAccount(address: Address): void {
  let account = Account.load(address);
  if (account == null) {
    account = new Account(address);
    account.isSettler = false;
    account.isTrader = false;
    account.isMerchant = false;
    account.isKYCAgent = false;
    account.isAMLAgent = false;
    account.isDao = false;
    account.save();
  }
}

export function bigIntToBytes(bint: BigInt): Bytes {
    return Bytes.fromHexString(bint.toHex());
}