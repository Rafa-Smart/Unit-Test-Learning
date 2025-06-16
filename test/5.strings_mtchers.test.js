test('ngetes yg tidak ada regexnya', () => {
  expect('team').not.toMatch(/I/);
});

test('ngetes sebuah regex', () => {
  expect('Christoph').toMatch(/stop/);
});

// jadi untuk mengecek string yang ada, menggunkaan regex