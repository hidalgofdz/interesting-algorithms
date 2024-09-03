import { expect, test } from "vitest"
import { binarySearchUp } from "./binary-search-up"

test("given a list of 128 elements and a target of 97 it returns the closest value greater than the target", () => {
  const list = Array.from({ length: 128 }, (_, i) => i)
  const target = 97
  expect(binarySearchUp(list, target)).toBe(112)
})

test("given a target inside the list it should return a value greater than the target", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 3
  expect(binarySearchUp(list, target)).toBe(5)
})

test("given a list of 10 elements and a target is on the 6 position it returns 8 as the middle", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 6
  expect(binarySearchUp(list, target)).toBe(8)
})

test("given a list of 10 elements and a target is on the 5 position it returns 5 as the middle", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 5
  expect(binarySearchUp(list, target)).toBe(5)
})

test("given a list of 10 elements and 1 as target it returns 4", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 1
  expect(binarySearchUp(list, target)).toBe(5)
})

test("given a list of 10 elements and 10 as target it returns 10", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 10
  expect(binarySearchUp(list, target)).toBe(10)
})

test("given a list of elements (2..11) and 1 as target it returns 5", () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const target = 1
  expect(binarySearchUp(list, target)).toBe(5)
})

test("given a list of 10 elements and 11 as target it returns -1", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 11
  expect(binarySearchUp(list, target)).toBe(-1)
})

//
test("given a target inside range it should return a value greater than the target", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 6
  expect(binarySearchUp(list, target, 4, 9)).toBe(6)
})

test("given a list of 10 elements with a range and a target is on the 7 position it returns 8 position as the middle", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 7
  expect(binarySearchUp(list, target, 3, 9)).toBe(8)
})

test("given a list with a range of [3,9] and a target of 11 it return -1?", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 11
  expect(binarySearchUp(list, target, 3, 9)).toBe(-1)
})

test("given a list of 10 elements a range [1,4] and 1 as target it returns 2", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 1
  expect(binarySearchUp(list, target, 1, 4)).toBe(2)
})

test("given a list of 10 elements a range [5,10] and 10 as target it returns 9", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 10
  expect(binarySearchUp(list, target, 5, 10)).toBe(10)
})

test("given a list of elements (2..11) and 1 as target it returns 6", () => {
  const list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const target = 1
  expect(binarySearchUp(list, target, 3, 9)).toBe(6)
})

test("given a list of 10 elements a range [3,7] and 8 as target it returns -1", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const target = 8
  expect(binarySearchUp(list, target, 3, 7)).toBe(-1)
})
