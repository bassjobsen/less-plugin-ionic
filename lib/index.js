var getIonicProcessor = require("./ionic-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginionic(options) {
    this.options = options;
};

LessPluginionic.prototype = {
    install: function(less, pluginManager) {
        var IonicProcessor = getIonicProcessor();
        pluginManager.addPreProcessor(new IonicProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginionic;

