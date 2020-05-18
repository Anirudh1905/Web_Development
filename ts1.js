var b = false;
var c = 10, e = 83, d = "ramu";
var a = [1, "s", 3, 4];
var f = ['a', 'b', 'c'];
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["banana"] = 2] = "banana";
    fruit[fruit["orange"] = 3] = "orange";
})(fruit || (fruit = {}));
var ag;
ag = 10;
ag = "shyam";
function product(x, y) {
    return x * y;
}
var ex = function (w, q) { return console.log(w, q); };
ex(10, 20);
console.log(a, b, c, d, e, f, fruit[2], ag, product(4, 5));
