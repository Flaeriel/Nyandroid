// require the winston logger module
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const nyanFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// create a logger
const logger = createLogger({
	transports: [
		new transports.Console(),
	],
    format: combine(
        timestamp(),
        nyanFormat
    ),
})

module.exports = {
    logger
};
