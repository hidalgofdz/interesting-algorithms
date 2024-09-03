export function binarySearchUp(
  list,
  target,
  startPos = 1,
  endPos = list.length,
) {
  let start = startPos - 1
  let end = endPos - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    const midValue = list[mid] || Number.MAX_SAFE_INTEGER
    if (target <= midValue) {
      return mid + 1
    }
    if (target > midValue) {
      start = mid + 1
    }
  }
  return -1
}
