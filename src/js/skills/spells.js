define('skills/spells', ['data'], function (data) {

    'use strict';

    return {

        init: function () {
            var hash = {};

            Opentip.styles.ds = {
                title: 'hover',
                showOn: 'mouseover',
                target: true,
                stem: false,
                tipJoint: 'right',
                group: 'tags',
                extends: 'dark' //glass
            };

            function add(id, data) {
                var node = $('<tr>').attr('data-id', id);
                //create node
                node.append(
                    $('<td class="details">').append(
                        $('<span class="glyphicon glyphicon-exclamation-sign">')
                    ),
                    $('<td class="name">').text(data.name),
                    $('<td class="compact">').text(data.compact || ''),
                    // $('<td class="level center">').text(''),
                    // $('<td class="max center">').text(''),
                    $('<td class="price center">').text(data.price),
                    $('<td class="bonus center">').text(data.bonus),
                    $('<td class="duration center">').text(data.duration),
                    $('<td class="cooldown center">').text(data.cooldown),
                    $('<td class="type center">').text(data.type)
                );

                 // Now create an Opentip for each tag element
                new Opentip(node.find('.details'), data.effect ? data.effect : data.compact, data.name, { style: 'ds' });

                //separate items dom
                $('.data-spells tbody').append(node);
            }
            data.getSpells().then(
                function (data) {
                    $.each(data, function (id, value) {
                        add(id, value);
                    });

                    $('.data-spells').tablesorter({
                        sortList: [[0, 0]]
                    });
                }
            );

            function fill(id) {
                var cl = $('#spell-class'),
                    data = hash[id];
                cl.append(
                    $('<option>')
                        .attr('label', data.name)
                        .attr('value', id)
                        .attr('selected', hash.lengt === 1 ? 'true' : undefined)
                );
            }

            data.getClasses().then(
                function (data) {
                    $.each(data, function (id, value) {
                        hash[id] = value;
                        fill(id);
                    });
                    for (var i = 1; i <= 20; i++) {
                        $('#spell-level').append(
                            $('<option>')
                                .attr('label', i)
                                .attr('value', i)
                                .attr('selected', i === 1 ? 'true' : undefined)
                        );
                    }

                    var filter = function () {
                        var level = $('#spell-level option:selected').attr('value'),
                            cls = $('#spell-class option:selected').attr('value'),
                            data = hash[cls].talents;

                        $('.data-spell tr[data-id]').hide();
                        _.each(data, function (item, key) {
                            if (item.prequisite <= level) {
                                var tr = $('.data-talents').find('[data-id="' + key + '"]');
                                tr.find('.level').text(item.prequisite);
                                tr.find('.max').text(item.max);
                                tr.show();
                            }
                        });
                    };

                    $('#spell-class').on('change', filter);
                    $('#spell-level').on('change', filter);
                }
            );
        }
    };

});
