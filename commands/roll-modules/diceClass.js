/*
    The most basic dice rolling functionality of the Nyandroid
    It handles simple dice rolls like 1d6, 1d20 or even non-existing dice like 1d13
*/
const { DiceSizeError, DiceCountError } = require('../function-modules/errorHandler');

class DiceClass {
    // Setting up the base values
    // count = the amount of dice
    // size = the size of the dice
    constructor(count, size) {
        this.count = new Number(count);
        this.size = new Number(size);
        this.modifier = false;
        this.rolls = [];
    }
    // A randomizer function that outputs a positive integer value between 1 and (size)
    rand() {
        if (this.size > 0) {
            return Math.floor(Math.random() * this.size + 1);
        } else {
            throw new DiceSizeError();
            //throw "Size <= 0 Error!";
        }
    }
    // This is were dice are rolled
    // Dice rolls are saved in an array (dice) and added together under (sum)
    // + Handling issues with either too little or too many dice being rolled at once
    roll() {
        if (this.count > 0 && this.count <= 50) {
            //let dice = [];
            //let sum = 0;
            for (let i = 0; i < this.count; i++) {
                let rnd = this.rand();
                //sum += rnd;
                this.rolls.push(rnd);
            }
            //return { dice, sum };
            return this.rolls;
        } else if (this.count > 50 || this.count <= 0) {
            throw new DiceCountError();
        }
    }
    // adds rolled dice together
    add_up() {
        let total = 0;
        for (let die of this.rolls) {
            total += die;
        }
        return total;
    }

}

// Exporting the DiceClass
module.exports = DiceClass;
