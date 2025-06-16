export default class extends Error { // disini gausah pake nama juga gpp
    constructor(tempat, message){
        super(message)
        this.tempat = tempat
    }
}

// jadi export defult itu kita hanya dipakai ketika kita ingin mengekseport 1 saja dari satu file

// dan nanti ketika di import namanya bebas bleh apa saja