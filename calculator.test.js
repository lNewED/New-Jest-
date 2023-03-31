const calculator = require('./ts_test');

describe("Calculator tests", () => {
    beforeAll(() => {
        console.log("beforeAll called");
        });

    afterAll(() => {
        console.log("afterAll called");
        });

    beforeEach(() => {
        console.log("beforeEach called");
            });
    afterEach(() => {
        console.log("afterEach called");
            });
    test('adding 22 + 2 should return 24', () => {
        var result =  calculator.sum(22,2)
    expect((result)).toBe(24);
    });

    test('diff 22 - 2 should return 20', () => {
        var result =  calculator.diff(22,2)
    expect((result)).toBe(20);
    });

    test('product 22 * 2 should return 44', () => {
        var result =  calculator.product(22,2)
    expect((result)).toBe(44);
    });

    test('adding 22 + 2 should return 24', () => {
        var result =  calculator.sum(22,2)
    expect((result)).not.toBe(100);
    });

    test('diff 22 - 2 should return 20', () => {
        var result =  calculator.diff(22,2)
    expect((result)).not.toBe(100);
    });

    test('product 22 * 2 should return 44', () => {
        var result =  calculator.product(22,2)
    expect((result)).not.toBe(100);
    });
    })