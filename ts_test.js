var calculator = {
    sum: function (a, b) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
        return a + b;
    },
    diff: function (a, b) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
        return a - b;
    },
    product: function (a, b) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
        return a * b;
    }
};
module.exports = calculator;
