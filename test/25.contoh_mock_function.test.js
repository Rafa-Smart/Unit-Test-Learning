console.clear();

describe("1. fecth data dari api", () => {
  async function ambilData(fecth, id) {
    if (!id) {
      return await Promise.reject("id tidak ada!!!");
    } else {
      let response = await fecth(`https://api.example.com/users/${id}`);
      // jadinya nanit ketika sudah di mock
      
      // ingat yg diganti itu hanya fungisnya saja
      // paramter / then/catchnya tetap dari fugnsi aslinya
      // let response = await mockFecth(`https://api.example.com/users/${id}`);
      return response.json();
    }
  }

  // jadi disini kita akan membuat sebuah test yg ketika user menginputkan id, maka nanti akan diberikan data dari apinya

  // dan jika idnya tidak ada tidak akna dapat datanya

  test("test fecth data...", async () => {
    let mockFecth = jest.fn();
    mockFecth.mockResolvedValueOnce({
      json: () => Promise.resolve({ id: 5, name: "Rafa Khadafi" }), // gausah pake then(karena udh resolve)
    });

    // jadi ini sebenarnya ga pake Promise.resolve juga bsa, dan kenapa ini bisa
    // karena fungis async ini meskipun didalamnya ada promise lagi, maka tetap aka di resolve sekali saja

    //     fetch(url) // Promise level 1 (mengembalikan Response) // mockResolvedValueOnce
    //         .then(response => response.json()) // Promise level 2 (mengembalikan data) //() => Promise.resolve({id:5, name:"Rafa Khadafi"})

    // jadi di mock functionnya kita mengembalikan return value satu kali
    // yang isinya itu adalah objek response yang isinya ada fungsi json yang mereturnkan data jsonnya yaitu Promise.resolve({id:1, name:"Rafa Khadafi"})

    await expect(ambilData(mockFecth, 5)).resolves.toEqual({
      id: 5,
      name: "Rafa Khadafi",
    });

    // diini kita cek mocknya, bahwa mock ini di panggilnya denga parameter ini
    expect(mockFecth).toHaveBeenCalledWith("https://api.example.com/users/5");

    // ini karena

    // Ketika Anda memanggil ambilData(mockFecth, 5), di dalam fungsi ambilData
    // await fecth(`https://api.example.com/users/${id}`); // id = 5
    // Ini sama dengan memanggil mockFecth("https://api.example.com/users/5")

    // Jest secara otomatis mencatat bahwa:
    // mockFecth dipanggil 1 kali
    // Dengan parameter "https://api.example.com/users/5"
  });

  // disini kita cek jika gagal
  test("jika gagal fecth data...", () => {
    expect(ambilData(fetch, "")).rejects.toBe("id tidak ada!!!");
  });
});

// contoh lagi
describe("2. testing hitung angka easy", () => {
  function hitung(angka1, angka2, callback) {
    let hasil = angka1 + angka2;
    callback(hasil);
  }

  test("tes hitung...", () => {
    let callback = jest.fn();
    hitung(5, 6, callback);
    expect(callback).toHaveBeenCalledWith(11);
    // jadi maksudnya itu callback ini di panggil dengna nilai total yaitu 11, kao param 1dan 2 nya = 5 dan 6
  });
});

// conoth lagi

describe("3. testing kirim pesan", () => {
  function kirimEmail(service, penerima, pesan) { // disini fungis yg pengen kita mock itu si service
    // makanya ada di callback
    if (!penerima.includes("@")) throw new Error("Email tidak valid");
    service.send(penerima, pesan);
  }

  test("testing kirim pesan...", () => {
    let mockService = {
        send: jest.fn(),
    }
    // disini kita buat seperti inikarena kita inign mock fungsi send nya
    // agar sama kayak gini  service.send() -> mockService.send()

    kirimEmail(mockService, "rafakhadafi1205@gmail.com", "haloo")
    kirimEmail(mockService, "ucupsurucup@gmail.com", "haiiii")
    // disini sudah kita panggil 1 kali dengan param itu

    // disini kita cek penggunaan dari si callbacknya

    expect(mockService.send).toHaveBeenCalledWith("rafakhadafi1205@gmail.com", "haloo")
    expect(mockService.send).toHaveBeenCalledWith("ucupsurucup@gmail.com", "haiiii")
    expect(mockService.send).toHaveBeenCalledTimes(2)

    // toHaveBeenCalledWith = telah dipanggil dengan parameter / pernah dipanggil

    console.log(mockService.send.mock)

  })



});




