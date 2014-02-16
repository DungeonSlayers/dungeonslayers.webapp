define('character', ['character-model', 'character-view'], function (model, view) {

    'use strict';

    /**
     * Overrides persistence storage with dummy function. This enables use of Model.destroy() without raising an error.
     */
    Backbone.sync = function (method, model, success, error) {
        console.log('SYNC');
        success();
    }

    var Item = model.create();

    var List = Backbone.Collection.extend({
        model: Item
    });

    //Because the new features (swap and delete) are intrinsic to each Item, there is no need to modify ListView.
    var ListView = Backbone.View.extend({
        el: $('.row.characters'),
        events: {
            'click button#add': 'addItem'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // every function that uses 'this' as the current object should be in here

            this.collection = new List();
            this.collection.bind('add', this.appendItem); // collection event binder

            this.counter = 0;
            this.render();
        },
        render: function() {
            var self = this;
            $(this.el).append("<button id='add'>New Character</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function(item) { // in case collection is not empty
                self.appendItem(item);
            }, this);
        },
        addItem: function() {
            this.counter++;
            var item = new Item();
            item.set({
                part2: item.get('part2') + this.counter // modify item defaults
            });
            this.collection.add(item);
        },
        appendItem: function(item) {
            var itemView = view.create({
                model: item
            });
            $(this.el).append(itemView.render().el);
        }
    });

    var listView = new ListView();

});
