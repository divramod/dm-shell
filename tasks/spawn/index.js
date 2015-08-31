// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ task.start() ] ===========
task.start = co.wrap(function*(command) {
    try {
        var command = command || process.argv[3] || undefined;
        var spawn = require('child_process').spawnSync;
        var myProcess = spawn('sh', ['-c', command], {
            stdio: 'inherit'
        });

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve(myProcess);
}); // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
