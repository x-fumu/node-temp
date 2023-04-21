 // CommonJS, every file is a module (by default)
// Modules - Encapsulate Code (only share minimum)
const names = require('./names')
const sayHi = require('./Hi-function')





sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

