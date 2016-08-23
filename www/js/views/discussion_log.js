define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/discussion_log_tpl.html'
], function($, _, Backbone, Router, discussionLogTemplate){

    var discussionLogView = Backbone.View.extend({

        router: {},
        events: {},
        initialize: function () {
            utils.pageTitle = 'discussionLog';
            utils.headerTitle = 'DISCUSSION';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {

            var compiledTemplate = _.template( discussionLogTemplate );
            this.$el.html(compiledTemplate);

            return this;
        },
    });

    return discussionLogView;
});

