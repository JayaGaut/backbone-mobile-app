define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/session_report_tpl.html'
], function($, _, Backbone, sessionReportTemplate) {

	var sessionReportView = Backbone.View.extend({
		courseId: '',
		courseName: '',
		teacherName: '',
		section: '',
		outline: '',
		sessions : [],
		initialize: function () {
			utils.pageTitle = 'sessionReport';
			utils.headerTitle = 'Session Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},

		sessionIndex:function () {
			var closure = this;
			var sessions = [];
			var data = {courseId : this.courseId };
			$.ajaxSetup({
				xhrFields: {
					withCredentials: true
				},
			});
			$.ajax({
				url: utils.baseUrlApi + "/student/courses/"+data.courseId+"/sessions?type=list",
				dataType: "json",
				type: "GET",
				headers : {
					'X-Requested-With' : 'XMLHttpRequest',
				},
				xhrFields: {
					withCredentials: true,
				},
				success: function (data) {
					closure.sessions = [];
					function logArrayElements(object, array) {
						closure.sessions.push(object);
					}

					data.forEach(logArrayElements);
					closure.render();
				},

				error: function (jqXHR, exception) {
					console.log(jqXHR.status);

				}
			});

		},

		render: function () {
			console.log(this.sessions);
			var info = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, sessions: this.sessions, section : this.section, outline : this.outline};
			var compiledTemplate = _.template(sessionReportTemplate);
			this.$el.html(compiledTemplate(info));
			return this;
		}
	});

	return sessionReportView;

});

