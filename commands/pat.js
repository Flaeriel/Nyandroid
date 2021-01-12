const response = require('./function-modules/response.js');

module.exports = {
    name: 'pat',
    description: 'pat the nyandroid!',
    execute (message, args) {
        console.log('The Nyandroid was pat and is purring now!');
        return response.pat(message);
    },
};
