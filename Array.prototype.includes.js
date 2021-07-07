// 实现Array.prototype.include

Array.prototype.myIncludes = function(value) {
    if (this === null) {
        throw new TypeError('"This" is null')
    }

    let fromIndex = arguments[1]
    let obj = Object(this)
    let len = obj.length >>> 0

    if (len === 0) {
        return false
    }

    fromIndex = fromIndex | 0

    fromIndex = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0)

    while (fromIndex < len) {
        if (value === obj[fromIndex]) {
            return true
        }
        fromIndex++
    }
    return false
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.myIncludes(2, 3))