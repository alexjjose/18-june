displayresult=(result)=>{
    console.log(result)
}

bigof2num=(a,b,callbackfn)=>
{
    if (a>b)
     {
        callbackfn(a) 
        
    } 
    else
     {
        callbackfn(b)
        
     }
}

bigof2num(20,5,displayresult)