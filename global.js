var co = require("co");
var jobs = {};

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ example ] ===========
        if (["example"].indexOf(argv2) > -1) {
          var task = require("./tasks/example/index.js");
            yield task.start();
        }

        // =========== [ spawn ] ===========
        else if (['spawn'].indexOf(argv2) > -1) {
            var task = require("./tasks/spawn/index.js");
            yield task.start();
        }

        // automatically add tasks here

        // =========== [ spawnAsync ] ===========
        else if (['spawnAsync'].indexOf(argv2) > -1) {
            var task = require("./tasks/spawnAsync/index.js");
            task.start();
        }
        // =========== [ spawnSync ] ===========
        else if (['spawnSync','ss'].indexOf(argv2) > -1) {
            var task = require("./tasks/spawnSync/index.js");
            task.start();
        }

        // =========== [ help ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
