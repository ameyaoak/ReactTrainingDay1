var companies = ['Oracle','Sub','Moon','IBM','SAP','DataBricks','Microsoft'];
var numbers = [52,34,63,23,31];

function print(val){
    console.log(val);
}

companies.forEach(print); // auto loop and print using callback function

//--------------------------------------------------------------------------------

with(companies){
    forEach(print);
}

//--------------------------------------------------------------------------------

function toUpper(val){
    return val.toUpperCase();
}
//map returns another array of equal size with effective callback
var companiesUpperCase = companies.map(toUpper)
print(companiesUpperCase);

//--------------------------------------------------------------------------------


function lessThan30(val){
    return val<30;
}

var arrayLessThan20 = numbers.filter(lessThan30);
print(arrayLessThan20);

//--------------------------------------------------------------------------------


var emp = [
    {name:'emp1',sal:5000000},
    {name:'emp2',sal:9000000},
    {name:'emp3',sal:7000000}
]

function highestPaid(emp){
    return emp.sal>1000000 && emp.sal<10000000;
}

var firstHighPaidPerson = emp.find(highestPaid); // gets you 1st matching as per condition
print(firstHighPaidPerson);

var isEveryoneHighlyPaid = emp.every(highestPaid); // returns boolean based on condition for full array
print(isEveryoneHighlyPaid);

var isEveryoneHighlyPaid = emp.some(highestPaid); // returns boolean based on condition for full array
print(isEveryoneHighlyPaid);


//--------------------------------------------------------------------------------

function add(acc,sum){ //acc is acc varaible
    return acc+sum;
}

function mul(acc,sum){ //acc is acc varaible
    return acc*sum;
}
 
var summation = numbers.reduce(add,0);
print(summation);

var multiplications = numbers.reduce(mul,1);
print(multiplications);

//--------------------------------------------------------------------------------

