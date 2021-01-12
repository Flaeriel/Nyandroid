const { DiceSizeError, DiceCountError, DiceModificationError, PatternMatchError } = require('./nyanError')
const dicePattern = {
    expr: [
        {"name": "dice", "pattern": /^(\d+)[d](\d+)$/ },
        {"name": "dice_mod", "pattern": /^(\d+)[d](\d+)(\W)(\d+)$/},
    ]
}
const EXPR = dicePattern.expr

// PATTERN HANDLER
// DICE MATCH
let diceMatch = str => {
    let expr = EXPR.find(EXPR => EXPR.pattern.test(str));
    if (expr) {
        return expr;
    } else {
        throw new PatternMatchError();
    }
}
// DICE SPLIT
let diceSplit = (str, regex) => str.split(regex)


// DICE CLASSES
// BASIC
class DiceClass {
    constructor(count, size) {
        this.count = new Number(count)
        this.size = new Number(size)
        this.modifier = false
        this.rolls = []
    }
    rand() {
        if (this.size > 0) {
            return Math.floor(Math.random() * this.size + 1);
        } else {
            throw new DiceSizeError();
        }
    }
    roll() {
        if (this.count > 0 && this.count <= 50) {
            for (let i = 0; i < this.count; i++) {
                let rnd = this.rand()
                this.rolls.push(rnd)
            }
            return this.rolls
        } else if (this.count > 50 || this.count <= 0) {
            throw new DiceCountError
        }
    }
    add_up() {
        let total = 0;
        for (let die of this.rolls) {
            total += die
        }
        return total
    }
}
// MODIFY
class DiceModClass extends DiceClass {
    constructor(count, size, operator, modifier) {
        super(count, size)
        this.operator = operator
        this.modifier = new Number(modifier)
    }
    modify(val) {
        if (this.operator === '+') {
            return val + this.modifier;
        } else if (this.operator === '-') {
            return val - this.modifier;
        } else if (!this.operator) {
            return val;
        } else {
            throw new DiceModificationError();
        }
    }
    add_up() {
        let total = 0
        for (let die of this.rolls) {
            total += die
        }
        return this.modify(total)
    }
}

module.exports = {
    diceMatch,
    diceSplit,
    DiceClass,
    DiceModClass
}
