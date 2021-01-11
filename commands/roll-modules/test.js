const ArgsHandler = require('./argsHandler.js');

let inp = ['1d6+1', '2d6', '20-2', 'nyan'];
try {
    let handler = new ArgsHandler(inp);
    for (let i in inp) {
        let foo = handler.match(inp[i]);

        console.log(`${inp[i]} :: ${foo.name}`);
        console.log(handler.split(inp[i], foo.pattern));
        
    }
    
} catch (error) {
    console.error(error);
}
