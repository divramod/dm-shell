// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ VAR ] ===========
var task = {};

// =========== [ ASYNC task.start() ] ===========
task.start = co.wrap(function*(commnand) {
    try {
        process.env.debug = false; // for debugging purposes
        var commnand = commnand || process.argv[3] || undefined;
        var result =
            yield runAsync(commnand);

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
var runAsync = co.wrap(function*(commnand) {
    try {
        console.log("start spawnAsync");
        var spawn = require('child_process').spawn,
            grep = spawn('grep', ['ssh']);

        grep.stdout.on('data', function(data) {
            console.log('' + data);
        });

        grep.stderr.on('data', function(data) {
            console.log('grep stderr: ' + data);
        });

        var close = undefined;
        grep.on('close', function(code) {
            if (code !== 0) {
                console.log('grep process exited with code ' + code);
            }
            close = code;
        });

        for (var i = 0, l = 2; i < l; i++) {
            var v = 2[i];
            console.log(close);
            if (close) {
                i = 2;
            } else {
                i--;
            }
        }
        return yield Promise.resolve(commnand);
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return yield Promise.resolve(e);
    }
}); // runAsync

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
