"use strict";

var env = require("jsdom").env,
    assert = require("chai").assert,
    express = require("express"),
    app = express();

describe("Test", function () {
    var listener;
    before(function (done) {
        app.use(express.static("public"));

        listener = app.listen(0, function () {
            done();
        });
    });

    it("if solves puzzle", function (done) {
        env({
            url: "http://127.0.0.1:" + listener.address().port + "/index.html",
            features: {
                FetchExternalResources: ['script'],
                ProcessExternalResources: ['script']
            },
            done: function (errors, window) {
                var $ = require("jquery")(window);

                $("#btnSolve").click();
                $(window.sudoku.cells).each(function () {
                    assert.notEqual("", $(this).html());
                });
                console.log($("body").html());
                done();
            }
        });
    });
});