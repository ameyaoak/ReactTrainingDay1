class Point{ 
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return 'X = '+this.x+' Y = '+this.y;
    }
}


class ChildClass extends Point{     
    static default(){ //is static method
        return new ChildClass(0,0,'black');
    }

    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }

    toString(){
        return 'X = '+this.x+' Y = '+this.y+' Color'+this.color;
    }
}


function print(val){
    console.log(val);
}

var Point1 = new Point(1,1);
var ChildClass1 = new ChildClass(1,1,'green');


    print(Point1);
    print(ChildClass1);
    print(ChildClass.default());//static method call
