module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
        'curl-dir': {
          'font' : [
            'http://img.dafont.com/dl/?f=woodstamp'
          ]
        },
        unzip: {
            font: 'font/?f=woodstamp'
        },
        clean: [
            'font/?f=woodstamp',
            'font/Readme.txt'
        ]
    });

    //http://www.elmastudio.de/typografie/schriften-mit-font-face-einbetten-so-funktionierts/

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //get font
    grunt.registerTask('init', ['curl-dir', 'unzip', 'clean']);

    grunt.registerTask('default', ['curl-dir']);

};
