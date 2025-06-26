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


  function ambilDataNih(nama) {
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
    // nah jadi kan fungsi ambildata ini sudah di mock
    // lalu ketika di mock maka akan di then disini
    // ingat yg di mock itu hanya fungisnya, kalo thennya tetap yg asli
      .then((res) => `Berhasil: ${res}`)
  }

  
  //   nah jadi disini kita akn membuat mock fungsi dari si ambil data agar tidak beneran ngambil data ke api

  test("testing resolved yg asli", () => {
    const ambilDataMock = jest
      .fn()
      .mockImplementation((nama) => { // disini kita buat lagi fungis dari si almbiData -> jdi 
        // sebenernya kita ga buatuh fungis aslinya
        if(nama){
          return Promise.resolve(`haloo ${nama}`)
        } else {
          return Promise.reject('ini isinya error')
        }
      });

    // ah jadi ini tuh ktia buat mock fungsi yang berfungsi untuk mengambil dat nama dari sapaUser(), lalu dengan nama tersebut kita simulasikan bahwa kita telah mengmbil data dari api

    expect(sapaUser("rafa", ambilDataMock)).resolves.toBe(
      "Berhasil: haloo rafa"
    );

    // ini kalo gagal
    expect(sapaUser("", ambilDataMock)).rejects.toBe("ini isinya error")


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

  async function tampilkanUser(email, ambilUserFn) { // ini sengaja kita kasih nama fungis yg pegen di mock ke callback agar bisa di manupilasi
    if (email) {
      if (isEmail(email)) {
        return await ambilUserFn(email).then((data) => `Email pengguna: ${data.email}`); // dari si mockResolvedValueOnce
            // nah jadi kan fungsi ambilUserfn ini sudah di mock
    // lalu ketika di mock maka akan di then disini
    // ingat yg di mock itu hanya fungisnya, kalo thennya tetap yg asli
      } else {
        return await Promise.reject("email tidak valid");
      }
    } else {
      return await Promise.reject("email tidak boleh kosong");
      // disini juga ga perlu pake await, karena dibawah sudah kita reject di bagian expectnhya
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

    // jadi kita itu hanya memock fungsi ambilUserFn saja, dan ketika di mock 
    // fungsi ambilUserMOck ini akn ada di fungsi tampilkanUser, nah di fungsi itu akn
    // si fungsi ambilUsernya di then kan, jadi then ini tetep berfungsi meskipun sudah mi mock fungsi yg di thenkannya

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



// jadi ketika kita inign menipulasi sebauh fungsi yg ada di fungis laiin, maka fungis yg mau di mock itu harus
// kita panggil di callback, jadi nanti gampang buat kita mock


// PENTINGGGG

// jadi inget then itu adalah hasil dari resolve
// dan catch itu adalaah hasil dari si rejectd




