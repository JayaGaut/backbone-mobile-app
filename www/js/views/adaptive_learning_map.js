define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/adaptive_learning_map_tpl.html',
], function($, _, Backbone, Router, adaptiveLearningMapTemplate){

    var adaptiveLearningMapView = Backbone.View.extend({
        router: {},
        events: {
        },
        initialize: function () {
        },

        render: function () {
            var compiledTemplate = _.template( adaptiveLearningMapTemplate );
            $(this.el).html(compiledTemplate);

            return this;
        }
    });

    return adaptiveLearningMapView;
});