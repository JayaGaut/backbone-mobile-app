define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/adaptive_learning_list_tpl.html',
], function($, _, Backbone, Router, adaptiveLearningListTemplate){

    var adaptiveLearningListView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        router: {},
        events: {
        },
        initialize: function () {
            utils.pageTitle = 'AdaptiveLearning';
            utils.headerTitle = 'Adaptive Learning';
        },

        render: function () {
            var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline };
            var compiledTemplate = _.template( adaptiveLearningListTemplate );
            $(this.el).html(compiledTemplate(data));

            return this;
        }
    });

    return adaptiveLearningListView;
});