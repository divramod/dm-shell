// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ task.start() ] ===========
task.start = co.wrap(function*(command) {
    try {
        console.log(command);
        var command = command || process.argv[3] || undefined;
        var spawn = require('child_process').spawnSync;
        var myProcess = spawn('sh', ['-c', command], {
            stdio: 'inherit'
        });
        var exit = undefined;
        var data = undefined;
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve(myProcess);
}); // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;

//console.log(myProcess);
//console.log("myProcess.pid", myProcess.pid);
//console.log("myProcess.output", myProcess.output);
//console.log("myProcess.stdout", myProcess.stdout);
//console.log("myProcess.stderr", myProcess.stderr);
//console.log("myProcess.status", myProcess.status);
//console.log("myProcess.signal", myProcess.signal);
//console.log("myProcess.error", myProcess.error);

// http://stackoverflow.com/questions/15515549/node-js-writing-a-function-to-return-spawn-stdout-as-a-string
// http://stackoverflow.com/questions/14458508/node-js-shell-command-execution
// https://gist.github.com/pguillory/729616
