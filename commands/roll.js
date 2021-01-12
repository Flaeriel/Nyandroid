const { nyanDice, nyanMessage, nyanError } = require('../util')
const DiceClass = nyanDice.DiceClass
const DiceModClass = nyanDice.DiceModClass
const diceMatch = nyanDice.diceMatch
const diceSplit = nyanDice.diceSplit
const diceResult = nyanMessage.diceResult


module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        let collect = []
        for (let i = 0; i < args.length; i++) {
            let call = diceMatch(args[i])
            let splits = diceSplit(args[i], call.pattern)
            if (call.name === 'dice' || call.name === 'dice_mod' ) {
                let dice
                if (call.name === 'dice_mod') {
                    dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4])
                } else if (call.name === 'dice') {
                    dice = new DiceClass(splits[1], splits[2])
                }
                let total = dice.add_up(dice.roll())
                // logging the dice object
                console.log(dice)
                collect.push(diceResult(message, total, dice))
            }
        }
        return collect;
    },
};
