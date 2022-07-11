var num = [1,5,9,2,7,4];


function print(val){
    console.log(val);
}

const arrowFunc = (acc,val) => acc*val;

const fatArrowFunc = (acc,val) => {
    const res = acc*val;
    print(res);
}
 
var val = num.reduce(abc,1);

print(val);
myfun3();