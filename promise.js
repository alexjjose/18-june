let exam_promise=new Promise(
    (resolve,reject)=>{
        let mark=10
        if (mark==100)
        {resolve()
        }
        else{
            reject()

        }
    }
)
exam_promise.then(
    ()=>{
        console.log("promise satisfied")
    }
).catch(
    ()=>{
        console.log("promise NOT satisfied")
    }
)