define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/people_profile_tpl.html'
], function($, _, Backbone, Router, peopleProfileTemplate){

    var peopleProfileView = Backbone.View.extend({

        router: {},
        events: {},
        initialize: function () {
            utils.pageTitle = 'peopleProfile';
            utils.headerTitle = 'PEOPLE';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {

            var compiledTemplate = _.template( peopleProfileTemplate );
            this.$el.html(compiledTemplate);

            return this;
        },
    });

    return peopleProfileView;
});

