// 实现Array.prototype.findIndex

Array.prototype.myFindIndex = function(cb) {
    if (this === null) {
        throw new TypeError('"This" is null')
    }
    if (typeof cb !== 'function') {
        throw new TypeError('CallBack must be a function Type')
    }

    const obj = Object(this)
    const len = obj.length >>> 0
    const arg2 = arguments[1]
    let step = 0

    while (step < len) {
        if (cb.apply(arg2, [obj[step], step, obj])) {
            return step
        }
        step++
    }
    return -1
}

const arr = [1, 2, 3, 4, 5]
const res = arr.myFindIndex(function(item) {
    return item > -1
})

console.log(res)