"use strict";

class Rectangle {
    constructor(height, width, something) {
        this.height = height;
        this.width = width;
        this.something = something;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(4, 4);
console.log(square.calcArea());
console.log(square.something);

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;

    }

    showMyProperties() {
        console.log(`Color: ${this.bgColor}, text: ${this.text}`);
    }
}

const div = new ColoredRectangleWithText(10, 33, 'Hi mister', 'red');
div.showMyProperties();
console.log(div.calcArea());








