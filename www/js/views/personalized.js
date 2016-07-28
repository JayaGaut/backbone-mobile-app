define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/personalized_tpl.html'
], function($, _, Backbone, personalizedTemplate) {

	var personalizedView = Backbone.View.extend({
	
		initialize: function () {
			utils.pageTitle = 'personalizedReport';
			utils.headerTitle = 'Personalized Report';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('personalized');

		},
	
		render: function () {
			var compiledTemplate = _.template(personalizedTemplate);
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return personalizedView;

});

