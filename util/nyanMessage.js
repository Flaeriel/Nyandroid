const Discord = require('discord.js')

const hello = message => message.channel.send(`Hello ${message.author}, nya!`)
const pat = message => message.channel.send(`Purr!`)
const sleep = message => message.channel.send(`Sleep well ${message.author}, nyawwn...`)

const diceResult = (message, item, total, dice) => {
    const nyanEmbed = new Discord.MessageEmbed()
        .setColor('#FFBE26')
        .setTitle(`ROLLS ${item}`)
        .setDescription(`**:game_die:  ${dice.rolls}**`)
    if (dice.modifier !== false) { nyanEmbed.addField(`Modifier`, `${dice.operator}${dice.modifier}`) }
    if (dice.count > 1 || dice.modifier !== false) { nyanEmbed.addField(`Total`, total) }
    return message.channel.send(nyanEmbed)
}

const errMessage = (err) => {
    // no break needed because of return
    switch(err) {
        case 'PatternMatchError':
            return "couldn't find a matching pattern"
        case 'DiceModificationError':
            return "this is not a valid dice modifier"
        case 'DiceSizeError':
            return "dice like this do not exist"
        case 'DiceCountError':
            return "I'm not going to roll that many dice"
        default:
            return "Something went wrong"
    }
}

module.exports = {
    hello,
    pat,
    sleep,
    diceResult,
    errMessage
}
