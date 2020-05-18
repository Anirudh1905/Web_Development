var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.mydear = function () {
        console.log("Value of s: " + this.s + "Value of t: " + this.t);
    };
    return A;
}());
var o = new A(1, "Anirudh");
o.mydear();
