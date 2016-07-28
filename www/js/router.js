define([
    'jquery',
    'underscore',
    'backbone',
    'views/header',
    'views/footer',
    'views/login',
    'views/profile',
    'views/messages',
    'views/message',
    'views/message_second',
    'views/create_new_msg',
    'views/courses',
    'views/course_detail',
    'views/personalized',
    'views/session_report',
    'views/session_report_detail',
    'models/message_model'
], function ($, _, Backbone, headerView, footerView, loginView, profileView, messagesView,
             messageView, messageSecondView, newMessageView, coursesView, courseDetailView, personalizedView, sessionReportView, sessionReportDetailView, MessageModel) {
    var routerInst;
    var app_router = Backbone.Router.extend({

            routes: {
                "": "login",
                "logout": "logout",
                "profile": "profile",
                "messages": "messages",
                "messageSecond/:sender_name/:sender_id/:subject/:sentDate/:content": "messageSecond",
                "new_message": "new_message",
                "message_reply/:sender_id/:subject": "message_reply",
                "courses": "courses",
                "course_detail": "course_detail",
                "personalized": "personalized",
                "session_report": "session_report",
                "session_report_detail": "session_report_detail"
            },

            login: function () {

                loginViewInst = new loginView();
                loginViewInst.render();

                $('.header').hide();
                $('.footer').hide();
                $("#content").html(loginViewInst.el);

            },

            logout: function () {
                //alert( "Handler for .click() called." );
                $("#body").removeClass('menu-visible');
                sessionStorage.clear();
                $.ajax({
                    url: utils.baseUrlApi + "/logout",
                    dataType: "json",
                    type: "GET",
                    success: function (data) {
                        console.log(data);
                        window.location.hash = "";

                    },

                    error: function (xhr, status, error) {
                        alert(status);
                    }
                });
            },

            profile: function () {
                profileViewInst = new profileView();
                profileViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(profileViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            messages: function () {
                messagesViewInst = new messagesView();
                messagesViewInst.render();

                headerViewInst = new headerView();
                headerViewInst.render();

                $('.header').html(headerViewInst.el);
                $("#content").html(messagesViewInst.el);

            },

            messageSecond: function (sender_name, sender_id, subject, sentDate, content) {
                messageSecondViewInst = new messageSecondView();
                messageSecondViewInst.sender_name = sender_name;
                messageSecondViewInst.sender_id = sender_id;
                messageSecondViewInst.subject = subject;
                messageSecondViewInst.sentDate = sentDate;
                messageSecondViewInst.content = content;
                messageSecondViewInst.render();

                headerViewInst = new headerView();
                headerViewInst.render();

                $('.header').html(headerViewInst.el);
                $("#content").html(messageSecondViewInst.el);

            },

            new_message: function () {
                newMessageViewInst = new newMessageView();
                newMessageViewInst.render();

                headerViewInst = new headerView();
                headerViewInst.render();

                $('.header').html(headerViewInst.el);
                $("#content").html(newMessageViewInst.el);

            },

            message_reply: function (sender_id, subject) {
                newMessageViewInst = new newMessageView();
                newMessageViewInst.sender_id = sender_id;
                newMessageViewInst.subject = subject;
                newMessageViewInst.render();

                headerViewInst = new headerView();
                headerViewInst.render();

                $('.header').html(headerViewInst.el);
                $("#content").html(newMessageViewInst.el);

            },

            courses: function () {
                coursesViewInst = new coursesView();
                coursesViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(coursesViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            course_detail: function () {
                courseDetailViewInst = new courseDetailView();
                courseDetailViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(courseDetailViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            personalized: function () {
                personalizedViewInst = new personalizedView();
                personalizedViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(personalizedViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            session_report: function () {
                sessionReportViewInst = new sessionReportView();
                sessionReportViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(sessionReportViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            }

            ,

            session_report_detail: function () {
                sessionReportDetailViewInst = new sessionReportDetailView();
                sessionReportDetailViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(sessionReportDetailViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            }
        })
        ;

    var initialize = function () {

        routerInst = new app_router();
        Backbone.history.start();
    };

    var getInstance = function () {
        return routerInst;
    }

    return {
        initialize: initialize,
        getInstance: getInstance

    }
});

