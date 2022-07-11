function printFirstandSecond(first,second){
    console.log(first);
    console.log(second);
}

var arr = [10,20,30,40,50];

printFirstandSecond(arr);

//destructuring
function printSecondandFourth([,second,,forth]){
    console.log(second);
    console.log(forth);
}
printSecondandFourth(arr);


//object level destructuring uses {}
function printBasicInfo({firstName,secondName,proffession}){
    console.log(firstName+' '+secondName+' is a '+proffession);
}

var person = {
    firstName:'Eknath',
    proffession:'CM',
    secondName: 'Shinde',
    age: 20
}

printBasicInfo(person);