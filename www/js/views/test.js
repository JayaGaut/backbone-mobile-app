define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/test.html'
], function($, _, Backbone, testTemplate) {

    var TestView = Backbone.View.extend({

        initialize: function () {
            utils.pageTitle = 'test';
            utils.headerTitle = 'test';
            event.preventDefault(); // Don't let this button submit the form
            console.log('test..');

        },
        render: function () {
            var compiledTemplate = _.template(testTemplate);
            this.$el.html(compiledTemplate);
            return this;
        }

    });

    return TestView;

});

