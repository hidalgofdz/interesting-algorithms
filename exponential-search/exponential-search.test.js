import { exponentialSearch } from "./exponential-search"
import { test, expect } from "vitest"

const listOfNumbers = Array.from({ length: 128 }, (_, i) => i + 1)
test.each([
  { list: listOfNumbers, target: 1, expected: 1 },
  { list: listOfNumbers, target: 128, expected: 128 },
  { list: listOfNumbers, target: 64, expected: 64 },
  { list: listOfNumbers, target: 65, expected: 65 },
])(
  `Given a sorted list of 128 numbers it returns the position($expected) of the target number ($target)`,
  ({ list, target, expected }) => {
    const result = exponentialSearch(list, target)
    expect(result).toBe(expected)
  },
)

test("Given a sorted list of 128 numbers it returns -1 if the target number is not found", () => {
  const list = Array.from({ length: 128 }, (_, i) => i + 1)
  const target = 129
  const result = exponentialSearch(list, target)
  expect(result).toBe(-1)
})

test("Given a sorted list from [2,127] it returns -1 if the target number is not found in the lower bound", () => {
  const list128Numbers = Array.from({ length: 128 }, (_, i) => i + 1)
  const [_, ...rest] = list128Numbers
  const list = rest
  const target = 1
  const result = exponentialSearch(list, target)
  expect(result).toBe(-1)
})
