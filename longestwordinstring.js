const findLongestWord = str => {
let spl = str.split(" ")
let CurrentLongestWordSize = 0

for (let i = 0; i<spl.length; i++) {
  (CurrentLongestWordSize < spl[i].length) ? CurrentLongestWordSize = spl[i].length : CurrentLongestWordSize
  }
}