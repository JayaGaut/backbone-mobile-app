define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/message_first_tpl.html'
], function($, _, Backbone, Router, messageFirstTemplate){
	
		var messageFirstView = Backbone.View.extend({
			router: {},
			events: {},
			initialize: function () {
				console.log('Initializing messageFirstView');
				utils.pageTitle = 'MessageFirst';
				utils.headerTitle = 'MESSAGES';
			},
		
			render: function () {
				var compiledTemplate = _.template( messageFirstTemplate );
				$(this.el).html(compiledTemplate);
				return this;
			},
		});
	return messageFirstView;
});
