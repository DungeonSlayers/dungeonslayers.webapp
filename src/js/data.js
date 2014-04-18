define('data', [], function () {

    'use strict';

    var BASE = 'https://rawgit.com/DungeonSlayers/dungeonslayers.json/master/data-min/deu/',
        BASE_FALLBACK = 'data/',
        data = {},
        get = function (id, base) {
            var def = $.Deferred(),
                base = base || BASE;

            if (!data[id]) {
                //server
                $.getJSON(BASE + id + '.min.json', function (response) {
                    data[id] = response[id] ? response[id] : response;
                    def.resolve(data[id]);
                }).then(undefined, function () {
                    //fallback 
                    $.getJSON(BASE_FALLBACK + id + '.min.json', function (response) {
                        data[id] = response[id] ? response[id] : response;
                        def.resolve(data[id]);
                    });
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
