function gen(arr) {
    var nextIndex = 0

    return {
        next: function() {
            return nextIndex < arr.length ? { value: arr[nextIndex++], done: false } : { value: arr[nextIndex++], done: true }
        }
    }
}

const arr = [1, 2, 3, 4, 5]

const iter = gen(arr)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())