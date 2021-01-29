const { nyanDice, nyanMessage, dicePattern } = require('../util')
const diceMatch = nyanDice.diceMatch
const dicePick = nyanDice.dicePick
const diceResult = nyanMessage.diceResult
const errMessage = nyanMessage.errMessage

let diceRoll = async (message, item) => {
    // match with patterns
    let dmatch = await diceMatch(item, dicePattern)
    // invalid input handling
    if(!dmatch) {
        await message.reply(errMessage('PatternMatchError'))
    } else if(dmatch[1] <= 0 || dmatch[1] > 500) {
        await message.reply(errMessage('DiceCountError'))
    } else if(dmatch[2] <= 0) {
        await message.reply(errMessage('DiceSizeError'))
    } else {
        // rolling dice
        let dice = await dicePick(dmatch)
        let droll = dice.roll
        return await diceResult(message, item, dice, droll)
    }
}

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr', 'rolls'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        args.forEach((item) => {
            diceRoll(message, item)
        })
    },
};
