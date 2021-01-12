/*
    The most basic dice rolling functionality of the Nyandroid
    It handles simple dice rolls like 1d6, 1d20 or even non-existing dice like 1d13
*/
class DiceClass {
    // Setting up the base values
    // count = the amount of dice
    // size = the size of the dice
    constructor(count, size) {
        this.count = new Number(count);
        this.size = new Number(size);
        this.modifier = false;
    }
    // A randomizer function that outputs a positive integer value between 1 and (size)
    rand() {
        if (this.size > 0) {
            return Math.floor(Math.random() * this.size + 1);
        } else {
            throw "Size <= 0 Error!";
        }
    }
    // This is were dice are rolled
    // Dice rolls are saved in an array (dice) and added together under (sum)
    // + Handling issues with either too little or too many dice being rolled at once
    roll() {
        if (this.count > 0 && this.count <= 50) {
            let dice = [];
            let sum = 0;
            for (let i = 0; i < this.count; i++) {
                let rnd = this.rand();
                sum += rnd;
                dice.push(rnd);
            }
            return { dice, sum };
        } else if (this.count > 50) {
            throw "Too Many Dice Error!";
        } else {
            throw "Count <= 0 Error!";
        }
    }

}

// Exporting the DiceClass
module.exports = DiceClass;
