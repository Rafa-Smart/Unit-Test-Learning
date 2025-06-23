export function ngambilData(nama){
    return new Promise((resolve, rejected) => {
        if(nama){
            setTimeout(() => {
                resolve(`haloo ${nama}`)
            }, 1000);
        } else {
            rejected('nama tidak boleh kosong')
        }
    })
}

// export async function getData(nama, from){
//     let data = await from();
//     return {nama:nama, data:data};
// }


export async function getData(nama, from) {
  try {
    let data = await from();
    return { nama: nama, data: data };
  } catch (err) {
    throw err.message; // lempar string, bukan objek Error
    // jadi nanti bsia pake new Error() di mockRejectValueOncenya
    // karena sudah di tangkpa disini
  }
}
