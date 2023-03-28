const argv = require('yargs').option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'get the number to multiply',
    type: 'number'
}).option('l',{
    alias:'list',
    demandOption:false,
    describe:'print table on console', 
    type:'boolean', 
    default:false
}).option('t',{
  alias:'to',
  demandOption:false,
  describe:'do the table count until some specific number', 
  type:'number', 
  default:10
}).check((argv, options) => {
    const base = argv.b
    const to = argv.t; 
    if (isNaN(base) || isNaN(to)) {
      throw new Error("Base must be a number"); 
    } else {
      return true; 
    }
  }).argv


  module.exports = argv; 