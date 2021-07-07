// 实现Array.prototype.flat

// reduce + concat + isArray + 递归
Array.prototype.deepFlat1 = function() {
    let arr = this
    let deep = arguments[0] !== Infinity ?
        arguments[0] >>> 0 :
        Infinity

    return deep > 0 ?
        arr.reduce(function(prev, current) {
            return prev.concat(Array.isArray(current) ? current.deepFlat1(deep - 1) : current)
        }, []) :
        arr

}

// console.log([1, [2, 3, [4, 5, [6, 7]]]].deepFlat1(Infinity))

// forEach + isArray + push + 递归
Array.prototype.deepFlat2 = function() {
    let arr = this
    let deep = arguments[0] !== Infinity ?
        arguments[0] >>> 0 :
        Infinity
    let res = [];

    (function _(arr, deep) {
        arr.forEach(function(item) {
            if (Array.isArray(item)) {
                _(item, deep - 1)
            } else {
                res.push(item)
            }
        })
    })(arr, deep)

    return res
}

// console.log([1, [2, 3, [4, 5, [6, 7]]]].deepFlat2(Infinity))

// stack pop + push
Array.prototype.deepFlat3 = function() {
    let arr = this
    let stack = [...arr]
    let res = []

    while (stack.length) {
        const item = stack.pop()
        if (Array.isArray(item)) {
            stack.push(...item)
        } else {
            res.push(item)
        }
    }

    return res.reverse()
}

console.log([1, [2, 3, [4, 5, [6, 7]]]].deepFlat3(Infinity))