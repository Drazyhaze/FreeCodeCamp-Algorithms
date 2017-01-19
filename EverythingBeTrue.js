function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

const truthCheck = (collection, pre) => collection.every(obj=>obj[pre]);
