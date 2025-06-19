import {forEach} from '../src/1.sum';
console.clear()
const mockCallback = jest.fn(x => 10 + x); // ini sama kayak implementation

// jadi kita buat mock callback function
// yang isinya kita manipulasi item yang dikasih ke callbback ini
// jadi setiap itemnya kita tambahkan 10

test('forEach mock function', () => {
  forEach([1,2,3], mockCallback);

  // jadi forEach ini setiap item yg di iterasi maka akn memanggil si mockcallbacknya
  // misal iterasi pertama mockcallback(1)
  // misal iterasi kedua mockcallback(2)
  // misal iterasi ketiga mockcallback(3)


    // ngecek kalo callback ini sudah di panggil sebanyak 3 kali,
    // karena pemanggilan di for loopnya
  expect(mockCallback.mock.calls).toHaveLength(3);

//   ini maksudnya callback ini di panggil dan berisi nilai 1 (pada iterasi pertama), dan begitu seterusnya
  expect(mockCallback.mock.calls[0][0]).toBe(1);

  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);

  expect(mockCallback.mock.results[0].value).toBe(11);
  expect(mockCallback.mock.results[1].value).toBe(12);
  expect(mockCallback.mock.results[2].value).toBe(13);
// results: [
//         { type: 'return', value: 11 },
//         { type: 'return', value: 12 },
//         { type: 'return', value: 13 }
//       ]

//   console.info(mockCallback)
// nanti yg atas ini uncomment
  console.info(mockCallback.mock)

});