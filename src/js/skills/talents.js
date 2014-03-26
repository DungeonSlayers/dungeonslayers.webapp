define('skills/talents', ['data'], function (data) {

    'use strict';

    return {

        init: function () {

            var hash = {};

            function add(id, data) {
                var node = $('<tr>').attr('data-id', id);

                //create node
                node.append(
                    $('<td>').text(data.name),
                    $('<td class="level">').text(''),
                    $('<td class="max">').text(''),
                    $('<td>').text(data.compact || ''),
                    $('<td>').text(data.details)
                );

                //separate items dom
                $('.data-talents tbody').append(node);
            }

            data.getTalents().then(
                function (data) {
                    $.each(data, function (id, value) {
                        add(id, value);
                    });

                    $('.data-talents').tablesorter({
                        sortList: [[0, 0]]
                    });
                }
            );

            function fill(id) {
                var cl = $('#talent-class'),
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
                        $('#talent-level').append(
                            $('<option>')
                                .attr('label', i)
                                .attr('value', i)
                                .attr('selected', i === 1 ? 'true' : undefined)
                        );
                    }

                    var filterTalents = function () {
                        var level = $('#talent-level option:selected').attr('value'),
                            cls = $('#talent-class option:selected').attr('value'),
                            data = hash[cls].talents;

                        $('.data-talents tr[data-id]').hide();
                        _.each(data, function (item, key) {
                            if (item.prequisite <= level) {
                                var tr = $('.data-talents').find('[data-id="' + key + '"]');
                                tr.find('.level').text(item.prequisite);
                                tr.find('.max').text(item.max);
                                tr.show();
                            }
                        });
                    };

                    $('#talent-class').on('change', filterTalents);
                    $('#talent-level').on('change', filterTalents);
                }
            );
        }
    };

});
