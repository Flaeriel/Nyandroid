const hello = message => message.channel.send(`Hello ${message.author}, nya!`)
const pat = message => message.channel.send(`Purr!`)
const sleep = message => message.channel.send(`Sleep well ${message.author}, nyawwn...`)

const diceResult = (message, total, dice) => {
    if (dice.modifier === false) {
        if (dice.count > 1) {
            return message.channel.send(`Rolls: **${dice.rolls}** = **${total}**`)
        } else {
            return message.channel.send(`Rolls: **${dice.rolls}**`)
        }
    } else {
        return message.channel.send(`Rolls: **${dice.rolls}** ${dice.operator} ${dice.modifier} = **${total}**`)
    }
}

module.exports = {
    hello,
    pat,
    sleep,
    diceResult
}
