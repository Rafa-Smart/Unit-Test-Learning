// keitka kita sedang membuat unit test, terkadang kita inign meng ignore unit test tersebut untuk di test, karena masalah mungkin masih error atau lain sebagainya

// biasanya kita mneggunakna komentar, tpai sebnarnya kita bisa menggunakna 

// test.skip()

test(("test 1"), () => console.log("test 1"))
test(("test 2"), () => console.log("test 2"))
test.skip(("test 3"), () => console.log("test 3"))
test(("test 4"), () => console.log("test 4"))
test(("test 5"), () => console.log("test 5"))


