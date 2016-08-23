define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/discussion_main_tpl.html'
], function($, _, Backbone, Router, discussionMainTemplate){

    var discussionMainView = Backbone.View.extend({

        router: {},
        events: {},
        initialize: function () {
            utils.pageTitle = 'discussionMain';
            utils.headerTitle = 'DISCUSSION';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {

            var compiledTemplate = _.template( discussionMainTemplate );
            this.$el.html(compiledTemplate);

            return this;
        },
    });

    return discussionMainView;
});

