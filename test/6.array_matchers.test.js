const shoppingList = [
  'Snack',
  'Clock',
  'trash bags',
  'paper towels',
  'milk',
];


const data = [
    {
        id:29,
        nama:"Putri",
        kelas:"10pplg2"
    },
    {
        id:30,
        nama:"Rafa",
        kelas:"10pplg2",
    }
]

test('apakah ada milk pada pembelian', () => {

  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');


  expect(data).toContainEqual({
    id: 29,
    nama: "Putri",
    kelas: "10pplg2",
  })
  
});

// jadi kalo toContain itu hanya mengecek yg sepeti toBe saja / hanya isi 
// atau valiable dan tidak dalam

// tapi kalo toContainEqual itu berati mengece sampai dalam apakah item ini ada pada array itu
// atau tidak seberti mengecek item objek ini apakah ada



// atau bisa juga seprti ini
test("testing string...", () => {
  let string = "rafa khadafi";

  expect(string).toContain("afa")
})