import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CurrencyAdded } from "../generated/schema"
import { CurrencyAdded as CurrencyAddedEvent } from "../generated/OptimisticP2P/OptimisticP2P"
import { handleCurrencyAdded } from "../src/optimistic-p-2-p"
import { createCurrencyAddedEvent } from "./optimistic-p-2-p-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _addedBy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _currency = "Example string value"
    let newCurrencyAddedEvent = createCurrencyAddedEvent(_addedBy, _currency)
    handleCurrencyAdded(newCurrencyAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CurrencyAdded created and stored", () => {
    assert.entityCount("CurrencyAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CurrencyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_addedBy",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CurrencyAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_currency",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
