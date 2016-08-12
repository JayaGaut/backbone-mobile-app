define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/selfmeasurement_report_tpl.html'
], function ($, _, Backbone,  Router, selfmeasurementReportTemplate) {

    var selfmeasurementReportView = Backbone.View.extend({
        courseId :'',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        session_name: [],
        class_session_selfmeasurement: [],
        student_session_selfmeasurement: [],
        initialize: function () {
            utils.pageTitle = 'Self-MeasurementReport';
            utils.headerTitle = 'Self-Measurement Report';
            event.preventDefault(); // Don't let this button submit the form
        },

        selfmeasurementReport: function () {
            var closure = this;
            var session_name = [];
            var class_session_selfmeasurement = [];
            var student_session_selfmeasurement = [];
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
                    closure.class_session_selfmeasurement = [];
                    closure.student_session_selfmeasurement = [];
                    console.log(data);
                    function logArrayElements(object, array) {
                        closure.session_name.push(object.name);
                        closure.class_session_selfmeasurement.push(object.scores.class_avg.selfmeasure);
                        closure.student_session_selfmeasurement.push(object.scores.student.selfmeasure);
                    }

                    data.forEach(logArrayElements);
                    // //console.log(closure.courses);
                    console.log(closure.session_name);
                    console.log(closure.class_session_selfmeasurement);
                    console.log(closure.student_session_selfmeasurement);
                    closure.render();
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function () {
            var info = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, sessions: this.sessions, section : this.section, outline : this.outline};
            var compiledTemplate = _.template(selfmeasurementReportTemplate);
            this.$el.html(compiledTemplate(info));

                this.$('#con').highcharts({
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Self Measures ' + sessionStorage.FirstName + ' vs class'
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
                        data: this.student_session_selfmeasurement
                    }, {
                        name: 'Class',
                        data: this.class_session_selfmeasurement
                    }]
                });

            return this;
        }
    });

    return selfmeasurementReportView;

});

