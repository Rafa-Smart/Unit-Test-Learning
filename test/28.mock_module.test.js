import { getAllProducts, getProductById } from "../src/5.database";
import { ProductController } from "../src/6.products-services";
console.clear();
// untuk melakukan mock module kita bisa menggunakan jest.mock(nama module)
// dan secara otomatis ketika kit import dari module tersbuet, maka jest akan melalukan mocking pad semua fungsi yang ada di module tersebut

// dan jika kita tidak inign memocking module itu lagi maka kita bisa pake jest.unmock(nama module)
// maka ketika kita panggil fungsi dari module tersebut maka akan menggunakan module asli bukan mocknya

// jadi kita mocking dulu sebelum testingnya berjalan

jest.mock("../src/5.database");

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

  const product1 = ProductController.findById(5);
  const productAll = ProductController.findAll();

  expect(product1).toEqual({
    id: 5,
    name: "Arduino Uno R3",
  });

  expect(productAll).toContainEqual({nama:"rasberrypy"})





  // karena ini tidak pake once, maka jadi siapapun dan kapanpun bisa menjalankan fungsi ini dengna menjalankan implementasi mocknya (karena bisa berkali kali)
});
