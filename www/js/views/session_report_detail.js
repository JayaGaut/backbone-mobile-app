define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/session_report_detail_tpl.html'
], function ($, _, Backbone, sessionReportDetailTemplate) {

    var sessionReportDetailView = Backbone.View.extend({
        courseId: '',
        courseName: '',
        teacherName: '',
        section: '',
        outline: '',
        sessionId: '',
        variance: [],
        student_status: [],
        initialize: function () {
            utils.pageTitle = 'sessionReportDetail';
            utils.headerTitle = 'Session Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

        },

        sessionReport: function () {
            var closure = this;
            var variance = [];
            var student_status = [];
            // var cognitive = [];
            // var non_cognitive = [];
            // var self_measurement = [];
            var data = {courseId: this.courseId, sessionId: this.sessionId};
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
            $.ajax({
                url: utils.baseUrlApi + "/student/courses/" + data.courseId + " /sessions/" + data.sessionId + "/reports",
                dataType: "json",
                type: "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function (data) {
                    console.log(data);
                    closure.variance = [];
                    closure.student_status = [];
                    closure.variance.push(data.scores.variance.cognitive.low, data.scores.variance.cognitive.avg, data.scores.variance.cognitive.high,
                        data.scores.variance.noncognitive.low, data.scores.variance.noncognitive.avg, data.scores.variance.noncognitive.high,
                        data.scores.variance.selfmeasure.low, data.scores.variance.selfmeasure.avg, data.scores.variance.selfmeasure.high);

                    closure.student_status.push(data.scores.student.variance.cognitive, data.scores.student.variance.noncognitive, data.scores.student.variance.selfmeasure);
                    closure.render();
                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function () {
            console.log(this.variance);
            console.log(this.student_status);
            var info = {
                courseId: this.courseId,
                courseName: this.courseName,
                teacherName: this.teacherName,
                section: this.section,
                outline: this.outline,
                variance: this.variance
            };
            // var info = {variance : this.variance};
            var compiledTemplate = _.template(sessionReportDetailTemplate);
            this.$el.html(compiledTemplate(info));

            if( this.student_status[0] == "low") {
                this.$('#stroke1').addClass('stroke-settings');
            }else if( this.student_status[0] == "avg" ) {
                this.$('#stroke2').addClass('stroke-settings');
            }else {
                this.$('#stroke3').addClass('stroke-settings');
            }

            if( this.student_status[1] == "low") {
                $('#stroke4').addClass('stroke-settings');
            }else if( this.student_status[1] == "avg" ) {
                $('#stroke5').addClass('stroke-settings');
            }else {
                $('#stroke6').addClass('stroke-settings');
            }


            if( this.student_status[2] == "low") {
                $('#stroke7').addClass('stroke-settings');
            }else if( this.student_status[2] == "avg" ) {
                $('#stroke8').addClass('stroke-settings');
            }else {
                $('#stroke9').addClass('stroke-settings');
            }

            return this;
        }
    });

    return sessionReportDetailView;

});

