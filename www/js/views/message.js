define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/message_tpl.html'
], function($, _, Backbone, Router, messageTemplate){
	
		var messageView = Backbone.View.extend({
			router: {},
			events: {},
			initialize: function () {
				utils.pageTitle = 'Message';
				utils.headerTitle = 'MESSAGES';
			},
		
			render: function () {
				var compiledTemplate = _.template( messageTemplate );
				$(this.el).html(compiledTemplate);
				return this;
			},
		});
	return messageView;
});
