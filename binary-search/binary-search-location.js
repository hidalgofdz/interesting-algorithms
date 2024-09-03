export function binarySearchLocation(
  list,
  target,
  startIndex = 1,
  endIndex = list.length,
) {
  let start = startIndex - 1
  let end = endIndex - 1
  let middle
  while (start <= end) {
    middle = Math.floor((start + end) / 2)
    const middleValue = list[middle] || Number.MAX_SAFE_INTEGER
    if (target === middleValue) {
      return middle + 1
    } else if (target > middleValue) {
      start = middle + 1
    } else if (target < middleValue) {
      end = middle - 1
    }
  }

  if (end < start) {
    return start + 1
  } else {
    return end + 1
  }
}
