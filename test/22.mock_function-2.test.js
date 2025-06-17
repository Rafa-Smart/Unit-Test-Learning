import {forEach} from '../src/1.sum';
console.clear()
const mockCallback = jest.fn(x => 10 + x);

// jadi kita buat mock callback function
// yang isinya kita manipulasi item yang dikasih ke callbback ini
// jadi setiap itemnya kita tambahkan 10

test('forEach mock function', () => {
  forEach([1,2,3], mockCallback);

    // ngecek kalo callback ini sudah di panggil sebanyak 2 kali,
    // karena pemanggilan di for loopnya
  expect(mockCallback.mock.calls).toHaveLength(3);

//   ini maksudnya callback ini di panggil dan berisi nilai 1 (pada iterasi pertama), dan begitu seterusnya
  expect(mockCallback.mock.calls[0][0]).toBe(1);

  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);

//   expect(mockCallback.mock.results[0].value).toBe(42);

//   console.info(mockCallback)
// nanti yg atas ini uncomment
  console.info(mockCallback.mock)

});