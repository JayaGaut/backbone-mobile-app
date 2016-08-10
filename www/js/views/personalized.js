define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/personalized_tpl.html'
], function($, _, Backbone, personalizedTemplate) {

	var personalizedView = Backbone.View.extend({
		courseId: '',
		courseName: '',
		teacherName: '',
		section: '',
		outline: '',
		initialize: function () {
			utils.pageTitle = 'personalizedReport';
			utils.headerTitle = 'Personalized Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},

		render: function () {
			var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline };
			var compiledTemplate = _.template(personalizedTemplate);
			this.$el.html(compiledTemplate(data));
			return this;
		}
	});

	return personalizedView;

});

