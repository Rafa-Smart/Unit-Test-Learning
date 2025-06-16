test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).not.toBe(5);
  expect(value).toEqual(4);
});


// expect(actual).matcher(expected);
// actual → nilai yang kamu dapat dari kode program
// matcher() → metode perbandingan
// expected → nilai yang kamu harapkan

// jadi function expect ini mengembalikan objek matchers
// dan pada objek matcher ini punya banyak method 