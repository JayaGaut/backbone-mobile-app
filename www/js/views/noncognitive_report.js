define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/noncognitive_report_tpl.html'
], function ($, _, Backbone,  Router, noncognitiveReportTemplate) {

    var noncognitiveReportView = Backbone.View.extend({
        courseId :'',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        session_name: [],
        class_session_noncognitive: [],
        student_session_noncognitive: [],
        initialize: function () {
            utils.pageTitle = 'Non-CognitiveReport';
            utils.headerTitle = 'Non-Cognitive Report';
            event.preventDefault(); // Don't let this button submit the form
        },

        noncognitiveReport: function () {
            var closure = this;
            var session_name = [];
            var class_session_noncognitive = [];
            var student_session_noncognitive = [];
            var data = {courseId : this.courseId };
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });

            $.ajax({
                url: utils.baseUrlApi + "/student/courses/"+data.courseId+"/reports",
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
                    closure.class_session_noncognitive = [];
                    closure.student_session_noncognitive = [];
                    console.log(data);
                    function logArrayElements(object, array) {
                        closure.session_name.push(object.name);
                        closure.class_session_noncognitive.push(object.scores.class_avg.noncognitive);
                        closure.student_session_noncognitive.push(object.scores.student.noncognitive);
                    }

                    data.forEach(logArrayElements);
                    // //console.log(closure.courses);
                    console.log(closure.session_name);
                    console.log(closure.class_session_noncognitive);
                    console.log(closure.student_session_noncognitive);
                    closure.render();
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function () {
            var info = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, sessions: this.sessions, section : this.section, outline : this.outline};
            var compiledTemplate = _.template(noncognitiveReportTemplate);
            this.$el.html(compiledTemplate(info));

                this.$('#con').highcharts({
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Non-Cognitive Skills ' + sessionStorage.FirstName + ' vs class'
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
                        name: 'Student',
                        data: this.student_session_noncognitive
                    }, {
                        name: 'Class',
                        data: this.class_session_noncognitive
                    }]
                });

            return this;
        }
    });

    return noncognitiveReportView;

});

