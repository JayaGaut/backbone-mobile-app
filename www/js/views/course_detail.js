define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/course_detail_tpl.html',
], function($, _, Backbone, Router, courseDetailTemplate){

    var courseDetailView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        router: {},

        events: {},

        initialize: function () {
            utils.pageTitle = 'courseDetail';
            utils.headerTitle = 'My Courses';
            console.log("course....detail");
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {
            var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline};
            var compiledTemplate = _.template( courseDetailTemplate );
            this.$el.html(compiledTemplate(data));
            return this;
        },
    });

    return courseDetailView;
});
