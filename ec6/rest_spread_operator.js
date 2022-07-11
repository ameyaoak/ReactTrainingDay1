var defaultColors = ['R','G','B'];
var customColors = ['Yellow','Black'];

var mergedColors = [...defaultColors,...customColors]; // spread operator
console.log(mergedColors);


function printColors(first,second,third,...other){//1st 3 var goes to 1st 3 vars and other params go to others var
    console.log("First : "+first+" Second : "+second+" Third : "+third+" Others : "+other);
}

printColors('R','G','B');
printColors('R','G','B','Y','P');