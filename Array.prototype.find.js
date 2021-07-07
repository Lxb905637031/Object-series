// 实现Array.prototype.find

Array.prototype.myFind = function(cb) {
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
        let value = obj[step]
        if (cb.apply(arg2, [obj[step], step, obj])) {
            return value
        }
        step++
    }
    return undefined
}

const arr = [1, 2, 3, 4, 5]
const res = arr.myFind(function(item) {
    return item > 2
})

console.log(res)