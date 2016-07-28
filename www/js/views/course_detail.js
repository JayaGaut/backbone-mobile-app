define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/course_detail_tpl.html',
], function($, _, Backbone, Router, courseDetailTemplate){

    var courseDetailView = Backbone.View.extend({
        router: {},

        events: {},

        initialize: function () {
            utils.pageTitle = 'courseDetail';
            utils.headerTitle = 'My Courses';
            // console.log(utils.pageTitle);
            console.log("course....detail");
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function() {
            var compiledTemplate = _.template( courseDetailTemplate );
            this.$el.html(compiledTemplate);
            return this;
        },
    });

    return courseDetailView;
});
