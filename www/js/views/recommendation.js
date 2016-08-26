define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/recommendation_tpl.html',
], function($, _, Backbone, Router, recommendationTemplate){

    var recommendationView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        router: {},
        events: {
        },
        initialize: function () {
            utils.pageTitle = 'Recommendation';
            utils.headerTitle = 'Recommendation';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function () {
            var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline };
            var compiledTemplate = _.template( recommendationTemplate );
            $(this.el).html(compiledTemplate(data));

            return this;
        }
    });

    return recommendationView;
});