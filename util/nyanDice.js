const { randomInt } = require('crypto')

class DiceObject {
    constructor (count, size, opr = null, mod = null) {
        this.count = count > 0 && count < 500 ? +count : null
        this.size = size > 0 ? +size : null
        this.opr = opr && opr.match(/[+-]/) ? opr : null
        this.mod = mod && mod > 0 ? +mod : null
    }
    rollDice () {
        let rolls = []
        // get random numbers
        for (let i = 0; i < this.count; i++) {
            let rand = randomInt(this.size)+1
            rolls.push(rand)
        }
        // add up random numbers
        let total = rolls.reduce((res, die) => {
            return res + die
        }, 0)
        // modify total
        if (this.opr) {
            total += this.opr == '+' ? this.mod : -this.mod
        }
        // return result
        return { rolls, total }
    }
    get roll() { return this.rollDice() }
}

class DiceObjectAGE extends DiceObject {
    constructor (opr, mod) {
        super(3, 6, opr, mod)
        this.stuntDie = true
    }
    rollAGE() {
        // roll dice
        let { rolls, total } = this.rollDice()
        let stunt = false
        // check for duplicates === stunt
        for (let i = 1; i < this.count; i++) {
            for (let j = 0; j < i; j++) {
                if(rolls[i] === rolls[j]) stunt = true
            }
        }
        // return result
        return { rolls, total, stunt }
    }
    get roll() { return this.rollAGE() }
}

let diceMatch = (str, patternList) => {
    for(const item of patternList) {
        let expr = new RegExp(item.pattern, 'i')
        let match = str.match(expr)
        if(match) {
            match[0] = item.name
            return match
        }
    }
    return null
}

function dicePick(match) {
    if(match) {
        switch(match[0]) {
            case 'dice_mod':
                return new DiceObject(match[1], match[2], match[3], match[4])
            case 'dice':
                return new DiceObject(match[1], match[2])
            case 'age':
                return new DiceObjectAGE(match[1],match[2])
        }
    }
    return null
}

module.exports = {
    //DiceObject,
    //DiceObjectAGE,
    diceMatch,
    dicePick
}
