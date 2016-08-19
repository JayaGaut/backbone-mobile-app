define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/people_first_tpl.html'
], function($, _, Backbone, Router, peopleFirstTemplate){

    var peopleFirstView = Backbone.View.extend({

        router: {},
        events: {},
        initialize: function () {
            utils.pageTitle = 'peopleFirst';
            utils.headerTitle = 'PEOPLE';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {

            var compiledTemplate = _.template( peopleFirstTemplate );
            this.$el.html(compiledTemplate);

            return this;
        },
    });

    return peopleFirstView;
});

