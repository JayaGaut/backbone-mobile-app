define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/messages_delete_tpl.html'
], function($, _, Backbone, Router, messagesDelateTemplate){
	
		var messagesDelateView = Backbone.View.extend({
			router: {},
			events: {},
			initialize: function () {
				
				this.model.on("remove", this.onRemoveTodoItem, this);
			},
			
			onRemoveTodoItem: function( messageModel ){
				this.$("li#" + messageModel.id).remove();
			},
		
			render: function () {
				var compiledTemplate = _.template( messagesDelateTemplate );
				$(this.el).html(compiledTemplate);
				return this;
			},
		});
	return messagesDelateView;
});
