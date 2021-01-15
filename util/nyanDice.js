const { DiceSizeError, DiceCountError, DiceModificationError, PatternMatchError } = require('./nyanError')
const dicePattern = {
    expr: [
        {"name": "dice", "pattern": /^(\d+)[d](\d+)$/i },
        {"name": "dice_mod", "pattern": /^(\d+)[d](\d+)(\W)(\d+)$/i },
    ]
}
const EXPR = dicePattern.expr

// PATTERN HANDLER
// DICE MATCH
let diceMatch = str => {
    let expr = EXPR.find(EXPR => EXPR.pattern.test(str))
    if (expr) return expr
    else throw new PatternMatchError
}
// DICE SPLIT
let diceSplit = (str, regex) => str.split(regex)

// DUPLICATE DICE CHECKER
let diceDupl = dice => {
    for (let i = 1; i < dice.length; i++) {
        for (let j = 0; j < i; j++) {
            if(dice[i] === dice[j]) return true
        }
    }
    return false
}

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
        if (this.size > 0) return Math.floor(Math.random() * this.size + 1)
        else throw new DiceSizeError
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
        return this.rolls.reduce((total, die) => {return total + die}, 0)
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
        switch(this.operator) {
            case '+': return val + this.modifier; break
            case '-': return val - this.modifier; break
            default: throw new DiceModificationError
        }
    }
    add_up() {
        return this.modify(this.rolls.reduce((total, die) => {return total + die}, 0))
    }
}
class DiceClassAGE extends DiceClass {
    constructor() {
        super(3, 6)
        this.stuntDie = true
        this.stunt = false
    }
}
class DiceModClassAGE extends DiceModClass {
    constructor(operator, modifier) {
        super(3, 6, operator, modifier)
        this.stuntDie = true
        this.stunt = false
    }
}

module.exports = {
    diceMatch,
    diceSplit,
    diceDupl,
    DiceClass,
    DiceModClass,
    DiceClassAGE,
    DiceModClassAGE
}
