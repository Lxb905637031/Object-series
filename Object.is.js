// console.log(+0 === -0) // true
// console.log(NaN === NaN) // false
// console.log(Object.is(+0, -0)) // false
// console.log(Object.is(NaN, NaN)) // true

// 实现Object.is
Object.myIs = function(a, b) {
    if (a === b) {
        return a !== 0 && 1 / Infinity === -1 / Infinity
    }
    return a !== a && b !== b
}

console.log(Object.myIs(+0, -0))
console.log(Object.myIs(NaN, NaN))