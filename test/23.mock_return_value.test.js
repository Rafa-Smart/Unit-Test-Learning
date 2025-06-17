import { calculate, calculateAndReturn } from "../src/1.sum";

console.clear()

test("testing 1...", () => {
    const callback = jest.fn()

    callback.mockReturnValueOnce(40)
    callback.mockReturnValueOnce(10)
    // nah disini kita autr agar return value dari si callback ini menjadi 40 dan 10, apapun inputannya
    // jadi pemanggilan pertama itu adlah 40, dan kedua adlah 10

    expect(calculateAndReturn([10,10], callback)).toBe(40)
    expect(calculateAndReturn([10,10,10,10], callback)).toBe(10)

    calculateAndReturn([10,10,10,10], callback)

    console.info(callback.mock) 
    // {
    //   calls: [ [ 20 ], [ 40 ], [ 40 ] ],
    //   contexts: [ undefined, undefined, undefined ],
    //   instances: [ undefined, undefined, undefined ],
    //   invocationCallOrder: [ 1, 2, 3 ],
    //   results: [
    //     { type: 'return', value: 40 },
    //     { type: 'return', value: 10 },                                                              
    //     { type: 'return', value: undefined }
    //   ],
    //   lastCall: [ 40 ]
    // }

    // nah jadi yang terjadi di calls ini maksudnya pada pemanggilan pertama itu nilainya 20, dan seterunya pada pemanggilan berikutnya

})