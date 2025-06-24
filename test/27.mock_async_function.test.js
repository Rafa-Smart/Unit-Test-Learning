// mock async function, jadi mock ini akan mengembalikan promise
// bia mnegggunakan mockResolvedValue atau yg rejectednya
// atau kita juga bsia membuat manual promise dengan menggunakan mockImplemenation

import { getData } from "../src/4.data_async";

console.clear();

test("test fuction async", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getData("rafa", from)).resolves.toEqual({
    nama: "rafa",
    data: 1000,
  });

  // jadi pada kode terebut seolah olah kita sedang mengambil data dari api,

  // expect(from).toHaveBeenCalledWith(1000) // ini ga bis karena kita ga memanggil from ini dnegna paramter

  await expect(from).toHaveBeenCalledTimes(1); // ini bisa karena from ini baru di apnggil sekali saja

  await expect(from.mock.results[0].value).resolves.toEqual(1000);
  console.log(from.mock);
});

// {
//   calls: [ [] ],
//   contexts: [ undefined ],
//   instances: [ undefined ],
//   invocationCallOrder: [ 1 ],
//   results: [ { type: 'return', value: [Promise] } ],
//   lastCall: []
// }

test("test async rejected..", () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups error..."));

  // expect(getData("Jamal", from)).rejects.toEqual("Ups error...")
  // itu yg equal ga bisa kaerna dia bener bener ngecek sampe ke dalam objectnya, cek aja snediri ( ga juga sih)

  // ohh jadi kalo misalkan new error(return) / throw error, teap akan ke tangkep sama si 
  // try and cathcnya, jadi ga cuma throw aja yg ketangkep erronrnya new error juga ketangkep



  expect(getData("Jamal", from)).rejects.toBe("Ups error...");
  // jadi ini tuh udah di try cacth kan lihat aja di filenya data async
  
  // atau mungkin bisa juga seprti ini
  // expect(getData("Jamal", from)).rejects.toEqual(new Error("Ups error..."));
  // kalo mau ngetes apakah dia instance error dari error sesuatu maka bisa pake toInstanceOf

});

// atau mau pake ini
test.failing("test failing", () => {
  expect(1).toBe(2);
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups error..."));

    // nah kalo pake failing tidka error karena benre inign menghasilkan error, jadi bukan membandingkan

    expect(getData("jj", from))

});
