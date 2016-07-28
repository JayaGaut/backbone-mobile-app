define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/session_report_detail_tpl.html'
], function($, _, Backbone, sessionReportDetailTemplate) {

	var sessionReportDetailView = Backbone.View.extend({
	
		initialize: function () {
			utils.pageTitle = 'sessionReportDetail';
			utils.headerTitle = 'Session Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},
	
		render: function () {
			var compiledTemplate = _.template(sessionReportDetailTemplate);
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return sessionReportDetailView;

});

