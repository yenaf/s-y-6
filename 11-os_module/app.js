const os = require('os');
console.log(os);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`totalMemory : ${totalMemory}`);
console.log(`freeMemory : ${freeMemory}`);