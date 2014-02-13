module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
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


    //get font
    grunt.registerTask('default', ['curl-dir']);

};
