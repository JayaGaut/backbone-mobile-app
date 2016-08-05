define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/recomm_related_session_tpl.html',
], function($, _, Backbone, Router, recommRelatedSessionTemplate){

    var recommRelatedSessionView = Backbone.View.extend({
        router: {},
        events: {
        },
        initialize: function () {
        },

        render: function () {
            var compiledTemplate = _.template( recommRelatedSessionTemplate );
            $(this.el).html(compiledTemplate);

            return this;
        }
    });

    return recommRelatedSessionView;
});