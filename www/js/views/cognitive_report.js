define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/cognitive_report_tpl.html'
], function ($, _, Backbone, Router, cognitiveReportTemplate) {

    var cognitiveReportView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        session_name: [],
        class_session_cognitive: [],
        student_session_cognitive: [],
        initialize: function () {
            utils.pageTitle = 'cognitiveReport';
            utils.headerTitle = 'Cognitive Report';
            event.preventDefault(); // Don't let this button submit the form
        },

        cognitiveReport: function () {
            var closure = this;
            var session_name = [];
            var class_session_cognitive = [];
            var student_session_cognitive = [];
            var data = {courseId: this.courseId};
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });

            $.ajax({
                url: utils.baseUrlApi + "/student/courses/" + data.courseId + "/reports",
                dataType: "json",
                type: "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function (data) {
                    closure.session_name = [];
                    closure.class_session_cognitive = [];
                    closure.student_session_cognitive = [];
                    console.log(data);
                    function logArrayElements(object, array) {
                        closure.session_name.push(object.name);
                        closure.class_session_cognitive.push(object.scores.class_avg.cognitive);
                        closure.student_session_cognitive.push(object.scores.student.cognitive);
                    }

                    data.forEach(logArrayElements);
                    // //console.log(closure.courses);
                    console.log(closure.session_name);
                    console.log(closure.class_session_cognitive);
                    console.log(closure.student_session_cognitive);
                    closure.render();
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function () {
            var info = {
                courseId: this.courseId,
                courseName: this.courseName,
                teacherName: this.teacherName,
                sessions: this.sessions,
                section: this.section,
                outline: this.outline
            };
            var compiledTemplate = _.template(cognitiveReportTemplate);
            this.$el.html(compiledTemplate(info));

                this.$('#con').highcharts({
                    chart: {
                        type: 'line'
                    },
                    colors: ['#6FB3E0', '#87B87F'],

                    title: {
                        text: 'Cognitive Skills ' + sessionStorage.FirstName + ' vs class'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.session_name
                    },
                    yAxis: {
                        title: {
                            text: ''
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: sessionStorage.FirstName,
                        data: this.student_session_cognitive
                    }, {
                        name: 'Class',
                        data: this.class_session_cognitive
                    }]
                });


            return this;
        }
    });

    return cognitiveReportView;

});

