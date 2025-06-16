
// jadi toBe itu untuk membanfingkan sebuah objek simple atau yang bukan objek seperti nilai variable

// toEqual itu untuk membandingkan semua properties dri objek secara recursive, atau secara dalam, dan biasanya untuk membandingkan sebuah objek

test("test toBe", () => {
    let name = "Rafa";
    let hello = `hallo ${name}`
    expect(hello).toBe("hallo Rafa")
})


test("test toEqual", () => {
    let person = {id:"12345"}
    Object.assign(person, {name:"Rafa", age:20})
    expect(person).toEqual({id:"12345",name:"Rafa",age:20})
})


let dataTes = Array.from({ length: 10 }, (_, x) => x+1)


// ilmu baru
// jadi kita bisa buat array dengna mudah menggunakan ini
// Karena Array.from() bisa membaca objek "array-like", selama memiliki properti length. Jadi:

// jadi {length:10} adalah sesuatu yang dinamakan like Objek atau mirip objek/ juga ini adalah objek literal biasa yang memiliki properti length

// dan secara default akan diberi nilai undefined setiap itemnya
// Array.from({ length: 3 }); // [undefined, undefined, undefined]

// nah (_, x) => x
// ini adalah sebuah arrow function yang _ => setiap itemnya
// dan x => adalah indexnya, jadi
// Isi setiap posisi array dengan hasil fungsi (yaitu index-nya sendiri)

// jadi kita membuat array yang berisi nilai indexnya dari length tadi

// bisa juga seprti Ini 
let data2 = Array.from({ length: 10 }, (_, x) => String.fromCharCode(97 + x)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
