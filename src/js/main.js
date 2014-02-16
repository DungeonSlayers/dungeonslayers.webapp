require.config({
    paths: {
        'bootstrap': 'vendor/bootstrap',
        // 'backbone': 'vendor/backbone',
        // 'lodash': 'vendor/lodash'
    },
    shim: {
        // 'backbone': {
        //     deps: ['lodash', 'jquery'],
        //     exports: 'backbone'
        // },
        'lodash': {
            exports: '_'
        }
    }
});


require(['character'], function () {

    'use strict';

    function register() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $('#wrapper').toggleClass('active');
        });
    }

    //add ARMOR
    function addArmor() {

        function add(data) {
            var $table = $('.data-armor tbody'),
                node = $('<tr>');

            //create node
            node.append(
                $('<td>').text(data.name),
                $('<td class="center">').text(data.armorvalue),
                $('<td class="center">').text(data.initiative),
                $('<td class="center">').text(data.movementrate),
                $('<td>').text(data.special)
            );

            //colorize
            if (data.initiative < 0)
                $(node.children()[2]).addClass('red');
            if (data.movementrate < 0)
                $(node.children()[3]).addClass('red');

            //dom
            $table.append(node);
        }

        $.getJSON('https://rawgithub.com/DungeonSlayers/dungeonslayers.json/master/data-min/deu/armor.min.json', function(data) {
            $.each(data.armor, function(id, value) {
                add(value);
              });
           $('.data-armor').tablesorter({
                sortList: [[0,0]]
            });
        });
    }

    //add WEAPONS
    function addWeapons() {

        function add(data) {
            var node = $('<tr>');

            //create node
            node.append(
                $('<td>').text(data.name),
                $('<td class="center">').text(data.weaponbonus),
                $('<td class="center">').text(data.initative),
                $('<td class="center">').text(data.opponentdefense),
                $('<td>').text(data.special)
            );

             //colorize
            if (data.initative < 0)
                $(node.children()[2]).addClass('red');
            if (data.opponentdefense > 0)
                $(node.children()[3]).addClass('red');

            //separate items dom
            if (typeof data.type === 'object') {
                $('.data-weapons tbody').append(node);
                $('.data-ranged tbody').append(node.clone());
            } else if (data.type === 'melee') {
                $('.data-weapons tbody').append(node);
            } else {
                $('.data-ranged tbody').append(node);
            }
        }

        $.getJSON( 'https://rawgithub.com/DungeonSlayers/dungeonslayers.json/master/data-min/deu/weapons.min.json', function(data) {
            $.each(data.weapons, function(id, value) {
                add(value);
            });
            //$('.data-weapons').tablesorter();

             $('.data-weapons').tablesorter({
                sortList: [[0,0]]
              });
            $('.data-ranged').tablesorter({
                sortList: [[0,0]]
            });
        });

    }


    $(document).ready(function() {
        register();
        addArmor();
        addWeapons();
    });

});
