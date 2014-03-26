define('character/main', ['character/model', 'character/view'], function (model, view) {

    'use strict';

    /**
     * Overrides persistence storage with dummy function. This enables use of Model.destroy() without raising an error.
     */
    // Backbone.sync = function (method, model, success, error) {
    //     console.log('SYNC');
    //     success();
    // }
    var init = function () {

        var Item = model.get(),
            //init item and view
            item,
            itemView,
            //collection
            List = Backbone.Collection.extend({
                model: Item,
                localStorage: new Backbone.LocalStorage('characters')
            }),
            list = new List();

        //localstorage
        list.fetch();

        //singleton
        //TODO: use collection as it's supposed to
        if (list.models.length) {
            list.models.forEach(function (model) {
                item = model;
            });
        } else {
            item = model.create();
            list.add(item);
        }

        var showErrors = function (errors) {
                _.each(errors, function (error) {
                    var controlGroup = this.$('.' + error.name);
                    controlGroup.addClass('error');
                    controlGroup.find('.help-inline').text(error.message);
                }, this);
            },
            hideErrors = function () {
                this.$('.control-group').removeClass('error');
                this.$('.help-inline').text('');
            };


        var options = {
            success: function () {
                hideErrors();
            },
            error: function (model, errors) {
                showErrors(errors);
            }
        };

        var horst = function () {
        };
        var feedback = {
            email: horst,
            website:  horst,
            feedback: horst
        };

        //register save
        item.on('change', function () {
            console.warn('Save');
            //item.save(feedback, options);
        });

        //create/draw view
        itemView = view.create({
            model: item
        });

        //change a 'battlevalue' value and animate
        var change = function (id, value) {
            var node = $('#' + id),
                fieldval = $('#' + id).text(),
                current = parseFloat(fieldval === '' ? 0 : fieldval, 10),
                color = current > value ? 'red' : 'green';
            node.text(value).finish();
            //animate
            if (current !== value && current !== 0) {
                node.css('color', color)
                    .animate({fontSize: '20px'})
                    .animate({fontSize: '12px'})
                    .animate({fontSize: '16px'})
                    .animate({fontSize: '16px'}, function () {
                        $(this).css('color', 'black');
                    });
            }
        };

        //calculate 'battlevalues'
        var calc = function () {
            var hp = item.get('body') + item.get('constituation') + 10;
            change('hit-points', hp);

            var defense = item.get('body') + item.get('constituation');
            change('defense', defense);

            var initiative = item.get('agility') + item.get('mobility');
            change('initiative', initiative);

            var mr = (item.get('mobility') / 2) + 1;
            change('movement-rate', mr);

            var melee = item.get('body') + item.get('strength');
            change('melee-attack', melee);

            var ranged = item.get('body') + item.get('dexterty');
            change('ranged-attack', ranged);

            var spellcasting = item.get('mind') + item.get('aura');
            change('spellcasting', spellcasting);

            var ts = item.get('body') + item.get('dexterty');
            change('targeted-spellcasting', ts);
        };

        //recalculate on change
        item.on('change', calc);

        //draw
        itemView.render();

        //initally calculate
        calc();
    };

    return {
        init: init
    };

});
