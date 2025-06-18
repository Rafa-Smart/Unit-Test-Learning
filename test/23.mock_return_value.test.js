import { calculate, calculateAndReturn } from "../src/1.sum";

console.clear()

test("testing 1...", () => {
    const callback = jest.fn()

    callback.mockReturnValueOnce(40) // pemanggilan pertama returnnya harus 40
    callback.mockReturnValueOnce(10) // pemanggilan pertama returnnya harus 10
    // nah jadi fungsi dari mockReturnValueOnce ini adalah
    // ketika di panggil sekali maka callbacknya harus emngembalikan nilai sesuai yg di set misal 40
    // dan ini hanya berlaku sekali saja, jika sudah pake Once maka sekali saja
    // dan nilai return yg seterusnya akan mengembalikan nilai defaultnya saja (atau yg dari fungsi aslinya)


    // nah bedanya dengan mockReturnValue adalah mock ini akna selalu emngembalikan nilai yg diset
    // berapa kali pun di apnggilnya, maka akn selalu emngembalikan nilai itu

    expect(calculateAndReturn([10,10], callback)).toBe(40)
    expect(calculateAndReturn([10,10,10,10], callback)).toBe(10)

    calculateAndReturn([10,10,10,10], callback) // ini karena
    // kita ga set nilai returnnya pake mockReturnValueOnce, maka nilai yang direturn itu defaultnya
    // yaitu dari yg asli = 40

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

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// -> 10, 'x', true, true