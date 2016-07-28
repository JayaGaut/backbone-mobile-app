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

            events: {},

            initialize: function () {
				var post = {};
                utils.pageTitle = 'My Courses';
                utils.headerTitle = 'My Courses';

                $.ajaxSetup({
                    xhrFields: {
                        withCredentials: true
                    },
                });

                console.log('courseIndex...');
                var closure = this;

                $.ajax({
                    url: utils.baseUrlApi + "/student/courses?type=all",
                    dataType: "json",
                    type: "GET",
                    headers : {
                        'X-Requested-With' : 'XMLHttpRequest',
                    },
                    xhrFields: {
                        withCredentials: true,
                    },
                    success: function (data) {

                        // closure.courses = data;
                        // console.log(closure.courses);
                        // console.log(closure.courses.length);

                        function logArrayElements(object, array) {
                            console.log( object.id + ' ' + object.department_id);
                            closure.courses.push(object);
							
                        }

                        data.forEach(logArrayElements);
                        console.log(closure.courses);

                    },

                    error: function (jqXHR, exception) {
                        console.log(jqXHR.status);

                    }
                });
            },

            render: function () {
                var compiledTemplate = _.template(coursesTemplate);
                this.$el.html(compiledTemplate(this.courses));
                return this;
            }
        });

    return coursesView;
});
