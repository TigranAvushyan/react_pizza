export function pizzaIdGenerator(pizzaId: number, type: number, size: number): number {
  return parseInt("" + pizzaId + type + size);
}

export function sortAndFilter<T>(
  arr: Array<T>,
  sort: (a: T, b: T) => boolean,
  filter: (key: T) => boolean
): Array<T> {
  if (arr.length < 2) return arr;

  const left: Array<T> = [];
  const right: Array<T> = [];
  let pivot: T = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (filter(arr[i])) continue;
    if (sort(pivot, arr[i])) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const filteredMid = filter(pivot) ? [] : pivot;
  const low = sortAndFilter(left, sort, filter);
  const high = sortAndFilter(right, sort, filter);
  return low.concat(filteredMid, high);
}
