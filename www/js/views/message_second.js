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
		sender_id: '',
		subject: '',
		sentDate: '',
		content: '',
		//el: '#message_list',
		router: {},
		events: {},
		initialize: function () {
			utils.pageTitle = 'MessageSecond';
		    utils.headerTitle = 'MESSAGESSECOND';
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});
		},
	
	 render: function() {
			var data = {sender_name : this.sender_name, sender_id : this.sender_id, subject : this.subject, sentDate : this.sentDate, content : this.content};
			var compiledTemplate = _.template( messageSecondTemplate );
			this.$el.html(compiledTemplate(data));
			
            return this;
		},
	});
	
	return messageSecondView;
});

