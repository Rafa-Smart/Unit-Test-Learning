
import Exceptions from "../src/2.exceptions"


//untuk emnguji apakah sebuah prgora itu menghasilkan error atau melempar error 
// inget kalo lempar itu harus pake throw

// maka bisa mneggunakan exceptions matchers

// taip dengan syarat bahwa fungsi yang emnghasilkan error atua melempar error maka harus di bungkus dulu menggunakan fungsi lagi
// agar ketika fungsi yang terdapat error itu dijalankan maka errornya tidak langsung terjadi 
// tpai di tangkap dulu oleh fungsi pembungkusnya

// dan fungsi pembungkusnya ini harus mereturnkan fungsi yang terdapat errornya itu
// kalo di function declaration itu bisa kita tulis return
// kalo di arrow function kita () => {} karena langusng return

function fungsiError(){
    throw new Error("error bang...")
}


test("cek Error...", () => {
    expect(() => fungsiError()).toThrow()
    expect(() => fungsiError()).toThrow(Error)

    // atau bisa juga mengetes pesan errornya
    expect(() => fungsiError()).toThrow("error bang...")
    expect(() => fungsiError()).toThrow(/ror/)
    expect(() => fungsiError()).toThrow(/^error/)
    expect(() => fungsiError()).toThrow(/bang.{3}$/)

})


// kalo ada eror
// Received function did not throw artinya

// Fungsi yang diterima tidak melempar

// itu masalahnya karena fungis nya hanya mereturn erorr, tapi tidka melempar
// maka harus throw new Error() 
// kalo sebelumnya itu return new Error()



function testing(name){
    if(!name){
        throw new Exceptions("biodata", "tidak mengisi biodata")
    } else {
        return `terima kasih ${name}`
    }
}


test("testing biodata...", () => {

    // jika masuk kondisi if
    expect(() => testing("rafa")).not.toThrow()
    expect(() => testing()).toThrow("tidak mengisi biodata")

    // jika kondisi else
    expect(testing("rafa")).toBe("terima kasih rafa")

})


// nih baca penting
// expect(...).toThrow(...) hanya bisa mengecek:
// Jenis error (Error, Exceptions, dll)
// Pesan error (message), sebagai string, bukan property lain (seperti tempat)

// jadi kalo kamu ngecek property lain maka tidak bisa

// Karena toThrow("...") hanya mencocokkan error.message, bukan property lainnya (tempat, code, dll).

// atau bisa pake try catch, dan juga bisa pake 
// .toThrowErrorMatchingSnapshot();
// Tapi ini lebih cocok untuk auto-pencocokan error dalam bentuk string keseluruhan, bukan properti.


test("testing biodata 2 ...", () => {
  try {
    testing(); // tanpa nama, jadi error
  } catch (err) { // nah jadi ini tuh yang di cek objek errornya
    expect(err).toBeInstanceOf(Exceptions);
    expect(err.message).toBe("tidak mengisi biodata");
    expect(err.tempat).toBe("biodata");
  }
});

// jadi ini isi dari errnya

// tapi kao misalkan ka pengen ngetes isi tracknya kamu bisa pake .toThrowErrorMatchingSnapshot();

// typeof err               // "object"
// err instanceof Error     // true
// err instanceof Exceptions // true
// err.message              // "tidak mengisi biodata"
// err.tempat               // "biodata"





