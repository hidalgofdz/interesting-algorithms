export function binarySearch(
  list,
  target,
  startIndex = 1,
  endIndex = list.length,
) {
  let start = startIndex - 1
  let end = endIndex - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    const middleValue = list[mid] || Number.MAX_SAFE_INTEGER
    if (target === middleValue) {
      return mid + 1
    }
    if (target > middleValue) {
      start = mid + 1
    }
    if (target < middleValue) {
      end = mid - 1
    }
  }

  return -1
}
