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
    // adds rolled dice together and applies the modifier
    add_up() {
        let total = 0;
        for (let die of this.rolls) {
            total += die;
        }
        return this.modify(total);
    }
}

// Exporting the DiceModClass
module.exports = DiceModClass;
