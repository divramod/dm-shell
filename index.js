var tasks = {};

// example
tasks.example = require("./tasks/example/index.js").start;

// automatically add tasks here
tasks.spawnAsync = require("./tasks/spawnAsync/index.js").start;
tasks.spawnSync = require("./tasks/spawnSync/index.js").start;
tasks.spawn = require("./tasks/spawn/index.js").start;

module.exports = tasks;
