import { binarySearchLocation } from "../binary-search/binary-search-location"

export function exponentialSearchLocation(list, target) {
  let iteration = 1
  let upperBound = Math.pow(2, iteration) - 1
  while (list[upperBound - 1] !== undefined) {
    if (list[upperBound - 1] >= target) {
      break
    }
    iteration++
    upperBound = Math.pow(2, iteration) - 1
  }
  const lowerBound = Math.pow(2, iteration - 1)
  return binarySearchLocation(list, target, lowerBound, upperBound)
}
