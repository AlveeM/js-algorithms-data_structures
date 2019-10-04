/*
function addTo10(n) {
    return n + 10;
} */

/* Global cache
let cache = {};
function memoizedAddTo10(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 10;
        return cache[n];
    }
} */

// using closure
function memoizedAddTo10() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = n + 10;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo10();
console.log(memoized(5));