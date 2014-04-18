module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
        svgmin:  require('./tasks/svgmin.js'),
        clean: require('./tasks/clean.js'),
        copy: require('./tasks/copy.js'),
        cssmin: require('./tasks/cssmin.js'),
        htmlmin: require('./tasks/htmlmin.js'),
        jshint: require('./tasks/jshint.js'),
        manifest: require('./tasks/manifest.js'),
        smoosher: require('./tasks/smoosher.js'),
        uglify: require('./tasks/uglify.js'),
        uncss: require('./tasks/uncss.js'),
        'curl-dir': {
          'src/icons' : [
            //'http://game-icons.net/archives/svg/zip/game-icons.net.svg.zip',
            'http://game-icons.net/icons/lorc/originals/svg/archery-target.svg',
            'http://game-icons.net/icons/lorc/originals/svg/archery-target.svg',
            'http://game-icons.net/icons/lorc/originals/svg/battle-axe.svg',
            'http://game-icons.net/icons/lorc/originals/svg/battered-axe.svg',
            'http://game-icons.net/icons/lorc/originals/svg/crossed-swords.svg',
            'http://game-icons.net/icons/lorc/originals/svg/stiletto.svg',
            'http://game-icons.net/icons/lorc/originals/svg/checked-shield.svg',
            'http://game-icons.net/icons/lorc/originals/svg/breastplate.svg',
            'http://game-icons.net/icons/lorc/originals/svg/mailed-fist.svg',
            'http://game-icons.net/icons/lorc/originals/svg/arrow-flights.svg',
            'http://game-icons.net/icons/lorc/originals/svg/broadhead-arrow.svg'
          ]
        }
    });

    //http://www.elmastudio.de/typografie/schriften-mit-font-face-einbetten-so-funktionierts/

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-smoosher');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-uncss');


    //get font
    grunt.registerTask('curl', ['curl-dir']);
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', [
        //check jss
        'jshint',
        //clean old build
        'clean',
        //copy root and img files
        'copy',
        //remove unused bootstrap styles
        //'uncss',
        //minify html/js/css
        'htmlmin',
        //'uglify',
        'cssmin',
        //add external js/css inline
        //'smoosher',
        //'clean:tmp',
        //create manifest file
        'manifest'
    ]);

};
