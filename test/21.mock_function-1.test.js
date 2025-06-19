console.clear();

// mpohon dibaca seluruh penjelasan yang ada agar paham
// https://chatgpt.com/c/6851499e-5594-8009-858f-9e4d35ee15fe

// Simulasi dari fungsi, modul, atau class agar bisa mengontrol
// perilaku dan output-nya dalam pengujian, tanpa menjalankan implementasi asli.

// kita menggunakan mock function karena :
// 1. Isolasi Unit Test
// Fokus hanya pada unit yang diuji, bukan dependensinya.
// 2. Kontrol Total atas Lingkungan
// Kita bisa buat fungsi palsu (mock) agar mengembalikan nilai tertentu.
// 3. Menguji Interaksi
// Mengecek apakah fungsi dipanggil, berapa kali, dengan argumen apa.
// 4. Menghindari Efek Samping
// Contoh: menghindari akses database, API, filesystem, dll saat test.

// ini simulasi ketika kamu menggunakan mock

// Kamu punya aplikasi kasir. Ketika user membeli barang, aplikasimu akan:
// 1. Cek stok barang ke server atau database.
// 2. Kirim SMS ke pembeli.
// 3. Simpan transaksi ke database.

// Kalau kamu mau ngetes fungsinya:
// Tanpa mock:
// 1. Kamu benar-benar harus panggil server asli (lambat, bisa gagal).
// 2. Kamu kirim SMS sungguhan (boros pulsa).
// 3. Kamu ubah data sungguhan di database (berantakan).

// Dengan mock:
// Kamu buat fungsi palsu buat semua itu.
// Tapi kamu tetap bisa uji alur kerja dan cek apakah fungsi-fungsi tersebut dipanggil.
// Cepat, aman, dan tidak tergantung jaringan atau database.

// jadi singkatnya dengan mock funciton ini kita mencatat seluruh perintah yang diberikan
// dari paramternya apa, dipainggil berapa kali
// mereturn kan apa, dll

// dan juga jadi dnegna jest.fn kita bisa melihat isi dan hasil atau perilaku dari si functionnya
// apakah dia benar benar di panggil, berapa kali, apakah perhitungannya benar ,dll

// nih penting.......
// Yang dites itu calculate dan calculateAndReturn.
// Kenapa yang dicek justru callback-nya, bukan fungsi calculate itu sendiri?

// Karena callback adalah bagian dari output perilaku (behavior) dari fungsi calculate.

// Kita tidak menguji apa isi callback-nya, tapi kita menguji:

// Apakah calculate bekerja sesuai yang diharapkan — yaitu menjumlahkan angka dan memanggil callback dengan hasil total tersebut?

// dan Fungsi ini tidak mengembalikan nilai.
// Jadi satu-satunya cara kita tahu dia “sukses” adalah dengan memeriksa efeknya.
// Efeknya = memanggil callback dengan total yang benar

// ini isi didalamnya ketika kita panggil fungsi jest.fn()
// dan semua fungsi tiruan memiliki property mock
// yang isinya adalah

// nah ini malah jadi kayak rekaman panggilan functionnya

// {
//   calls: [
//     [arg1_call1, arg2_call1, ...], // pemanggilakn pertama
//     [arg1_call2, arg2_call2, ...], // pemanggilaan kedua
//     ...
//   ],
//   instances: [
//     thisContext1,
//     thisContext2,
//     ...
//   ],
//   results: [
//     { type: "return", value: returnVal1 },
//     { type: "throw", value: errorObj },
//     ...
//   ],
//   invocationCallOrder: [callIndex1, callIndex2, ...]
// }

// jest.mock('./utils');
// yang terjadi adalah :
// Membaca file ./utils.js
// Mengambil semua export-nya (function, class, dsb)
// Lalu mengganti semuanya jadi mock function jest.fn() secara otomatis
// Kamu bisa atur masing-masing pakai:

// utils.getData.mockReturnValue('tes')

// disini contoh contohnya

import { calculate } from "../src/1.sum";

console.clear();

// jadi mock obek adalah objek tiruan yang kita buat, yang tingkah lagunya menyerupai dengna objek atau fungis aslinya

// dan salah satu fitur pada mock objek adalah kita bisa memberikan tingkah laku dari objek tersbut atua fungsi tersebut

// nah disini mock function itu salah satu fiturnya adalah kita bisa melihat detail dari paramter yg digunakan untuk memanggil mock function tersbut

test("testing calculate 1...", () => {
  let callback = jest.fn(); // disini kita buat si mock fucntionnya

  calculate([10, 10, 10], callback); // total = 30 → callback(30)
  calculate([10, 10, 10, 10, 10], callback); // total = 50 → callback(50)

  // Dan setiap kali calculate() selesai / di panggil, maka dia memanggil callback(total) → jadi mock function akan dipanggil dua kali.

  // nah informasi mock functionnya itu kita bisa pake
  // lihat di folder penjelasan

  // jadi yang ada di calculate itukan 30 nah nanti dimasukan ke mock function callback itu
  // lalu dibawah ini dites si callback mocknya, apakah benar pernah di panggil dnegna 30


  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
  // nah jadi di calls[0][0], di [0] pertama itu maksudnya adalah
  // pemanggilan pertama
  // dan [0] kedua maksudnya adalah si valuenya di index paramter berapa
  // calls: [
  //     [30], // pemanggilakn pertama // ini untuk paramter
  //     [50], // pemanggilaan kedua
  //     ...

  // jadi untuk baris itu maksudnya adalah pemanggilan
  // dan untuk colom itu maksudnya adalah nilai dari paramternya, kalo misal
  // di callbacknya callback(total, array[i]) // maka nanti akan ada 2 index di setiap colomnya
  //   ]

  // jadi setiap kita pnaggil pertama maka akan dipanggil di array index pertama, dan seterusnya

    // atau pengen tau berapa kali di panggil
    expect(callback.mock.calls.length).toBe(2)
    console.info(callback.mock.calls) //  [ [ 30 ], [ 50 ] ]


});

// jika tanpa mock, kamu harus buat nya secara mandiri dan ribet
// let hasil = null;
// calculate([10, 10], (x) => { hasil = x; });
// expect(hasil).toBe(20);



// contoh lainnya

