define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/session_report_detail_tpl.html'
], function($, _, Backbone, sessionReportDetailTemplate) {

	var sessionReportDetailView = Backbone.View.extend({
		courseId: '',
		courseName: '',
		teacherName: '',
		section: '',
		outline: '',
		sessionId: '',
		variance: [],
		initialize: function () {
			utils.pageTitle = 'sessionReportDetail';
			utils.headerTitle = 'Session Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},

		sessionReport:function () {
			var closure = this;
			var variance = [];
			// var cognitive = [];
			// var non_cognitive = [];
			// var self_measurement = [];
			var data = {courseId : this.courseId, sessionId : this.sessionId };
			$.ajaxSetup({
				xhrFields: {
					withCredentials: true
				},
			});
			$.ajax({
				url: utils.baseUrlApi + "/student/courses/1/sessions/53/reports",
				dataType: "json",
				type: "GET",
				headers : {
					'X-Requested-With' : 'XMLHttpRequest',
				},
				xhrFields: {
					withCredentials: true,
				},
				success: function (data) {
					closure.variance = [];
					closure.variance.push(data.scores.variance.cognitive.low,data.scores.variance.cognitive.avg,data.scores.variance.cognitive.high,
						                  data.scores.variance.noncognitive.low,data.scores.variance.noncognitive.avg,data.scores.variance.noncognitive.high,
						                  data.scores.variance.selfmeasure.low,data.scores.variance.selfmeasure.avg,data.scores.variance.selfmeasure.high);
					// console.log(data.scores.variance.cognitive.low);
					console.log(data);

					closure.render();
				},

				error: function (jqXHR, exception) {
					console.log(jqXHR.status);

				}
			});

		},
	
		render: function () {
			console.log(this.variance);
			console.log(this.courseId);
			var info = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline, variance : this.variance,};
			// var info = {variance : this.variance};
			var compiledTemplate = _.template(sessionReportDetailTemplate);
			this.$el.html(compiledTemplate(info));
			return this;
		}
	});

	return sessionReportDetailView;

});

