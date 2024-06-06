const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      console.log(mid);
      return mid;
    }
  }
  return -1;
};

binarySearch([10, 20, 30, 40, 55, 70], 55);
