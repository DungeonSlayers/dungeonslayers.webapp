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
         'skills/talents',
         'skills/spells'], function (character, armor, weapons, talents, spells) {

    'use strict';

    //on small screen sizes
    function register() {
        $('#menu-toggle')
            .on('click', function (e) {
                e.preventDefault();
                $('#wrapper').toggleClass('active');
            });

        //hide content on nav click
        $('.sidebar-nav').delegate('.navigation', 'click', function (e) {
            var node = $(e.target),
                section = node.attr('data-section-target');
            $('.section').hide();
            $('[data-section="' + section + '"]').show();
            $(window).scrollTop(0);
        });

    }

    //ready
    $(function () {
        register();
        character.init();
        armor.init();
        weapons.init();
        talents.init();
        spells.init();
    });
});
