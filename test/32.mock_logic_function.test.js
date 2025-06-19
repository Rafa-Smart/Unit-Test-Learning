// 1. mock restore
// Hanya untuk spy (jest.spyOn). Mengembalikan fungsi asli.
const obj = {
  sayHi: () => 'Hi',
};

jest.spyOn(obj, 'sayHi').mockImplementation(() => 'Hello');

console.log(obj.sayHi()); // 'Hello'

obj.sayHi.mockRestore();

console.log(obj.sayHi()); // 'Hi' (original restored)


// 2. mockClear()
// Membersihkan riwayat panggilan dan instance, tanpa menghapus implementasi mock.


const fn = jest.fn().mockReturnValue('Hello');

fn();
fn();

console.log(fn.mock.calls.length); // 2

fn.mockClear();

console.log(fn.mock.calls.length); // 0

// 3. mockReset()
//  Membersihkan semua data + implementasi + return value (lebih agresif dari mockClear).


const fn2 = jest.fn().mockReturnValue('Hello');

fn2();
fn2.mockReset(); // reset total

console.log(fn2()); // undefined (karena mockReturnValue direset)



// 4. mock.instances
// Menunjukkan semua instance yang dibuat dari constructor mock.

const MockedClass = jest.fn();

new MockedClass();
new MockedClass();

console.log(MockedClass.mock.instances.length); // 2



// 5. 16. jest.isMockFunction(fn)
// Mengecek apakah suatu fungsi adalah mock.

const fn3 = jest.fn();
console.log(jest.isMockFunction(fn3)); // true

function realFn() {}
console.log(jest.isMockFunction(realFn)); // false