// jdai pada kasus tertentu kita butuh logic pada mock function untuk mengembalikan data yang sesuai, dan juga kita bisa mengubah return valuenya

import { calculate, calculateAndReturn } from "../src/1.sum";

console.clear();

describe("test mock impleentation", () => {
    test("testing...", () => {
        let callback = jest.fn();

        callback.mockImplementationOnce(total => {
            return total * 2;
        })

        callback.mockImplementation(total => total + 10);

        expect(calculateAndReturn([10,10], callback)).toBe(40);
        // jadi maksudnya untuk pemanggilan pertama maka si arraynya kan akan jadi 20, nah 20 ni akna masuk ke mock callback, dan totalnya di kali 2, maka hasilnya adalaah 40, maka toBe harusnya adlaah 40

        expect(calculateAndReturn([10,10,10,10], callback)).toBe(50);
        // karena pemanggilan kedua dan seterusnya itu adalah mockImpleentation saja, maka kan yg ini hasil arraynya itu 40, lalu 40 masuk ke total yg ada di mock callback, dan totalnya di tambah 10, maka hasinlya 10
        // maka toBenya harusnya 50

        // disini kita cek return dari si callbacknya
        expect(callback).toHaveBeenCalledWith(20); // sebelum di * 2 yaitu 20
        expect(callback).toHaveBeenCalledWith(40); // sebelum di + 10 yaitu 40
        expect(callback.mock.results[0].value).toBe(40); 
        expect(callback.mock.results[1].value).toBe(50); 
        console.log(callback.mock)
    })

    // jadi retults ini adalah yg direturnkan oleh si mocknya
})

    // {
    //   calls: [ [ 20 ], [ 40 ] ],
    //   contexts: [ undefined, undefined ],
    //   instances: [ undefined, undefined ],
    //   invocationCallOrder: [ 1, 2 ],
    //   results: [ { type: 'return', value: 40 }, { type: 'return', value: 50 } ],
    //   lastCall: [ 40 ]
    // }