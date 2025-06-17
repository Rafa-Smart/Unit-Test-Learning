// jadi ini sama saja ketika kita inign mengets bahwa funsi yang yang ditest itu melempar error



import {math} from "../src/3.math"
console.clear()


describe("testing untuk failing...", () => {
    test.failing("test 1", () => {
        expect(math("sengaja salah", 4, 5)) // ini bisa
    })

    // atau mau seperti ini

    test("test 2", () => {
        expect(math("sengaja salah", 4, 5)).toThrow() // ini bisa
    })


    // jadi kita mengekspetasi bahwa fungsi ini harus melempar error
    // jika tidak error maa testnya akan gagal
})