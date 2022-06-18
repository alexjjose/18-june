
displayResult=(result)=>

{
    console.log(result)
}

add2Num=(a,b,callbackFn)=>

{
    let c=a+b
    callbackFn(c)
}

add2Num(30,20,displayResult)

