define('items/weapons', ['data'], function (data) {

    'use strict';

    return {

        init: function () {

            function add(data) {
                var node = $('<tr>');

                //create node
                node.append(
                    $('<td>').text(data.name),
                    $('<td class="center">').text(data.weaponbonus),
                    $('<td class="center">').text(data.initiative === 0 ? '' : data.initiative),
                    $('<td class="center">').text(data.opponentdefense === 0 ? '' : data.opponentdefense),
                    $('<td>').text(data.special)
                );

                 //colorize
                if (data.initiative < 0)
                    $(node.children()[2]).addClass('red');
                if (data.opponentdefense < 0)
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

            data.getWeapons().then(
                function (data) {
                    $.each(data, function (id, value) {
                        add(value);
                    });
                    $('.data-weapons').tablesorter({
                        sortList: [[0, 0]],
                        theme: 'bootstrap',
                        widthFixed: true,
                        headerTemplate: '{content} {icon}',
                        widgets : ['uitheme']
                    });
                    $('.data-ranged').tablesorter({
                        sortList: [[0, 0]],
                        theme: 'bootstrap',
                        widthFixed: true,
                        headerTemplate: '{content} {icon}',
                        widgets : ['uitheme']
                    });
                }
            );
        }
    };

});
