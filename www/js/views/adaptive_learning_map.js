define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/adaptive_learning_map_tpl.html',
], function($, _, Backbone, Router, adaptiveLearningMapTemplate){

    var adaptiveLearningMapView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        router: {},
        events: {
        },
        initialize: function () {
        },

        render: function () {
            var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline };
            var compiledTemplate = _.template( adaptiveLearningMapTemplate );
            $(this.el).html(compiledTemplate(data));

            return this;
        }
    });

    return adaptiveLearningMapView;
});