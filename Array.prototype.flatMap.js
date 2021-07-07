// 实现flatMap

Array.prototype.myFlatMap = function(cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('Callback must be a function')
    }

    const arr = this
    const arg2 = arguments[1]
    let res = []
    let item

    for (let i = 0; i < arr.length; i++) {
        item = cb.apply(arg2, [arr[i], i, arr])
        item && res.push(item)
    }

    return res.flat()
}

const arr = ['123', '456', '789']
const res = arr.myFlatMap(function(item) {
    return item.split('')
})
console.log(res)