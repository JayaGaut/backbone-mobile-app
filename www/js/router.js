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
    'views/adaptive_learning_list',
    'views/adaptive_learning_map',
    'views/recommendation',
    'views/recomm_related_session',
    'views/cognitive_report',
    'views/noncognitive_report',
    'views/selfmeasurement_report',
    'models/message_model'
], function ($, _, Backbone, headerView, footerView, loginView, profileView, messagesView,
             messageView, messageSecondView, newMessageView, coursesView, courseDetailView, personalizedView, sessionReportView, sessionReportDetailView,
             adaptiveLearningListView, adaptiveLearningMapView, recommendationView, recommRelatedSessionView, cognitiveReportView, noncognitiveReportView,
             selfmeasurementReportView,MessageModel) {
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
                "course_detail/:courseId/:courseName/:teacherName/:section/:outline": "course_detail",
                "personalized/:courseId/:courseName/:teacherName/:section/:outline": "personalized",
                "session_report/:courseId/:courseName/:teacherName/:section/:outline": "session_report",
                "session_report_detail/:courseId/:courseName/:teacherName/:section/:outline/:sessionId": "session_report_detail",
                "adaptive_Learning_List": "adaptive_Learning_List",
                "adaptive_Learning_Map": "adaptive_Learning_Map",
                "recommendation": "recommendation",
                "recomm_Related_Session": "recomm_Related_Session",
                "cognitive_report/:courseId/:courseName/:teacherName/:section/:outline": "cognitive_report",
                "noncognitive_report/:courseId/:courseName/:teacherName/:section/:outline": "noncognitive_report",
                "selfmeasurement_report/:courseId/:courseName/:teacherName/:section/:outline": "selfmeasurement_report"
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
                coursesViewInst.courseIndex();
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

            course_detail: function (courseId, courseName, teacherName, section, outline) {
                courseDetailViewInst = new courseDetailView();
                courseDetailViewInst.courseId = courseId;
                courseDetailViewInst.courseName = courseName;
                courseDetailViewInst.teacherName = teacherName;
                courseDetailViewInst.section = section;
                courseDetailViewInst.outline = outline;
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

            personalized: function (courseId, courseName, teacherName, section, outline) {
                personalizedViewInst = new personalizedView();
                personalizedViewInst.courseId = courseId;
                personalizedViewInst.courseName = courseName;
                personalizedViewInst.teacherName = teacherName;
                personalizedViewInst.section = section;
                personalizedViewInst.outline = outline;
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

            session_report: function (courseId, courseName, teacherName, section, outline) {
                sessionReportViewInst = new sessionReportView();
                sessionReportViewInst.courseId = courseId;
                sessionReportViewInst.courseName = courseName;
                sessionReportViewInst.teacherName = teacherName;
                sessionReportViewInst.section = section;
                sessionReportViewInst.outline = outline;
                sessionReportViewInst.sessionIndex();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(sessionReportViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            session_report_detail: function (courseId, courseName, teacherName, section, outline, sessionId) {
                sessionReportDetailViewInst = new sessionReportDetailView();
                sessionReportDetailViewInst.courseId = courseId;
                sessionReportDetailViewInst.courseName = courseName;
                sessionReportDetailViewInst.teacherName = teacherName;
                sessionReportDetailViewInst.section = section;
                sessionReportDetailViewInst.outline = outline;
                sessionReportDetailViewInst.sessionId = sessionId;
                sessionReportDetailViewInst.sessionReport();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();


                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(sessionReportDetailViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            adaptive_Learning_List: function () {
                adaptiveLearningListViewInst = new adaptiveLearningListView();
                adaptiveLearningListViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(adaptiveLearningListViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            adaptive_Learning_Map: function () {
                adaptiveLearningMapViewInst = new adaptiveLearningMapView();
                adaptiveLearningMapViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(adaptiveLearningMapViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            recommendation: function () {
                recommendationViewInst = new recommendationView();
                recommendationViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(recommendationViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            recomm_Related_Session: function () {
                recommRelatedSessionViewInst = new recommRelatedSessionView();
                recommRelatedSessionViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(recommRelatedSessionViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            cognitive_report: function (courseId, courseName, teacherName, section, outline) {
                cognitiveReportViewInst = new cognitiveReportView();
                cognitiveReportViewInst.courseId = courseId;
                cognitiveReportViewInst.courseName = courseName;
                cognitiveReportViewInst.teacherName = teacherName;
                cognitiveReportViewInst.section = section;
                cognitiveReportViewInst.outline = outline;
                cognitiveReportViewInst.cognitiveReport();
                // cognitiveReportViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(cognitiveReportViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            noncognitive_report: function (courseId, courseName, teacherName, section, outline) {
                noncognitiveReportViewInst = new noncognitiveReportView();
                noncognitiveReportViewInst.courseId = courseId;
                noncognitiveReportViewInst.courseName = courseName;
                noncognitiveReportViewInst.teacherName = teacherName;
                noncognitiveReportViewInst.section = section;
                noncognitiveReportViewInst.outline = outline;
                noncognitiveReportViewInst.noncognitiveReport();
                // cognitiveReportViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(noncognitiveReportViewInst.el);
                $('.footer').html(footerViewInst.el);
                $('.footer').show();
            },

            selfmeasurement_report: function (courseId, courseName, teacherName, section, outline) {
                selfmeasurementReportViewInst = new selfmeasurementReportView();
                selfmeasurementReportViewInst.courseId = courseId;
                selfmeasurementReportViewInst.courseName = courseName;
                selfmeasurementReportViewInst.teacherName = teacherName;
                selfmeasurementReportViewInst.section = section;
                selfmeasurementReportViewInst.outline = outline;
                selfmeasurementReportViewInst.selfmeasurementReport();
                // cognitiveReportViewInst.render();
                headerViewInst = new headerView();
                headerViewInst.render();
                footerViewInst = new footerView();
                footerViewInst.render();

                $('.header').html(headerViewInst.el);
                $('.header').show();
                $("#content").html(selfmeasurementReportViewInst.el);
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

