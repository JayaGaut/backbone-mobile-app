define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'models/message_model',
  'text!templates/message_second_tpl.html'
], function($, _, Backbone, Router, MessageModel, messageSecondTemplate){
	
	var messageSecondView = Backbone.View.extend({
		sender_name: '',
		subject: '',
		sentDate: '',
		content: '',
		//el: '#message_list',
		router: {},
		events: {},
		initialize: function () {
			console.log("3");
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});
		},
	
	 render: function() {
			var data = {sender_name : this.sender_name, subject : this.subject, sentDate : this.sentDate, content : this.content};
			var compiledTemplate = _.template( messageSecondTemplate );
			this.$el.html(compiledTemplate(data));
			
            return this;
		},
	});
	
	return messageSecondView;
});

