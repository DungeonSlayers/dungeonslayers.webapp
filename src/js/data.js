define('data', [], function () {

    'use strict';

    var BASE = 'https://rawgithub.com/DungeonSlayers/dungeonslayers.json/master/data-min/deu/',
        data = {},
        get = function (id) {
            var def = $.Deferred();

            if (!data[id]) {
                //server
                $.getJSON(BASE + id + '.min.json', function (response) {
                    data[id] = response[id] ? response[id] : response;
                    def.resolve(data[id]);
                });
            } else {
                //var
                def.resolve(data[id]);
            }
            return def;
        };

    return {
        getClasses: function () {
            return get('classes');
        },
        getTalents: function () {
            return get('talents');
        },
        getSpells: function () {
            return get('spells');
        },
        getWeapons: function () {
            return get('weapons');
        },
        getArmor: function () {
            return get('armor');
        }
    };

});
