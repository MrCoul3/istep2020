// квадрат прямоуг треугольник
//params array
// name string
class Figure {
    name = ''
    constructor(params) {
        this.params = params;
    }

    getArea() {

    }



    get() {
        return this.name;
    }
}

class Square extends Figure {
    constructor(params) {
        super(params);
        this.name = 'Треугольник';
    }
    getArea() {
        //super.getArea();
        return this.params[0] ** 2;
    }
    getPerimeter() {
        return this.params[0] * 4;
    }
}

class Triangle extends Figure {
    constructor(params) {
        super(params);
        this.name = 'Треугольник';
    }

    getArea() {
        let height = this.getHeight(this.params[0], this.params[2]);
        return (height * this.params[0]) / 2;
    }

    getHeight(a, b) {
        return (a * b) / Math.sqrt((a ** 2 + b ** 2));
    }
    getPerimeter() {
        return this.params[0] + this.params[1] + this.params[2]
    }
}

let objSquare = new Square([2, 2, 2, 2]);
console.log(objSquare.getArea());
console.log(objSquare.get());

let objTriangle = new Triangle([1, 2, 3]);
console.log(objTriangle.getArea());

