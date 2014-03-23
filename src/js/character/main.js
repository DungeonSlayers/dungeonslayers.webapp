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
            item.save(feedback, options);
        });

        //create/draw view
        itemView = view.create({
            model: item
        });

        itemView.render();
    };

    return {
        init: init
    };

});
