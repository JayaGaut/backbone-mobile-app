define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/courses_tpl.html',
], function ($, _, Backbone, Router, coursesTemplate) {

    var coursesView = Backbone.View.extend({
        courses: [],
        router: {},

        events: {
            "click #past": "onClickPastCourses",
            "click #current": "onClickCurrentCourses",
        },

        initialize: function () {
            utils.pageTitle = 'My Courses';
            utils.headerTitle = 'My Courses';
        },

        onClickCurrentCourses: function () {
            this.courseIndex();
        },

        onClickPastCourses: function () {
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });

            var closure = this;
            var courses = [];
            var status = 'past';
            $.ajax({
                url: utils.baseUrlApi + "/student/courses?type=past",
                dataType: "json",
                type: "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function (data) {
                    closure.courses = [];
                    function logArrayElements(object, array) {
                        closure.courses.push(object);
                    }

                    data.forEach(logArrayElements);
                    //console.log(closure.courses);
                    closure.render(status);
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        courseIndex: function () {
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });

            console.log('courseIndex...');
            var closure = this;
            var courses = [];
            var status = 'current';
            $.ajax({
                url: utils.baseUrlApi + "/student/courses",
                dataType: "json",
                type: "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function (data) {
                    console.log(data.object);
                    closure.courses = [];
                    function logArrayElements(object, array) {
                        closure.courses.push(object);
                    }

                    data.forEach(logArrayElements);
                    // console.log(closure.courses);
                    closure.render(status);
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function (status) {
            // console.log(this.courses.length);
            var compiledTemplate = _.template(coursesTemplate);
            this.$el.html(compiledTemplate({courses: this.courses}));
            if (status == "past") {
                this.$('#past').css('color','#4285F4');
            } else {
                this.$('#current').css('color','#4285F4');
            }
            return this;
        }
    });

    return coursesView;
});
