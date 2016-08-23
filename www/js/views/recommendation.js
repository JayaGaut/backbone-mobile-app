define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/recommendation_tpl.html',
], function($, _, Backbone, Router, recommendationTemplate){

    var recommendationView = Backbone.View.extend({
        router: {},
        events: {
        },
        initialize: function () {
            utils.pageTitle = 'Recommendation';
            utils.headerTitle = 'Recommendation';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function () {
            var compiledTemplate = _.template( recommendationTemplate );
            $(this.el).html(compiledTemplate);

            return this;
        }
    });

    return recommendationView;
});