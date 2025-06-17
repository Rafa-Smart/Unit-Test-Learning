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