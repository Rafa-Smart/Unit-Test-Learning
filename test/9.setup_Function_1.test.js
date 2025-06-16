// beforeEach dan juga afterEach

console.clear()

// jadi kedua fungis ini akan dijalankan sebelum dan setelah setiap test case
// misal beforeEach

// fungsi ini akan dijalankan setiap kali fungsi test() inign dijalankan
// dan begitu pula sebalknya untuk yang afterEach()

// misal didalam suati file terdapat 5 fungsi test maka nanti fungsi beforeEachnya meskipun hanya ada satu
// maka akn dijalankan dulu misal ada 5 test dan ada sati fugnsi beforeEach dan afterEach,
// maka beforeEachnya dulu baru testing pertama lalu afterEach,
// maka beforeEachnya dulu baru testing kedua lalu afterEach,
// dan begitu seterusnya
// jadi diselang seling antar testingnya

// dan kalo misalakn kode didalam fungsi beforeEach atau afterEach ini ada async, maka kita bisa menambahkan async pada awal fungsinya






beforeEach(() => {
    console.log("ini sebelum")
})


test("testing beforeEach...(1)", () => {
    console.log("testing pertama")
})
test("testing beforeEach... (2)", () => {
        console.log("testing kedua")

})
test("testing beforeEach...(3)", () => {
        console.log("testing ketiga")

})


afterEach(() => {
    console.log("ini sesudah")
})


// jadi ini itu sangat cocok dan berguna ketika kamu memiliki kondisi awal yang harus di-set sebelum test, atau data sementara yang harus dibersihkan setelah test.




// kasus nyatanya
// Contoh: Setiap test membutuhkan user yang sudah login (simulasi login).


let user;

beforeEach(() => {
  user = { name: "Rafa", loggedIn: true };
});

afterEach(() => {
  user = null; // bersihkan user setelah test (jadi sudah kayak tidak login lagi)
});

test("user should be logged in", () => {
  expect(user.loggedIn).toBe(true);
});

test("user name should be Rafa", () => {
  expect(user.name).toBe("Rafa");
});
