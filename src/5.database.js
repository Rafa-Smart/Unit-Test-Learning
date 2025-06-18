export function getProductById(id){
    // disini ceritanya adalah kdoe untuk connect ke database
    // tpaid disini kita pake erro aja karena buat contoh

    throw new Error("belum di implementasi");
}

export function getAllProducts(){
    // disini ceritanya adalah kdoe untuk connect ke database
    // tpaid disini kita pake erro aja karena buat contoh

    throw new Error("belum di implementasi");
}

// kita sebenarnya ga perlu pake isi dari fungsi aslinya tapi kita hanya butuh nama dan parameter yang di butuhkan saja
// karena akan kita manipulasi isinya soalnya

export function createProduct(id, nama){
    return {
        id,nama
    }
}