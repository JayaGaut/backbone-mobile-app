define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/message_model',
    'views/messages',
    'text!templates/header_tpl.html',
    'text!templates/create_new_msg_tpl.html'
], function ($, _, Backbone, Router, MessageModel, MessagesView, headerTemplate, newMessageTemplate) {

    var headerView = Backbone.View.extend({
        router: {},
        events: {
            "click #submitPlane": "onClickSubmit",
            "click #trash-icon": "deleteIcon",
            <!--"click #alert-delete": "alertAelete",-->
            "click #menu-icon": "displayMenu",
            /*"click #close-menu": "closeMenu"*/
            "click #back_btn": "back",
        },
        initialize: function () {
        },
        back: function () {
            if (utils.pageTitle == "courseDetail") {
                window.location.hash = "courses";
            } else if (utils.pageTitle == "personalizedReport") {
                window.location.hash = "course_detail";
            } else if (utils.pageTitle == "sessionReport") {
                window.location.hash = "personalized";
            } else if (utils.pageTitle == "sessionReportDetail") {
                window.location.hash = "session_report";
            }

        },

        deleteIcon: function () {
            console.log("clickDeleteButton");
        },

        onClickSubmit: function () {
            console.log("clicked submit");
            console.log($('#messageContent').val());
            console.log($('#subject').val());
            MessageModelInst = new MessageModel();
            MessageModelInst.set({
                '_token': sessionStorage._token,
                'to': $('#to').val(),
                'cc': $('#to').val(),
                'bcc': '',
                'subject': $('#subject').val(),
                'content': '<p>' + $('#messageContent').val() + '</p>'
            });
            console.log(MessageModelInst.toJSON());
            MessageModelInst.save();
        },


        render: function () {
            //this.$el.html(this.template());
            var compiledTemplate = _.template(headerTemplate);
            $(this.el).html(compiledTemplate);

            if (utils.pageTitle == 'courseDetail' || utils.pageTitle == 'personalizedReport' || utils.pageTitle == 'sessionReport'
                || utils.pageTitle == 'sessionReportDetail') {
                this.$('#back_btn').removeClass('visibility-hidden');

            }

            if (utils.pageTitle == 'Message') {
                this.$('#trash-icon').addClass('visibility-visible');
                this.$('#Envelope-plus').addClass('visibility-visible');

            } else if (utils.pageTitle == 'MessageSecond' || utils.pageTitle == 'MessageDelete' || utils.pageTitle == 'DiscussionSecond') {

                this.$('#trash-icon').addClass('visibility-visible');

            } else if (utils.pageTitle == 'MessageReply') {

                this.$('#submitPlane').addClass('visibility-visible');

            }
            else if (utils.pageTitle == 'Profile') {

                this.$('#chevron-left-icon').addClass('visibility-hidden');
                this.$('#menu-icon').addClass('visibility-visible');


            } else if (utils.pageTitle !== 'Profile') {

                this.$('#menu-icon').addClass('visibility-hidden');
                this.$('#chevron-left-icon').addClass('visibility-visible');

            }
            return this;
        }
    });

    return headerView;
});