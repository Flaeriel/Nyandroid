const { nyanDice, nyanMessage, nyanError, dicePattern } = require('../util')
const diceMatch = nyanDice.diceMatch
const dicePick = nyanDice.dicePick
const diceResult = nyanMessage.diceResult
const PatternMatchError = nyanError.PatternMatchError
const DiceCountError = nyanError.DiceCountError
const DiceSizeError = nyanError.DiceSizeError

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr', 'rolls'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        args.forEach((item) => {

            let dmatch = diceMatch(item, dicePattern)
            // invalid input handling
            if(!dmatch) throw new PatternMatchError
            if(dmatch[1] <= 0) throw new DiceCountError
            if(dmatch[2] <= 0) throw new DiceSizeError

            // rolling dice
            let dice = dicePick(dmatch)
            let droll = dice.roll
            diceResult(message, item, dice, droll)

            //console.log(dice)
            //console.log(droll)
        })
    },
};
