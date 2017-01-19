//FCC Drop It
//Solution 1
var dropElements = (arr, func) => {
  switch (true) {
    case (arr.length === 0): return arr
    case (func(arr[0])): return arr
    default: return dropElements(arr.slice(1), func)
  }
}

//Solutions 2

function drop(array, func) {
  while (true) {
    if (array.length === 0 || func(array[0])) {
      return array;
    }
    array.shift();
  }
}
