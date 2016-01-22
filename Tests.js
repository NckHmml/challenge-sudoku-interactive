"use strict";

var env = require("jsdom").env,
    assert = require("chai").assert;

describe("Test", function () {
    it("if puzzle is solved", function () {
        var sudoku = global.window.sudoku,
            $ = global.window.$;

        $(sudoku.cells).each(function () {
            assert.notEqual("", $(this).html());
        });
    });
});