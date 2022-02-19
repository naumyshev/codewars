function countPositivesSumNegatives(arr) {

    let resultArray = []

    if (arr.length === 0)  {return resultArray}

    let isNull = true

    resultArray = [0,0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            resultArray[0]++
        }
        if (arr[i] < 0) {
            resultArray[1] += arr[i]
        }
    }
    return resultArray;
}

console.log(countPositivesSumNegatives([]))
