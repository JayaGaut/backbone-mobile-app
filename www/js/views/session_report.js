define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/session_report_tpl.html'
], function($, _, Backbone, sessionReportTemplate) {

	var sessionReportView = Backbone.View.extend({
	
		initialize: function () {
			utils.pageTitle = 'sessionReport';
			utils.headerTitle = 'Session Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},
	
		render: function () {
			var compiledTemplate = _.template(sessionReportTemplate);
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return sessionReportView;

});

