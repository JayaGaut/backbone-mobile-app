define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/adaptive_learning_list_tpl.html',
], function($, _, Backbone, Router, adaptiveLearningListTemplate){

    var adaptiveLearningListView = Backbone.View.extend({
        router: {},
        events: {
        },
        initialize: function () {
            utils.pageTitle = 'AdaptiveLearning';
            utils.headerTitle = 'Adaptive Learning';
        },

        render: function () {
            var compiledTemplate = _.template( adaptiveLearningListTemplate );
            $(this.el).html(compiledTemplate);

            return this;
        }
    });

    return adaptiveLearningListView;
});