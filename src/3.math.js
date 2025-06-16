export default (pilihan, data1, data2) => {
    if(pilihan.toLowerCase() == "tambah"){
        return data1 + data2
    } else if(pilihan.toLowerCase() == "kurang"){
        return data1 - data2
    }else if(pilihan.toLowerCase() == "bagi"){
        return data1 / data2
    }else if(pilihan.toLowerCase() == "kali"){
        return data1 * data2
    } else {
        throw Error("pilihan yang anda masukan salah")
    }
}