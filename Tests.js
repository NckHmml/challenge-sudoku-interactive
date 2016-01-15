"use strict";

var env = require("jsdom").env,
    assert = require("chai").assert,
    express = require("express"),
    app = express();

describe("Test", function () {
    var listener, $, window;
    before(function (done) {
        this.timeout(5000);
        app.use(express.static("public"));

        listener = app.listen(0, function () {
            env({
                url: "http://127.0.0.1:" + listener.address().port + "/index.html",
                features: {
                    FetchExternalResources: ['script'],
                    ProcessExternalResources: ['script']
                },
                done: function (errors, w) {
                    window = w;
                    $ = require("jquery")(window);
                    $("#btnSolve").click();
                    done();
                }
            });
        });
    });

    it("if puzzle is solved", function (done) {
        $(window.sudoku.cells).each(function () {
            assert.notEqual("", $(this).html());
        });
        done();
    });
});