const os = require('os')
// infor about current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`the system Uptime is ${os.uptime()} seconds`)

const curentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
}

console.log(curentOS)