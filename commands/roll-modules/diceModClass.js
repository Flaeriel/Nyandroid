/*
    A dice roller that allows for an added modifier
*/
const DiceClass = require("./DiceClass");

class DiceModClass extends DiceClass {
    // Setting up the base values
    // operator = either + or -
    // modifier = a value that will be added or subtracted from the dice roll
    constructor(count, size, operator, modifier) {
        super(count, size);
        this.operator = operator;
        this.modifier = new Number(modifier);
    }
    // This will modify a value
    modify(val) {
        if (this.operator === '+') {
            return val + this.modifier;
        } else if (this.operator === '-') {
            return val - this.modifier;
        } else if (!this.operator) {
            return val;
        } else {
            throw "Modification Error!";
        }
    }
    // Coundn't figure out yet how to modify without having duplicate code
    roll() {
        if (this.count > 0 && this.count <= 50) {
            let dice = [];
            let sum = 0;
            for (let i = 0; i < this.count; i++) {
                let rnd = this.rand();
                sum += rnd;
                dice.push(rnd);
            }
            sum = this.modify(sum);
            return { dice, sum };
        } else if (this.count > 50) {
            throw "Too Many Dice Error!";
        } else {
            throw "Count <= 0 Error!";
        }
    }
}

// Exporting the DiceModClass
module.exports = DiceModClass;
