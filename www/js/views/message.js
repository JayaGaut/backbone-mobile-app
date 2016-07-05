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
		
		onClickDelete: function(e) {
				 this.model.destroy({
       success: function(model,response)
            {
                console.log("success");
            },
            error: function(model,response)
            {
                               // this triggers, but the model is always removed from the collection.
                console.log("error");
                console.log(self);
            }
        });
			},
	
	 render: function(posts) {
			var compiledTemplate = _.template( messageTemplate );
			//this.$el.html(compiledTemplate(this.model.toJSON()));
			this.$el.html(compiledTemplate(posts));
			//return $(this.el).append(this.template(this.model.toJSON()));
			return this;
		},
	});
	
	return messageView;
});
