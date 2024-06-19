import { Address } from "@graphprotocol/graph-ts";
import { Account } from "../generated/schema";

export function saveAccount(address: Address): void {
  let account = Account.load(address);
  if (account == null) {
    account = new Account(address);
    account.save();
  }
}
