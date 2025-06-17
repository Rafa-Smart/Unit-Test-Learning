// jadi fungsi each ini adalah ektika kita mengetest sebuah file
// nah di file tersebut ada sebuah fungsi yang bernama hitung

// nah biasanya kita membuat banyak fungsi test untuk mencoba semua kemungkinan yang ada di fungsi hitung

// dan yang terjadi adalah kita hanya menduplikat saja
// dan yang berbeda hanya lah parameter yang kita kasih, dan juga jenis mathersnya atau si .toBe / .not.toBe, padahal fungsi yang kita test itu adalah
// 1 fungsi yang sama

// contohnya

import { sum3 } from "../src/1.sum";

console.clear();

// test("testing 1...", () => {
//     expect(sum2(10,10,10,10)).toBe(40)
// })
// test("testing 2...", () => {
//     expect(sum2(10,10,10,10,10,10,10)).toBe(70)
// })

// nah jadi each function ini memungkinkn kita untuk menggunkan data yang berbentuk array, yang akan diiterasi ke dalam kode unit test yang sama

// ada berbagai cara untuk mengiterasi



// 1. dengan litaral string

// nah ini conoth untuk yang pake literal string
// innget jadi nanti variable yang ada itu adalah yang disekat oleh si stringnya

// ${1} | ${1} | ${2} = valueVariable yang ada adalah index pertama itu 1
// kedua 1
// ketiga 2

// nah tpai disetiap perlulangannya itu pake |
// jadi dibuat seperti table yang abris pertamanya itu adalah kepala tabelnya yang nanti isi variable nya di panggil

//   a    | b    | expected -> judul
//   ${1} | ${1} | ${2} -> iterasi pertama
//   ${1} | ${2} | ${3} -> iterasi kedua
//   ${2} | ${1} | ${3} -> iterasi ketiga

// nah judul itu akan bisa kita akses berurutan

describe("cara pertama menggunakan literal string...", () => {
  // tes pertama
  test.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `(
    "mengembalikan $expected ketika $a di tambahkan ke $b",
    ({ a, b, expected }) => {
      expect(a + b).toBe(expected);
    }
  );

//   dan ingat ketika kita pake ini
// maka harus di destuctor dulu

  // tes kedua

  test("will not be run", () => {
    expect(1 / 0).toBe(Infinity);
  });
});



// 2. menggunakan array

// let table = [
//     [1, 1, 2],
//     [1, 2, 3],
//     [2, 1, 3],
//   ]

//   jadi nanti di test.each(table)

describe("cara kedua menggunakan array...", () => {
  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])("menambhakan %i + %i menjadi %i", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });

    // nah jadi si %i ini emmpresentasikan nilai value sebagai apa disini sebagai %i yaitu integer

    // nah untuk %i ini itu di gunakan berdasarkan indexnya
    // jadi %i pertama itu adalah a
    // jadi %i kedua itu adalah b
    // jadi %i ketika itu adalah expected hasil

    // jadi index pada arraynya ini itu melambangkan nilai yang akan di tampilkan di dalam stringnya
    // index pertama sebagai a, dan seterusnya

  test("will not be run", () => {
    expect(1 / 0).toBe(Infinity);
  });
});


// 3. menggukana objek destructoring

describe("cara ketika meggunkaan destructor", () => {
    let data = [
        {number:[10,10,10,10,10], ekspetasi:50},
        {number:[10,10], ekspetasi:20},
        {number:[10,10,10], ekspetasi:30},
    ]

    // test.each(data)("menambhakan seluruh %s menjadi %s", ({number, ekspetasi}) // ini ga bisa pake %s


    test.each(data)("menambhakan seluruh $number menjadi $ekspetasi", ({number, ekspetasi}) => {
        expect(sum3(number)).toBe(ekspetasi)
    })


    // nah ini jadi lebih jelas, karena sudah jelas si atributnya
})