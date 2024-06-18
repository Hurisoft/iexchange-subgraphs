import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { AgentAdded } from "../generated/schema"
import { AgentAdded as AgentAddedEvent } from "../generated/KYCWhitelist/KYCWhitelist"
import { handleAgentAdded } from "../src/kyc-whitelist"
import { createAgentAddedEvent } from "./kyc-whitelist-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _agent = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAgentAddedEvent = createAgentAddedEvent(_agent)
    handleAgentAdded(newAgentAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AgentAdded created and stored", () => {
    assert.entityCount("AgentAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AgentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_agent",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
