// jadi fungsi it ini sama saja seperti fungsi test
// karena ada bebrapa programmer yang inign mengeterstnya itu seperti dalam bentuk cerita

// contohnya

console.clear()

import {sum2} from "../src/1.sum";

describe("ketika saya kirim 10,10,10,10,10 ", () => {
    it("saya dapat 50", () => {
        expect(sum2(10,10,10,10,10)).toBe(50)
        // disini kita ga pake array
        // karena sudah kita dextructor di fungsi yang sana
        // ...data
    })
})