export function sum(a, b){
    return a + b
}

export function sum2(...data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += data[i]
    }

    // for( i of data){
    //     sum += i
    // }

    // return data.reduce((acc, i) => acc + i, 0)

    return sum
}
export function sum3(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += data[i]
    }

    // for( i of data){
    //     sum += i
    // }

    // return data.reduce((acc, i) => acc + i, 0)

    return sum
}