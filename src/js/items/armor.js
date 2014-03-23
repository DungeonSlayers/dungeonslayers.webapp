define('items/armor', ['data'], function (data) {

    'use strict';

    return {

        init: function () {

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

            data.getArmor().then(
                function (data) {
                    $.each(data, function (id, value) {
                        add(value);
                    });
                    $('.data-armor').tablesorter({
                        sortList: [[0, 0]]
                    });
                }
            );
        }
    };

});
