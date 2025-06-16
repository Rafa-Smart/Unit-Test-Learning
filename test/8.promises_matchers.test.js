

// Secara default, fungsi test di Jest dianggap selesai ketika fungsi callback-nya selesai dieksekusi.

// Tapi... saat kamu menggunakan kode async (seperti Promise, async/await), Jest perlu tahu kapan test-nya benar-benar selesai. Karena itu, kamu harus memberitahu Jest agar menunggu Promise selesai — dan di sinilah peran return.

// kalo misalkan ga pake return maka nanti callback yang ada di test ini akan langsung selesai, tapi kalo pake return maka akan ditunggu dulu promisenya baru selesai

// test('resolves to lemon', () => {
    
//   return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
//   return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
// });


// tapi kekurangannya kalo ga pake return maka hanya bisa sekali saja jadi program yang dibawah returnnya ga akan di exekusi


async function hasilPromise(){
    return "Rafa Khadafi"
}

async function array(){
    return [
        {
            id:"1111",
            nama:"rafa",
            kelas:"10pplg2"
        },
        {
            id:"1245",
            nama:"udin",
            kelas:"12tjkt3"
        }
    ]
}

test("testing promise", async () => {
   await expect(hasilPromise()).resolves.toBe("Rafa Khadafi") // ini bisa meski cuma pake fungsi async yang return Rafa Khadafi

    // berati apapun yang promise kalo kita mau ngecek resolve (hasil) maka pake resolves, dan apapun yang promise kalo kita mau ngecek rejected (gagal) maka pake rejected


    await expect(Promise.resolve("Jamal istiqomah")).resolves.toBe("Jamal istiqomah")
    await expect(Promise.reject("Jamal istiqomah")).rejects.toBe("Jamal istiqomah")


    // coba yang lebih kompleks
    await expect(array()).resolves.toContainEqual({
            id:"1245",
            nama:"udin",
            kelas:"12tjkt3"}) // ini juga berhasil

})

