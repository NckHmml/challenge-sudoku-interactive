var jsdom = require("jsdom"),
    fs = require("fs");

before(function (done) {
    jsdom.env({
        html: fs.readFileSync("./public/index.html", "utf-8"),
        resourceLoader: function (resource, callback) {
            console.log(resource.url.pathname);
            return callback(null,
                fs.readFileSync("./public/" + resource.url.pathname, "utf-8"));
        },
        features: {},
        done: function (errors, window) {
            global.window = window;
            window.$("#btnSolve").click();
            done();
        }
    });
});