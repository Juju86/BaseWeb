var fs = require('fs');
var less = require('less');
var extend = require('./extend');
var colorize = require('./colorize');

var defaultOptions = {
    depends: false,
    compress: false,
    yuicompress: false,
    max_line_len: -1,
    optimization: 1,
    silent: false,
    verbose: false,
    lint: false,
    paths: [],
    color: true,
    strictImports: false,
    rootpath: '',
    relativeUrls: false,
    ieCompat: true,
    strictMath: false,
    strictUnits: false
};

var parse = function(input, options, callback) {
    fs.readFile(input, 'utf8', function(err, data) {
        if (err) throw new Error(colorize(err, 'red'));
        var parser = new(less.Parser)(options);
        parser.parse(data, function (err, tree) {
            if (err) {
                less.writeError(err, options);
                return;
            } else {
                callback(tree);
            }
        });
    });
};

var toCSS = function(tree, output, settings) {
    var css = tree.toCSS(settings);
    fs.writeFile(output, css, 'utf8', function(err) {
        if (err) throw new Error(colorize(err, 'red'));
        console.log(colorize('√ lessc: wrote ' + output, 'green'));
    });
};

desc('Parse a LESS file and write CSS to an output');
task('lessc', {async: true}, function(input, output, options) {
    var options = extend(defaultOptions, options);
    parse(input, options, function(tree) {
        try {
            if (typeof output === 'string') {
                toCSS(tree, output);
            } else {
                toCSS(tree, output[0]);
                toCSS(tree, output[1], {compress: true});
            }
        } catch (err) {
            less.writeError(err, options);
            return;
        }
    });
});
