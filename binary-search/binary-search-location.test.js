import { expect, test } from "vitest"
import { binarySearchLocation } from "./binary-search-location"

test("given a target inside the list it should return the index of the target", () => {
  const list = [1, 2, 3, 4, 5]
  const target = 3
  expect(binarySearchLocation(list, target)).toBe(3)
})

test("given a target that is higher that the last element of the list it should return the next location", () => {
  const list = [1, 2, 3, 4, 5]
  const target = 6
  expect(binarySearchLocation(list, target)).toBe(6)
})

test("given a target that is the first in the list it should return 0", () => {
  const list = [1, 2, 3, 4, 5]
  const target = 1
  expect(binarySearchLocation(list, target)).toBe(1)
})

test("given a target that is the last in the list it should return the last index", () => {
  const list = [1, 2, 3, 4, 5]
  const target = 5
  expect(binarySearchLocation(list, target)).toBe(5)
})

test("given a target that is the first in the list it should return the first index", () => {
  const list = [2, 3, 4, 5, 6]
  const target = 1
  expect(binarySearchLocation(list, target)).toBe(1)
})

test("given a list of 10 elements, a start index of 3, an end index of 8 position we do not find the element after those", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 9
  expect(binarySearchLocation(list, target, 3, 8)).toBe(9)
})

test("given a list of 10 elements, a start index of 3, an end index of 8 position we the index location returned is the one below the start", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 1
  expect(binarySearchLocation(list, target, 3, 8)).toBe(3)
})

test("given a list of 10 elements, a start index of 3, an end index of 8 position we the index location returned is the one below the start", () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const target = 1
  expect(binarySearchLocation(list, target, 3, 10)).toBe(3)
})
