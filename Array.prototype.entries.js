// 利用entries对二维数组进行排序

function sortArr(arr) {
    let doNest = true
    let iter = arr.entries()

    while (doNest) {
        let res = iter.next()
        if (!res.done) {
            res.value[1].sort(function(a, b) {
                return a - b
            })
            doNest = true
        } else {
            doNest = false
        }
    }
    return arr
}

const arr = [
    [1, 22, 33, 2],
    [3, 4, 22, 1, -3],
    [5, 1, 44, 11, 445]
]

console.log(sortArr(arr))