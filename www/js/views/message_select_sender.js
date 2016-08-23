define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'models/message_model',
  'text!templates/message_select_sender_tpl.html'
], function($, _, Backbone, Router, MessageModel, messageSelectSenderTemplate){
	
	var messageSelectSenderView = Backbone.View.extend({

		router: {},
		events: {},
		initialize: function () {
			utils.pageTitle = 'MessageSelectSender';
		    utils.headerTitle = 'MESSAGES';
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});
		},
	
	 render: function() {

			var compiledTemplate = _.template( messageSelectSenderTemplate );
			this.$el.html(compiledTemplate);
			
            return this;
		},
	});
	
	return messageSelectSenderView;
});

