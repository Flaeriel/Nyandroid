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

module.exports = {
    hello,
    pat,
    sleep,
    diceResult
}
