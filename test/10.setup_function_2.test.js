// jadi fungsi after dan before all ini akan diekseukis sekali ketika file test.js dipanggil

// jadi kalo misakan ada banyak unit test dalam 1 file js, maka nanti akan hanya di runing sekali 
// fungsi beforeAll / afterAll nya sebelum semua testing yang ada pada file tersebut dijalankan


// contoh kasus nyatanya
// jadi kamu inign berintraksi pada sistem diluar misal database

let db;

beforeAll(() => {
  // Simulasi buka koneksi
//   disini untuk semua test, kita akn konekin dulu ke database
  db = { connected: true, data: [] };
  console.log("Connect ke database (sekali saja)");
});

afterAll(() => {
  // Simulasi tutup koneksi, dan ketika semua test selesai, maka putuskan lagi koneksinya dari database
  db = null;
  console.log("Disconnect database (sekali saja)");
});

test("Database terhubung", () => {
  expect(db.connected).toBe(true);
});

test("Masukkan data ke DB", () => {

    // disini ngecek apakah kita bisa memasukan data ke database
  db.data.push("item");
  expect(db.data).toContain("item");
});
