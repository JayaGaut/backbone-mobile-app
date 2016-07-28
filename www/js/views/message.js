define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'models/message_model',
  'text!templates/message_tpl.html',
  'collections/messages_collection'
], function($, _, Backbone, Router, MessageModel, messageTemplate, MessagesCollection){
	
	var messageView = Backbone.View.extend({
		//el: '#message_list',
		router: {},
		
		events: {
			"click #delete": "onClickDelete"
			 },
		
		initialize: function () {
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});
		},
/*		
		onClickDelete: function(e) {
				 this.model.destroy({});
			},
*/	
	 render: function(models) {
			var compiledTemplate = _.template( messageTemplate );
			this.$el.html(compiledTemplate(models));
			//this.$el.html(compiledTemplate(this.model.toJSON()));
			//return $(this.el).append(this.template(this.model.toJSON()));
			return this;
		},
	});
	
	return messageView;
});
