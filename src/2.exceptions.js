export default class extends Error { // disini gausah pake nama juga gpp
    constructor(tempat, message){
        super(message)
        this.tempat = tempat
    }
}

// jadi export defult itu kita hanya dipakai ketika kita ingin mengekseport 1 saja dari satu file

// dan nanti ketika di import namanya bebas bleh apa saja

// kalo misalkan pada html yang bagian expection, dan ada 3x, 1x, 2x, itu maksudnya
// pada baris tersbut sudah tercover sebanyak itu
// jadi msial pada baris ke 4, ada 7x, artinya pada baris tersebut sudah 7x tercover dnegan unit testnya