// nah kita jika pake jest.mock(nama module)
// maka kita akna memocking seluruh fungsi atau class yg ada pada module tersebut

import { getAllProducts, getProductById } from "../src/5.database";

// dan terkadnag kita hanya inngin memocking sebagian saja
// caranya dengan jest.requireActual(module)

// gunakan ini jika
// Modul terlalu besar dan hanya satu fungsi yang perlu di-mock.
// Kamu ingin mempertahankan perilaku asli (real behavior) untuk sebagian fungsi

// jadi disini kita secra default hanya memanggil fungsi aslinya, tapi kita hanya memocking beberapa fungsi saja

// jest.mock("../src/5.database.js", () => {
//     return {
//         // fungsi aslinya
//         __esModule: true,
//         getAllProducts: jest.fn(),
//         getProductById: jest.fn()

//         // nah jadi ini adalah cara kerja dibaliknya

//     }
// })

// nah inijika kit hanya mau mock si fungsi getAllProducts saja, yg lainnya tidak mau
// maka caranya adlaah

jest.mock("../src/5.database.js", () => {
  const originalModule = jest.requireActual("../src/5.database.js");
  // nah jadi originalModule ini maksudnya adalh kita mnegambil fungsi fungsi asli dari modulenya, dan isina adlah objek yang isinya
  // {
  //   getAllProducts: [Function: getAllProducts],
  //   getProductById: [Function: getProductById],
  // }

  return {
    //Kita mengembalikan objek mock kustom, yang merupakan gabungan dari modul asli + modifikasi kita.
    __esModule: true,
    ...originalModule, // jadi kita gabungkan data data fungsi aslinya
    getAllProducts: jest.fn(), // ini kit mock
    // nah jadi hanya fungsi getAllProducts ini saja yang kita mock, dan yang lainnya tidak
  };

  // fungsi __esModule:true :

  // Flag ini penting ketika modul yang dimock adalah modul ES (menggunakan export / import).
  // __esModule: true memberi tahu Jest bahwa ini adalah modul ES6, bukan CommonJS.
  // Tanpa ini, jika kamu meng-mock modul yang diekspor default atau pakai destructuring (import { x } from), maka bisa gagal atau undefined.
});

test("testing mock module", () => {
  // disini kita akna buat implementasinya dari si function yg ada pda module tersebut (kita ubah isinya)

  getProductById.mockImplementation((id) => {
    return {
      id,
      name: "Arduino Uno R3",
    };
  });

  getAllProducts.mockImplementation(() => {
    return [
      {
        nama: "Arduino Uno R3",
      },
      {
        nama: "Sensor HC05",
      },
      {
        nama: "rasberrypy",
      },
    ];
  });

  //   const product1 = ProductController.findById(5); // ini akan error
  //   karena ga ada implementasi mocknya

  const productAll = ProductController.findAll(); // ini berhasil

  //   expect(product1).toEqual({
  //     id: 5,
  //     name: "Arduino Uno R3",
  //   }); ini gagal karena ga ada mocknya

  expect(productAll).toContainEqual({ nama: "rasberrypy" });
});

test.failing("test gagal...", () => {
  const product1 = ProductController.findById(5);
  expect(product1);
});


// fungsi dari spread
// Menyebarkan properti-properti dari suatu objek ke dalam objek baru.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }


// jadi dari seperti ini 
// {
//   __esModule: true,
//   ...originalModule,
//   getAllProducts: jest.fn()
// }


// menjadi seperti ini 
// {
//   __esModule: true,
//   getProductById: [Function: asli getProductById] // tetap fungsi asli -> dari ...originalModule
//   createProduct: [Function: asli createProduct], // tetap fungsi asli -> dari ...originalModule

//   getAllProducts: [Function: mocked getAllProducts],  // fungsi asli di-*override*
//        
// }