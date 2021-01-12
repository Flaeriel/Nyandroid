const { PatternMatchError } = require('../function-modules/errorHandler');
const PATTERN = require('./pattern');
const EXPR = PATTERN.expr;

function diceMatch(str) {
    let expr = EXPR.find(EXPR => EXPR.pattern.test(str));
    if (expr) {
        return expr;
    } else {
        throw new PatternMatchError();
    }
}
function diceSplit(str, regex) {
    return str.split(regex);
}

// exporting the ArgsHandler
module.exports = { diceMatch, diceSplit };
