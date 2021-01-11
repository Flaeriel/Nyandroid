const PATTERN = require('./pattern');
const EXPR = PATTERN.expr;

module.exports = function () {
    this.match = function (str) {
        let expr = EXPR.find(EXPR => EXPR.pattern.test(str));
        if (expr) { 
            return expr;
        } else {
            throw "No Match Error";
        }
    }
    
    this.split = function (str, regex) {
        return str.split(regex);
    }
    
}
