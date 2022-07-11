function sort(arr=[],direction='asc'){
    console.log("Sort the array",arr,direction);
}

sort([1,2,3,4]);
sort([4,3,2,1], 'dec');

function multiplyBy(a,mult){
    console.log(typeof mult)
    mult = mult !== undefined?mult:4;
    console.log(a*mult)
}

multiplyBy(2);
multiplyBy(3,undefined);
multiplyBy(2,0);
multiplyBy(2,20);

//undefined is a type
//null is a value
//even if we pass multiple parameters then we done get error in js - unknown parameters (varargs)


function sum(...args){
    var total = args.reduce((acc,value)=> acc+ value,0);
    console.log("Total "+total);
}

sum(1,2,3);
sum(1,2,3,4);