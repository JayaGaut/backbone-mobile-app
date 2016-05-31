define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'models/message_model',
  'text!templates/message_tpl.html'
], function($, _, Backbone, Router, MessageModel, messageTemplate){
	
	var messageView = Backbone.View.extend({
		//el: '#message_list',
		router: {},
		events: {},
		initialize: function () {
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});

			/*utils.pageTitle = 'Message';
			utils.headerTitle = 'MESSAGES';
			this.collection = new MessageCollection();
			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.collection.fetch();*/
			
			/*this.collection.fetch().done(function(){
			  this.render();
			});*/
			
		},
	
	 render: function(posts) {
			var compiledTemplate = _.template( messageTemplate );
			
			//this.$el.html(compiledTemplate(this.model.toJSON()));
			this.$el.html(compiledTemplate(posts));
			//return $(this.el).append(this.template(this.model.toJSON()));
			//$el.html(compiledTemplate);
			return this;
		},
	});
	
	return messageView;
});
