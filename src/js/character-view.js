define('character-view', ['character', 'character-model'], function (character, model) {

    'use strict';

    var addInput = function (name) {
        this.append(
           $('<div class="form-group attribute">').append(
                $('<label>').text(name),
                $('<input type="number" class="form-control" placeholder="0">').attr('id', name)
            )
        )
    }


    var ItemView = Backbone.View.extend({
        // name of tag to be created
        tagName: 'div',
        className: 'div',
        //ItemViews now respond to two clickable actions for each Item: swap and delete
        events: {
            'click span.swap': 'swap',
            'click span.delete': 'remove'
        },

        //initialize() now binds model change/removal to the corresponding handlers below.
        initialize: function() {
            // every function that uses 'this' as the current object should be in here
            _.bindAll(this, 'render', 'unrender', 'swap', 'remove');

            //this.model.bind('change', this.render);
            //this.model.bind('remove', this.unrender);
        },


        //render() now includes two extra spans corresponding to the actions swap and delete.
        render: function() {
            window.model = this.model;
            console.warn('render');
            var self = this,
                form = $('<form role="form">');

            addInput.call(form, 'body');
            addInput.call(form, 'mobility');
            addInput.call(form, 'mind');

            //model bind
            form.find('input').on('change', function (e) {
                var node = $(e.target);
                console.warn('change');
                e.preventDefault();
                self.model.set(node.attr('id'), node.val());
            });

            //DOM
            $(self.el).append(form);
            return self;
        },


        //unrender(): Makes Model remove itself from the DOM.
        unrender: function() {
            $(this.el).remove();
        },

        //swap() will interchange an Item's attributes. When the .set() model function is called, the event change will be triggered.
        swap: function() {
            var swapped = {
                part1: this.model.get('part2'),
                part2: this.model.get('part1')
            };
            this.model.set(swapped);
        },

        //remove(): We use the method destroy() to remove a model from its collection. Normally this would also delete the record from its persistent storage, but we have overridden that (see above).
        remove: function() {
            this.model.destroy();
        }
    });


    return {
        create: function (opt) {
            return new ItemView(opt);
        }
    }
});
