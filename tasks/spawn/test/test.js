var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('spawnSync sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result = require('./../index.js').start();
        result.should.equal("spawnSync");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result = require('./../index.js').start();
        result.should.equal("falsespawnSync");
    });

});

// =========== [ dm-file TESTS ] ===========
describe.only('spawnSync async'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').start("ls");
        result.should.equal("spawnSync");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').start("ls");
        result.should.equal("falsespawnSync");
    });

});
