// kia juga bisa membuat mock class

// dan sebenarnya di dala class ini adalah constructor function
// cuma karena dipermudah dnegna cara menuis kode yg baru, maka dipermudah dneg nakeyword class

// jadi sebenarnya sama saja kita juga bisa mock class ini

// nah jadi ceritanya di UserRepository itu dia melakukan query ke database
// maka kita akan mock fungsi fungsi yg ada di UserRepositorynya

import { UserRepository } from "../src/7.user-repository";
import { UserServices } from "../src/8.user-services";

console.clear();

// disini kita akna mock modulnya,
// maka seluruh class di modul itu dan fungsinya akakn di mock

jest.mock("../src/7.user-repository.js")

// nah karena kita sudah mock seluruhnya maka berati
// ketika kita inign membuat instance objek dari si class yg ada pada modul tersebut, maka kita akan membuat mock objek isntancenya

const repository = new UserRepository(); // ini adalah isntance mock objeknya
const services = new UserServices(repository);
// jadi sekarang si services ini memiliki mock objek dari repository

test("test mock class save...", () => {
    const user = {id:5,nama:"rafa"};
    services.save(user)
    // nah tadi kan si save services ini memanggil save yg ada di repository
    // jadi kita cek kalo objek mock repository ini pernah di panggil atau tidak

    expect(repository.save).toHaveBeenCalled() // berhaisl

    // dan juga kita bisa tau bahwa di save repository ini pernah di panggil dengan parameter apa 
    expect(repository.save).toHaveBeenCalledWith(user) // {id:5,nama:"rafa"}


    // nah kalo udah begini tinggal kamu kasih aja contoh logicnya,
    // karena di UserRepository nya belum d implementasi kode apapun (kecuali error)

})


test("test mock return value... (findById)", () => {
    let user = {id:10, nama:"jamal istiqomah"}
    repository.findById.mockReturnValueOnce(user);
    // jadi ktia seting bahwa si repository ini ketika di panggil sekali 
    // maka akn megnembalikan data user ini

    expect(services.findById(10)).toEqual(user)
    // jadi ini sebenarny paramter di findById ini, bebas apa saja
    // karena kita sudah setting bahwa apapun yg dikirm dari user (apapun)
    // return valuenya tetap user ini

    expect(repository.findById).toHaveBeenCalled() // pernah di panggil
    expect(repository.findById).toHaveBeenCalledWith(10) // pernah di panggil
    // dengan parameter 10

})




test("test mock return value... (findAll)", () => {
    let users = [
        {id:10, nama:"jamal istiqomah"},
        {id:20, nama:"siti"},
        {id:30, nama:"udin"},
    ]

    // kita mock datanya
    repository.findAll.mockReturnValueOnce(users);
    // jadi ktia seting bahwa si repository ini ketika di panggil sekali 
    // maka akn megnembalikan data users ini

    expect(services.findAll()).toEqual(users)
    // jadi ini sebenarny paramter di findById ini, bebas apa saja
    // karena kita sudah setting bahwa apapun yg dikirm dari users (apapun)
    // return valuenya tetap user ini



    // oke disini semept error karena kita hanya mereturnkan data users, SATU KALI

    // oleh karena itu di pemanggilan kedua services.findAll isinya undefined
    // jadi kita mock lagi untuk yg kedua kalinua, dan seterusnya
    repository.findAll.mockReturnValue(users)

    expect(services.findAll()).toContainEqual({id:30, nama:"udin"})

    console.log(services.findAll())
    expect(repository.findAll).toHaveBeenCalled() // pernah di panggil


})


