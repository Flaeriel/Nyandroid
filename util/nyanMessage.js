const Discord = require('discord.js')

const replyM = require('./replyMessages.json')
const errorM = require('./errorMessages.json')
const NYA = ", nya!"

const respond = (message, type) => {
    switch (type) {
        case 'hello':
            return message.channel.send(replyM.hello.replace("AUTHOR", message.author)+NYA)
        case 'purr':
            return message.channel.send(replyM.purr)
        case 'sleep':
            return message.channel.send(replyM.sleep.replace("AUTHOR", message.author))
        case 'help':
            return message.channel.send(replyM.help)
    }
}

const diceResult = (message, item, dice, droll) => {
    const nyanEmbed = new Discord.MessageEmbed()
        .setColor('#FFBE26')
        .setTitle(`ROLLS ${item}`)
        .setDescription(`**:game_die:  ${droll.rolls.join(' ')}**`)
    if (dice.mod !== null) {
        nyanEmbed.addField(`Modifier`, `${dice.opr}${dice.mod}`)
    }
    if (dice.stuntDie) {
        let stunt = droll.stunt === true ? '*- stunt!*' : ''
        nyanEmbed.addField(`Stunt Die`, `${droll.rolls[2]} ${stunt}`)
    }
    if (dice.count > 1 || dice.mod !== null) {
        nyanEmbed.addField(`Total`, droll.total)
    }
    return message.channel.send(nyanEmbed)
}

const errMessage = err => {
    // no break needed because of return
    switch(err) {
        case 'UnknownCommand':
            return errorM.UnknownCommand+NYA
        case 'NoArguments':
            return errorM.NoArguments+NYA
        case 'PatternMatchError':
            return errorM.PatternMatchError+NYA
        case 'DiceModError':
            return errorM.DiceModError+NYA
        case 'DiceSizeError':
            return errorM.DiceSizeError+NYA
        case 'DiceCountError':
            return errorM.DiceCountError+NYA
        default:
            return errorM.DefaultError+NYA
    }
}

/**
 *  Based on the OWO Chrome extension by leafysweetsgarden
 *  @returns owoified text
 */
const owoify = str => {
  str = str.replace(/(?:r|l)/g, "w")
  str = str.replace(/(?:R|L)/g, "W")
  str = str.replace(/n([aeiou])/g, 'ny$1')
  str = str.replace(/N([aeiou])/g, 'Ny$1')
  str = str.replace(/N([AEIOU])/g, 'Ny$1')
  str = str.replace(/(ja)/g, "nya")
  str = str.replace(/(Ja)/g, "Nya")
  str = str.replace(/ove/g, "uv")
  return str
}

module.exports = {
    respond,
    diceResult,
    errMessage,
    owoify
}
