//📄 math.js

function sum(a, b) {
    if (Array.isArray(a)) {
        let total = 0
        for (let it = 0; i < a.length; i++) {
            total += a[i]
        }
        return total
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
}