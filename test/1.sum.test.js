import {sum} from "../src/1.sum"

test("sum(1, 2) is 3", () => {
    const result = sum(1, 2);

    // jadi kita expectasi bahwa nilai result itu adalah 3
    expect(result).toBe(3);

    // √ sum(1, 2) is 3 (2 ms)
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.616 s, estimated 1 s
})

test("sum(5, 6) -> 11", () => {
    let result = sum(5, 6);
    expect(result).toBe(11);
})
test("sum(20, 5) -> 25", () => {
    let result = sum(20, 5);
    expect(result).toBe(25);
})

// atau bisa juga pake 
test.only("sum(33, 77) is 100", () => {
    const result = sum(33, 77);
    expect(result).toBe(110);
});

// jadi expect itu akna mengembalikan objek matchers yang memiliki banyak modifiers dan juga matchersnya https://jestjs.io/docs/expect