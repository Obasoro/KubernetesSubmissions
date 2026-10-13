const { randomUUID } = require('crypto');

const id = randomUUID(); // generated once on startup, held in memory

const log = () => console.log(`${new Date().toISOString()}: ${id}`);

log();
setInterval(log, 5000);
