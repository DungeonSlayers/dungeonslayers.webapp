require.config({
    paths: {
        'bootstrap': 'vendor/bootstrap',
    },
    shim: {
        'lodash': {
            exports: '_'
        }
    }
});

require(['character/main',
         'items/armor',
         'items/weapons',
         'skills/talents'], function (character, armor, weapons, talents) {

    'use strict';

    //on small screen sizes
    function register() {
        $('#menu-toggle')
            .on('click', function (e) {
                e.preventDefault();
                $('#wrapper').toggleClass('active');
            });
    }

    //ready
    $(function () {
        register();
        character.init();
        armor.init();
        weapons.init();
        talents.init();
    });
});
