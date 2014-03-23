define('character/model', [], function () {

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
        },

        validate: function (attrs) {
            attrs = attrs;
            //TODO: enabel again when extending to character creation

            // var errors = [],
            //     node = $('.messages');

            // //reset
            // node.empty();
            // $('.form-group').removeClass('has-warning has-feedback');

            // var ATTRLIMIT = 8,
            //     ATTRPOINTS = 20,
            //     TRAITLIMIT = 4,
            //     TRAITPOINTS = 8;

            // //negative
            // var list = [];
            // _.each(attrs, function (value, key) {
            //     if (value < 0)
            //         list.push(key);
            // });
            // if (list.length > 0)
            //     errors.push({name: 'negative', message: 'no negative allowed', invalid: list});


            // //max
            // if (attrs.body > ATTRLIMIT || attrs.mobility  > ATTRLIMIT || attrs.mind > ATTRLIMIT) {
            //     var invalid = [];
            //     if (attrs.body > ATTRLIMIT) invalid.push('body');
            //     if (attrs.mobility > ATTRLIMIT) invalid.push('mobility');
            //     if (attrs.mind > ATTRLIMIT) invalid.push('mind');

            //     errors.push({name: 'attribute_limit', message: 'Greater than 8', invalid: invalid});
            // }
            // //points
            // if (attrs.body + attrs.mobility + attrs.mind > ATTRPOINTS) {
            //     var invalid = [];
            //     invalid.push('body');
            //     invalid.push('mobility');
            //     invalid.push('mind');

            //     errors.push({name: 'available_attribute_points_limit', message: 'More points spend than 20', invalid: invalid});
            // }

            // //max
            // if (attrs.strength > TRAITLIMIT || attrs.constituation  > TRAITLIMIT || attrs.agility > TRAITLIMIT || attrs.dexterty > TRAITLIMIT || attrs.intellect  > TRAITLIMIT || attrs.aura > TRAITLIMIT) {
            //     var invalid = [];
            //     if (attrs.strength > TRAITLIMIT) invalid.push('strength');
            //     if (attrs.constituation > TRAITLIMIT) invalid.push('constituation');
            //     if (attrs.agility > TRAITLIMIT) invalid.push('agility');
            //     if (attrs.dexterty > TRAITLIMIT) invalid.push('dexterty');
            //     if (attrs.intellect > TRAITLIMIT) invalid.push('intellect');
            //     if (attrs.aura > TRAITLIMIT) invalid.push('aura');

            //     errors.push({name: 'trails_limit', message: 'Greater than ' + TRAITLIMIT, invalid: invalid});
            // }
            // //points
            // if (attrs.strength + attrs.constituation + attrs.agility + attrs.dexterty + attrs.intellect + attrs.aura > TRAITPOINTS) {
            //     var invalid = [];
            //     invalid.push('strength');
            //     invalid.push('constituation');
            //     invalid.push('agility');
            //     invalid.push('dexterty');
            //     invalid.push('intellect');
            //     invalid.push('aura');

            //     errors.push({name: 'available_trail_points_limit', message: 'More points spend than' + TRAITPOINTS, invalid: invalid});
            // }


            // //draw
            // if(errors.length > 0) {
            //     _.each(errors, function (err) {
            //         _.each(err.invalid, function (id) {
            //             $('#' + id).parent().addClass('has-warning');
            //         });

            //         node.append(
            //             $('<div class="alert bg-warning">').text(
            //                 err.name + ': ' + err.message
            //             )
            //         )

            //     })
            // }
            return false;
            //return errors.length > 0 ? errors : false;
        }
    });

    return {
        create: function () {
           return new Item();
        },
        get: function () {
           return Item;
        }
    };

});
