const { nyanDice, nyanMessage } = require('../util')
const DiceClass = nyanDice.DiceClass
const DiceModClass = nyanDice.DiceModClass
const diceMatch = nyanDice.diceMatch
const diceSplit = nyanDice.diceSplit
const diceResult = nyanMessage.diceResult

let diceRoll = (message, args) => {
    let collect = []
    args.forEach((item) => {
        let call, splits, dice, total
        call = diceMatch(item)
        splits = diceSplit(item, call.pattern)
        if (call.name === 'dice_mod') dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4])
        else if (call.name === 'dice') dice = new DiceClass(splits[1], splits[2])
        total = dice.add_up(dice.roll())
        console.log(dice)
        collect.push(diceResult(message, item, total, dice))
    })
    return collect
}

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr', 'rolls'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        return diceRoll(message, args)
    },
};
