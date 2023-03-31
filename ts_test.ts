const calculator = {
    sum: function(a: number , b: number) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
        return a + b;
    },
    diff: function(a: number , b: number) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
        return a - b;
    },
    product: function(a: number , b: number) {
        console.log("Hello, " + a.toFixed() + "!!");
        console.log("Hello, " + b.toFixed() + "!!");
    return a * b
    }
}
module.exports = calculator;