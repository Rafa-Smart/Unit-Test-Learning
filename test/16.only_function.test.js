// only function, jadi kita hanya ingin mengakses satu fungsi apda 1 file tersebut

// jad kita memaksa pada 1 file tersebut bahwa hanya ingin mengakses 1 fungsi saja yaitu menggunakan function only

// jadi ketika kita run filenya maka yang ke run hanya si only saja

test(("test 1"), () => console.log("test 1"))
test(("test 2"), () => console.log("test 2"))
test.only(("test 3"), () => console.log("test 3"))
test(("test 4"), () => console.log("test 4"))
test(("test 5"), () => console.log("test 5"))