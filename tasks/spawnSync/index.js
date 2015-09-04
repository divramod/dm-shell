// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(command) {
    try {
        process.env.debug = false; // for debugging purposes
        var command = command || process.argv[3] || undefined;
        return run();
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()

// =========== [ SYNC run ] ===========
var run = function(command) {
    try {
        console.log("start spawnSync");
        var command = command || process.argv[3] || undefined;
        var spawn = require('child_process').spawnSync;
        var myProcess = spawn('sh', ['-c', command], {
            stdio: 'inherit'
        });
        return "spawnSync";
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // run

// =========== [ ASYNC task.start() ] ===========
task.startAsync = co.wrap(function*(command) {
    try {
        process.env.debug = false; // for debugging purposes
        var command = command || process.argv[3] || undefined;
        var result =
            yield runAsync();
        return yield Promise.resolve(result);
    } catch (e) {
        result.success = false;
        result.error = e;
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return yield Promise.resolve(e);
    }
}); // task.start()


// =========== [ ASYNC runAsync ] ===========
var runAsync = co.wrap(function*() {
    try {
        console.log("start spawnSync");
        return yield Promise.resolve("spawnSync");
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return yield Promise.resolve(e);
    }
}); // runAsync

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
