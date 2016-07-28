define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/footer_tpl.html',
], function($, _, Backbone, Router, footerTemplate){

    var footerView = Backbone.View.extend({
        router: {},
        events: {
        },
        initialize: function () {
        },

        render: function () {
            //this.$el.html(this.template());
            var compiledTemplate = _.template( footerTemplate );
            $(this.el).html(compiledTemplate);

            return this;
        }
    });

    return footerView;
});