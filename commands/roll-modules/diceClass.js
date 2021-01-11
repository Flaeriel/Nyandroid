module.exports = function (splits) {
    this.count = new Number(splits[1]);
    this.size = new Number(splits[2]);
    
    this.rand = function() {
        if (this.size > 0) {
            return Math.floor(Math.random() * this.size + 1);
        } else { 
            throw "Size <= 0 Error!"; 
        }
    }
    this.roll = function () {
        if (this.count > 0 && this.count <= 50) {
            let dice = [];
            let sum = 0;
            for (i = 0; i < this.count; i++) {
                let rnd = this.rand();
                sum += rnd;
                dice.push(rnd);
            }
            return { dice, sum };
        } else if (this.count > 50) {
            throw "Too Many Dice Error!";
        } else {  
            throw "Count <= 0 Error!"; 
        } 
    }
    this.check = function () {
        console.log(this);
    }
};
