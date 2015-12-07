define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/messages_tpl.html'
], function($, _, Backbone, Router, messagesTemplate){
	
		var messagesView = Backbone.View.extend({
			router: {},
			events: {},
			initialize: function () {
			},
		
			render: function () {
				var compiledTemplate = _.template( messagesTemplate );
				$(this.el).html(compiledTemplate);
				return this;
			},
		});
	return messagesView;
});
