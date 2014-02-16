define('character-model', ['character'], function (character) {

    'use strict';

   var Item = Backbone.Model.extend({
        defaults: {
            //attributes
            body: 0, //20, max 8
            mobility: 0,
            mind: 0,
            //traits
            strength: 0, //8, max 4
            constituation: 0,
            agility: 0,
            dexterty: 0,
            intellect: 0,
            aura: 0,
            //race
            race: '',
            racialbonus: '',
            racialability: '',
            //class
            classname: '',
            classbonus: ''
        }
    });

    return {
        create: function () {
           return Item;
        }
    };

});
