class Tes extends Error { // disini gausah pake nama juga gpp
    constructor(tempat, message){
        super(message)
        this.tempat = tempat
    }
}

function testing(){
    throw new Tes("biodata", "tidak mengisi biodata")
}

let data = testing()
console.log(data)