import { binarySearch } from "../binary-search/binary-search"
import { binarySearchUp } from "../binary-search-up/binary-search-up"

export function b2Search(list, target) {
  let iteration = 1
  let j = Math.pow(2, iteration) - 1
  let searchPosition = Math.pow(2, j) - 1
  while (list[searchPosition - 1] !== undefined) {
    if (list[searchPosition - 1] >= target) {
      break
    }
    iteration++
    j = Math.pow(2, iteration) - 1
    searchPosition = Math.pow(2, j) - 1
  }

  const lowerBound = Math.pow(2, Math.pow(2, iteration - 1) - 1)
  const upperBound = binarySearchUp(list, target, lowerBound, searchPosition)
  // const upperBound = Math.min(list.length, j)
  return binarySearch(list, target, lowerBound, upperBound)
}
