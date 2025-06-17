// nah secara default seluruh unit test akan dijalankan sequensial / berurutan

// nah dengna menggunkan function concurrent ini maka, kita bisa membuat si unit testnya jalan berbarengan atau concurrent, jadi ada banyak thread dan semua threadnya jalan berbarenagan

// misal ini kita import fungsi yang menjalankan resolve selama 1 detik

// berati kalo kita punya 3 test dan merujuk ke fungi tersebut harusnya akan selesai dalam waktu 3 detik (default)


import { ngambilData } from "../src/4.data_async"

console.clear()

// uncomment saja

// describe("mengetes data 2... (tanpa concurrent)", () => {
//     test("tes 1", async () => {
//         await expect(ngambilData("rafa")).resolves.toBe("haloo rafa")
//     })
//     test("tes 2", async () => {
//         await expect(ngambilData("jamal")).resolves.toBe("haloo jamal")
//     })
//     test("tes 3", async () => {
//         await expect(ngambilData("udin")).resolves.toBe("haloo udin")
//     })
// })


// kode ini akan menghasilkan 4.143 s, estimated 6 s, lama karena hrus di tunggu




// maka caranya adalah menggunkana concurrent

// dan masalahnya ita ga bisa pake async pada fungsi describe ini ternyata

// ini keren seklai coba liat

describe("mengetes data tanpa concurrent", () => {
    let data = [
        ["Rafa","haloo Rafa","resolves"],
        ["jamal","haloo jamal","resolves"],
        ["siti","haloo siti","resolves"],
        [,"nama tidak boleh kosong","rejects"], // ini kita kosong kan
    ]

    test.concurrent.each(data)("memasukan data %s hasilnya harus %s", async (value, ekspetasi, metode) => {
       await expect(ngambilData(value))[metode].toBe(ekspetasi)
    })

    // disini sebenarnya kita ga perlu pake async, karena resolves ini sudah menanganinya

    // tuh  2.193 s, estimated 3 s
    // jadi hanya sebenatar saja

})

// nah jadi yang ad adi each() -> itu value per valuenya akan di destructor jadi dipusah berdasarkan urutannya


// dan kita juga bisa membatasi concurrentn test yang berjalan

// dengan cara kita ubah configurasinya di .config.jest

// maka jika kita punya 15 test sedangkan kita membatasi concurrent max nya hanya 5, maka 10 test yang lainnya akan di tunggu sampai 5 yag pertama ini beres dan seterusnya

// dan defaultnya itu 5
//   maxConcurrency: 5,