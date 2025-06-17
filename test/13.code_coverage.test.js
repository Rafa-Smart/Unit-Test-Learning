// mengeksport fungsi untuk percabangan
console.clear()
import math from "../src/3.math";

test("testing alur 1...", () => {
  expect(math("tambah", 5, 7)).toBe(12);
  
//   coba untuk melihat coverage dari hanya kdoe ini, jadi yang lain komen kecuali testing yang ini
// maka kamu akan lihat bahwa ada branch yang kurang nilai akurasinya (maksudnya itu alur = branch)

});

test("testing alur 2...", () => {
    expect(math("kurang", 9, 6)).toBe(3)
    expect(math("bagi", 9, 3)).toBe(3)
    expect(math("kali", 3, 3)).toBe(9)

    // ini gabisa, karena harus pake () => dulu buat nangkep errornya
    // expect(math("sengaja salah", 3, 3)).toThrow()
    // expect(math("sengaja salah", 3, 3).not.toEqual(9))

    expect(() => math("sengaja salah", 3, 3)).toThrow()
    expect(() => math("sengaja salah", 3, 3)).not.toEqual(7)
    expect(() => math("sengaja salah", 3, 3)).not.toBe(7) 

    // bisa semua


    // nah kalo kita ngetesnya begini maka semua testnya akan 100 %, maka 
    // berati mencakup alur, lines, dll
    // jadi kita sudah cukup banyak buat unit testnya

    // kalo persennya kurang, maka kita kurang banyak mmebuat unit testnya 

    // dan setiap perusahaan itu berbeda beda min coveragernya
})

// // collectCoverage: false,
// ini ubah menjadi true di lines 21 pada .config.jest

// jadi ini akan otomatis memperlihatkan coveragenya tanpa --coverage



// 2. coverageThreshold

// atau kita juga bisa memastikan persen dari coveragenya
// jadi kalo misalkan coveragenya dibawah yang kita mau maka akan gagal seluruh testing unit testnya
//   coverageThreshold: undefined,
// di lines 46

// dan isi nya itu objek 

// dan ada di url
// https://jestjs.io/docs/configuration#coveragethreshold-object

// coverageThreshold: {
//     global: {
//       branches: 80, // alur program (if else), jadi alur ketika ifm dan alur ketika else
//       functions: 80, // fungsi
//       lines: 80, // baris
//       statements: -10, // statement
//     },
//   },


// jadi itu minimal 80, dan kalo kurang, maka akan gagal testingnya


// 3. collectCoverageFrom
// terkadang ketika kita sudah besar membuat aplikasinya maka kita hanya inign emngambil bagian kode mana yang inign di test atau di hitung code coveragenya (jadi ga semua)

// https://jestjs.io/docs/configuration#collectcoveragefrom-array

// collectCoverageFrom: [
//     '**/*.{js,jsx}', // jadi disemua folder/dan disemua file
//     '!**/node_modules/**', // jadi tidak diambil dari node_modules tapi di semua file
//     '!**/vendor/**', // jadi tidak diambil dari vendor tapi di semua file

    // dan lain lain

//   ],

// dengna catatan PENTING !!!
// jika ingin menggunakan ini mka harus juga menggunakan --coverage, atau collectCoveragenya di true kan

// dan ini itu akan di cek di file yang berada di source / file asli kita

// jadi buat ngetes, seberapa bagus ita meng cover code pada file asli kita

// lihat di line 24