// function untuk melakukan scoping pada jest itu adalah describe

// nah fungsi atau keuntungan yang didapat ketika menggunakan describe adalah
// 1.Membuat struktur test yang lebih rapi dan mudah dibaca.
// 2.Menyediakan konteks/nama untuk sekelompok test.
// 3.Menerapkan beforeEach, beforeAll, dsb. hanya pada test dalam grup tersebut.


// dan juga bisa membuat outputnya lebih jelas dan terstruktur
// jadi misal didalam sebuah file terdapat banyak sekali testing, maka
// kita bisa mengelompkan unit testing yang ada berdasarkan kelompokya enggunkana fungsi describe ini

// PENTING...

// dan setup fungction yang ada didalam fungsi describe
// seperti before dan after Each, atau before dan after All
// maka fungsi setup ini akan hanya dijalankan didalam fungsi describe yang menggunakan fungsi tersebut saja

// dan juga ketika ada fungsi fungsi setup yang ada diluar fungsi describe, atau global istilahnya
// maka akan dijalankan di semua fungsi describe yang ada di dalam file tersebut


// kelompok pertama
describe("Operasi Matematika", () => {
  test("Penjumlahan", () => {
    expect(1 + 2).toBe(3);
  });

  test("Pengurangan", () => {
    expect(5 - 2).toBe(3);
  });
});


// kelompok kedua 
describe("User Management", () => {
  let user;

  beforeEach(() => {
    user = { name: "Rafa", role: "admin" };
  });

  test("user punya nama", () => {
    expect(user.name).toBe("Rafa");
  });

  test("user punya role", () => {
    expect(user.role).toBe("admin");
  });
});




// atau ini contoh mudahya

// tinggal uncomment saja

// beforeAll(() => console.info("Before All Outer"));
// afterAll(() => console.info("After All Outer"));
// beforeEach(() => console.info("Before Each Outer"));
// afterEach(() => console.info("After Each Outer"));

// test("Test Outer", () => console.info("Test Outer"));

// describe("Inner", () => {

//     beforeAll(() => console.info("Before All Inner"));
//     afterAll(() => console.info("After All Inner"));
//     beforeEach(() => console.info("Before Each Inner"));
//     afterEach(() => console.info("After Each Inner"));

//     test("Test Inner", () => console.info("Test Inner"));

// });