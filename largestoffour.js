const largestOfFour = arr => {
    let myNum = []
    for (i = 0; i < arr.length; i++) {
        let total = 0
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > total) {
                total = arr[i][j]
            }
        }
        myNum[i] = total
    }
    return myNum
}