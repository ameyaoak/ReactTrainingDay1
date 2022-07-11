const color = 'red';

const point = {
    x:5,
    y:5,
    color,
    toString(){
        return "x = "+this.x+" y= "+this.y;
    },['prop_'+42]:42
}

 
    console.log(point);
    console.log("dynamic property"+prop_42);