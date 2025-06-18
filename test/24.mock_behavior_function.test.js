console.clear();

describe("1. mock implementation...", () => {
  test("mockImplementation(fn)...", () => {
    const fn = jest.fn().mockImplementation((a, b) => a + b);

    expect(fn(20, 20)).toBe(40);
    // jadi disini mock implementasion itu digunakan untuk memanipulasi nilai return dari function
    // dan setiap kali kita menggunakan fn (mock), maka berapapun kita memanggilnya atau sebnayk apapun kita memanggilnya, maka logicnya tidak akan berubah
    // tetap (a, b) => a + b

    // tapi kalo kita pake mockImplementationOnce, jadi untuk satu kali penggunaan mockImplementationOnce, maka nilai manipulasi returnnya akan itu (sekali saja),
    // dan untuk yang kedua kali nya akn mereturnkan nilai asli dari function tersebut

    const fn2 = jest
      .fn()
      .mockImplementationOnce(() => "first") // untuk pemanggillan 1
      .mockImplementationOnce(() => "second") // untuk pemanggillan 2
      .mockImplementation(() => "default"); // untuk pemanggillan seterusnya (berapapun)

    // dan kita juga bisa chaining mocknya
    // karena sebenarnya jest.fn() ini megnembalikan sebuah objek yang memiliki banyak fungsi seperti mockResolvedValueOnce, dan ini juga bisa di chaining

    expect(fn2()).toBe("first");
    expect(fn2()).toBe("second");
    expect(fn2()).toBe("default");
  });
});

describe("2. mock promise...", () => {
  function ceritanyaPromise(nama) {
    return new Promise((resolve, rejected) => {
      if (nama) {
        resolve("haloo " + nama);
      } else {
        rejected("ini isinya error");
      }
    });
  }

  // nah disini kit bisa manipulasi nilai resolve dan rejectednya menggunakan mock

  test("cek resolved...", async () => {
    const ceritanyaPromiseMock = jest.fn();

    ceritanyaPromiseMock.mockResolvedValueOnce("ini data api"); // ini pemanggilan 1
    ceritanyaPromiseMock.mockResolvedValueOnce("ini data penting"); // ini pemanggilan 2
    // ceritanyaPromiseMock.mockResolvedValue('');

    await expect(ceritanyaPromiseMock()).resolves.toBe("ini data api"); // ini pertama
    await expect(ceritanyaPromiseMock()).resolves.toBe("ini data penting"); // ini kedua

    // jadi dalam test ini kita ga peduli bahwa apakah function itu menerima nama atau tidak, dan kita sudah mengset nilai resolvednya itu sendiri

    // dan ini kita akan membuat niali default ketika resolved di mocknya, mau berapa kali pun di panggilnya
    ceritanyaPromiseMock.mockResolvedValue("ini defaultnya"); // ini untuk berapapun di panggilnya
    await expect(ceritanyaPromiseMock()).resolves.toBe("ini defaultnya");
    await expect(ceritanyaPromiseMock()).resolves.toBe("ini defaultnya");
    await expect(ceritanyaPromiseMock()).resolves.toBe("ini defaultnya");
    await expect(ceritanyaPromiseMock()).resolves.toBe("ini defaultnya");
  });

  test("cek rejected...", async () => {
    const ceritanyaPromiseMock = jest.fn();

    ceritanyaPromiseMock.mockRejectedValueOnce("ini gagal pertama"); // ini pemanggilan 1
    ceritanyaPromiseMock.mockRejectedValueOnce("ini gagal kedua"); // ini pemanggilan 2
    // ceritanyaPromiseMock.mockRejectedValue('');

    await expect(ceritanyaPromiseMock()).rejects.toBe("ini gagal pertama"); // ini pertama
    await expect(ceritanyaPromiseMock()).rejects.toBe("ini gagal kedua"); // ini kedua

    // jadi dalam test ini kita ga peduli bahwa apakah function itu menerima nama atau tidak, dan kita sudah mengset nilai rejectednya itu sendiri

    // dan ini kita akan membuat niali default ketika rejected di mocknya, mau berapa kali pun di panggilnya
    ceritanyaPromiseMock.mockRejectedValue("ini defaultnya"); // ini untuk berapapun di panggilnya
    await expect(ceritanyaPromiseMock()).rejects.toBe("ini defaultnya");
    await expect(ceritanyaPromiseMock()).rejects.toBe("ini defaultnya");
    await expect(ceritanyaPromiseMock()).rejects.toBe("ini defaultnya");
  });
});

describe("3. test promise asli mock...", () => {
  function ambilData(nama) {
    return new Promise((resolve, rejected) => {
      if (nama) {
        resolve("haloo " + nama);
      } else {
        rejected("ini isinya error");
      }
    });
  }

  function sapaUser(nama, ambilData) {
    return ambilData(nama)
      .then((res) => `Berhasil: ${res}`)
      .catch((err) => `Gagal: ${err}`);
  }

  //   nah jadi disini kita akn membuat mock fungsi dari si ambil data agar tidak beneran ngambil data ke api

  test("testing resolved yg asli", () => {
    const ambilDataMock = jest
      .fn()
      .mockImplementationOnce((nama) => Promise.resolve(`haloo ${nama}`));

    // ah jadi ini tuh ktia buat mock fungsi yang berfungsi untuk mengambil dat nama dari sapaUser(), lalu dengan nama tersebut kita simulasikan bahwa kita telah mengmbil data dari api

    expect(sapaUser("rafa", ambilDataMock)).resolves.toBe(
      "Berhasil: haloo rafa"
    );
  });
});

describe("4. kasus nyata penggunaan mock...", () => {
  function isEmail(email) {
    // let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let regex = /^[^\s]+@[^\s]+\.[^\s]+$/; // jdai [^s] -. apapun selain spasi
    let hasil = regex.test(email); // return true atau false
    return hasil;
  }

  // nah disini itu sebenarnya kita kalo mau oake mock
  // kita harus pake callback agar nanti bisa di mock callbacknya

  function tampilkanUser(email, ambilUserFn) {
    if (email) {
      if (isEmail(email)) {
        return ambilUserFn(email).then((data) => `Email pengguna: ${data.email}`); // dari si mockResolvedValueOnce
      } else {
        return Promise.reject("email tidak valid");
      }
    } else {
      return Promise.reject("email tidak boleh kosong");
    }
  }

  // jadi disini kita akn mengecek sebuah function tampilkanUser yang menerima email dan mereturn callback ambilUserfn
  // nah disini ketika kita masukan email yg valid, maka fungsi ambilUserFn akan kita jadi kan mock
  // dan akan meresolve data (ceritanya data dari api)

  test("testing kasus nyata", async () => {
    const ambilUserMock = jest
      .fn()
      .mockResolvedValueOnce({ email: "rafakhadafi1205@gmail.com" }); //ini yg brehaisl

    // ini kalo berhasil email valid
    await expect(
      tampilkanUser("rafakhadafi1205@gmail.com", ambilUserMock)
    ).resolves.toEqual("Email pengguna: rafakhadafi1205@gmail.com");

    // ini kalo gagal email tidak valid
    await expect(tampilkanUser("sengaja salah", ambilUserMock)).rejects.toEqual(
      "email tidak valid"
    );


    // ini kalo email kosong
    await expect(tampilkanUser("", ambilUserMock)).rejects.toBe("email tidak boleh kosong")

    // Received promise resolved instead of rejected
    // Resolved to value: "Terjadi error"
    // Janji yang diterima diselesaikan alih-alih ditolak
    // Diselesaikan ke nilai: "Terjadi kesalahan"
  });
});



