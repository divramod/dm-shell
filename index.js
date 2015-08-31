var tasks = {};

// example
tasks.test = require("./tasks/test/index.js").start;

// automatically add tasks here
tasks.spawn = require("./tasks/spawn/index.js").start;

module.exports = tasks;
