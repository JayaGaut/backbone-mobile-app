define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/message_model',
    'views/messages',
    'views/personalized',
    'text!templates/header_tpl.html',
    'text!templates/create_new_msg_tpl.html'
], function ($, _, Backbone, Router, MessageModel, MessagesView, personalizedView, headerTemplate, newMessageTemplate) {

    var headerView = Backbone.View.extend({
        router: {},
        events: {
            "click #trash-icon": "deleteIcon",
            "click #menu-icon": "displayMenu",
        },
        initialize: function () {
        },


        render: function () {
            //this.$el.html(this.template());
            var compiledTemplate = _.template(headerTemplate);
            $(this.el).html(compiledTemplate);

            if (utils.pageTitle == 'courseDetail' || utils.pageTitle == 'personalizedReport' || utils.pageTitle == 'sessionReport'
                || utils.pageTitle == 'sessionReportDetail') {
                this.$('#back_btn').removeClass('visibility-hidden');

            }

            if( utils.pageTitle == 'MessageReply' || utils.pageTitle == 'MessageSelectSender'){
                this.$('#flex-rectangle').addClass('visibility-hidden');
            }

            if (utils.pageTitle == 'Message') {
                this.$('#trash-icon').addClass('visibility-visible');
                this.$('#Envelope-plus').addClass('visibility-visible');

            } else if (utils.pageTitle == 'MessageSecond' || utils.pageTitle == 'MessageDelete' || utils.pageTitle == 'DiscussionSecond') {

                this.$('#trash-icon').addClass('visibility-visible');

            } else if (utils.pageTitle == 'MessageReply') {

                this.$('#submitPlane').addClass('visibility-visible');

            }

            return this;
        }
    });

    return headerView;
});