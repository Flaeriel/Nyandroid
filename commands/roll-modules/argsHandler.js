const PATTERN = require('./pattern');
const EXPR = PATTERN.expr;

class ArgsHandler {
    // matches input string to preset regex patterns
    match(str) {
        let expr = EXPR.find(EXPR => EXPR.pattern.test(str));
        if (expr) {
            return expr;
        } else {
            throw "No Match Error";
        }
    }
    // splits input string based on regex pattern
    split(str, regex) {
        return str.split(regex);
    }
}

// exporting the ArgsHandler
module.exports = ArgsHandler;
