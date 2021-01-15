const { nyanDice, nyanMessage, nyanLogger } = require('../util')
const DiceClass = nyanDice.DiceClass
const DiceModClass = nyanDice.DiceModClass
const DiceClassAGE = nyanDice.DiceClassAGE
const DiceModClassAGE = nyanDice.DiceModClassAGE
const diceMatch = nyanDice.diceMatch
const diceSplit = nyanDice.diceSplit
const diceResult = nyanMessage.diceResult
const logger = nyanLogger.logger

let diceRoll = (message, item) => {
    let call, splits, dice, total
    call = diceMatch(item)
    splits = diceSplit(item, call.pattern)

    if (call.name === 'dice_mod') dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4])
    else if (call.name === 'dice') dice = new DiceClass(splits[1], splits[2])

    total = dice.add_up(dice.roll())
    logger.log('info', `${item}: [${dice.rolls}] -> ${total}`)
    return diceResult(message, item, total, dice)
}

let diceRollAGE = (message, item) => {
    let dice, mod, opr, val, total
    mod = item.slice(3)
    opr = mod.slice(0,1).trim()
    if (!opr) dice = new DiceClassAGE
    else {
        val = new Number(mod.slice(1))
        dice = new DiceModClassAGE(opr, mod)
    }
    total = dice.add_up(dice.roll())
    logger.log('info', `${item}: [${dice.rolls}] -> ${total}`)
    return diceResult(message, item, total, dice)
}

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr', 'rolls'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        let collect = []
        args.forEach((item) => {
            if(item.match(/age(\W\d+)?/i)) {
                collect.push(diceRollAGE(message, item))
            } else {
                collect.push(diceRoll(message, item))
            }
        })
        return collect
    },
};
