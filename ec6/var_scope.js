function demo() {

    var x = 1;
    let y = 2;
    const z = 3;
    {
        var x = 100;
        let y = 200;
        const z = 300;

        console.log('x in block scope:', x);
        console.log('y in block scope:', y);
        console.log('z in block scope:', z);
    }
    console.log('-----------------------------');
    console.log('x in function scope:', x);
    console.log('y in function scope:', y);
    console.log('z in function scope:', z);


}
demo();