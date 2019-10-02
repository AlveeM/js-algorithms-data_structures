const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
letters.sort();
console.log(letters);

const basket = [2, 65, 34, 2, 1, 7, 8];
basket.sort(function(a, b) {
    return a - b;
});
console.log(basket);

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
spanish.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(spanish);