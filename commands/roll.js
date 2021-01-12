const DiceClass = require('./roll-modules/diceClass');
const DiceModClass = require('./roll-modules/diceModClass');
const args_handler = require('./roll-modules/argsHandler');
const response = require('./function-modules/response.js');

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        let call = args_handler.diceMatch(args[0]);
        let splits = args_handler.diceSplit(args[0], call.pattern);
        console.log(call);

        if (args.length > 1) {
            response.ignore(message, args);
        }

        if (call.name === 'calc') {
            throw "Calc Not Implemented Error!";

        } else if (call.name === 'dice_mod') {
            let dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4]);
            console.log(dice);
            let result = dice.roll();
            console.log(result);
            return response.dice_result(message, result, dice);
            //return message.channel.send(`Rolls: **${result.dice}** ${dice.operator} ${dice.modifier} = **${result.sum}**`);

        } else if (call.name === 'dice') {
            let dice = new DiceClass(splits[1], splits[2]);
            console.log(dice);
            let result = dice.roll();
            console.log(result);
            return response.dice_result(message, result, dice);
            //return message.channel.send(`Rolls: **${result.dice}** = **${result.sum}**`);
        }

    },

};
