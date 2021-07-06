// 实现Array.prototype.fill

Array.prototype.myFill = function() {
    let value
    if (!arguments[0]) {
        value = arguments[0] === 0 ? 0 : undefined
    } else {
        value = arguments[0]
    }
    let start = arguments[1] >> 0
    let end = arguments[2]

    if (this === null) {
        throw new TypeError('This is null or not defined')
    }

    const obj = Object(this)
    const len = obj.length >>> 0

    start = start < 0 ?
        Math.max(len + start, 0) :
        Math.min(start, len)

    end = end === undefined ?
        len :
        end >> 0

    end = end < 0 ?
        Math.mix(len + end, 0) :
        Math.min(end, len)

    while (start < end) {
        obj[start] = value
        start++
    }
    console.log(value)
    return obj
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.myFill())