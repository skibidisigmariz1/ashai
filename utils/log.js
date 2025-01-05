const moment = require('moment-timezone');
const kleur = require('kleur');

const getTime = () => moment().tz('Asia/Manila').format('HH:mm:ss');

// Create logger with bold + color
const createLogger = (colorFn, prefix = '') => 
    (text) => console.log(kleur.bold(colorFn(`${prefix} » ${text}`)));

// Create plain logger without timestamp and prefix
const createPlainLogger = (colorFn) => 
    (text) => console.log(kleur.bold(colorFn(text)));

// Create error logger with [ Error ] prefix
const createErrorLogger = (colorFn) => 
    (text) => console.log(kleur.bold(colorFn(`Error » ${text}`)));

// Create warn logger with [ Warn ] prefix
const createWarnLogger = (colorFn) => 
    (text) => console.log(kleur.bold(colorFn(`Warn » ${text}`)));

// Set up the loggers using both bold and color
const log = {
    main: createLogger(kleur.blue),
    hm: createLogger(kleur.blue),
    plain: createPlainLogger(kleur.white),
    error: createErrorLogger(kleur.red),
    warn: createWarnLogger(kleur.yellow)
};

module.exports = log;