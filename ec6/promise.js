//for async or concurrency
//uses context object (shared object)

function async(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = Math.random()%100;
            result > 0.5 ? resolve(result):reject("Time out")
        },1)
    });
}

for (let i = 0; i < 10; i++) {
    async()
    .then(result => console.log(result))
    .catch(result => console.log("Error "+result));
}