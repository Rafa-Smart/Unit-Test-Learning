// nah sama seperti mock partial function

// defaltnya ketika kita mock sebuah module, maka class ini isi fungsinya
// akan di mock juga

// jadi kita bisa hanya mock sebagian function saja didalam class
// menggunakan jest.spyOn(objek, nama_fungsi)


import { UserRepository } from "../src/7.user-repository";
import { UserServices } from "../src/8.user-services";


console.clear()

// jadi disini tidak ada lagi mock ke si modulenya
// jadi kita biking langsung aja

const repository = new UserRepository();
const services = new UserServices(repository);


test("tisting spyOn findById...", () => {
    const user = {id:5,nama:"rafa"};

    // nah disini kita mock manual si fungsi dari si classnya, (mandiri);

    const mockFindByIdRepo = jest.spyOn(repository, "findById");
    mockFindByIdRepo.mockReturnValueOnce(user);

    expect(services.findById(5)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled()
    expect(repository.findById).toHaveBeenCalledWith(5)


})



test.failing("panggil asli service (harusnya error) 1...", () => {
    expect(services.findAll()) // belum ada isinya
})
test("panggil asli service (harusnya error) 2...", () => {
    expect(() => services.findAll()).toThrow("belum ada isinya") // belum ada isinya
    expect(() => services.findAll()).toThrow() // belum ada isinya
})