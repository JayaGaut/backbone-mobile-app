define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/message_collection',
  'text!templates/message_tpl.html'
], function($, _, Backbone, Router, MessageCollection, messageTemplate){
	
	var messageView = Backbone.View.extend({
		el: '#message_list',
		router: {},
		events: {},
		initialize: function () {
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});

			utils.pageTitle = 'Message';
			utils.headerTitle = 'MESSAGES';
			this.collection = new MessageCollection();
			this.listenTo(this.collection, 'add', this.addOne);
			this.listenTo(this.collection, 'reset', this.addAll);
			this.collection.fetch();
			/*
			this.collection.fetch().done(function(){
			  self.render();
			});
			*/
		},
		
		addOne: function (messageModel) {
			console.log('adding one');
			
			//var view = new messageView({ model: messageModel });
			//$el.append(view.render().el);
		},

		addAll: function () {
			console.log('adding all..');
			/*this.collection.each(function(messageModel) {
			var messageViewInst = new messageView({ model: messageModel });
			$el.append(view.render().el);
			});*/
		},
	
		render: function () {
			var compiledTemplate = _.template( messageTemplate );
			$(this.el).html(compiledTemplate);
			//$el.html(compiledTemplate);
			return this;
		},
	});
	
	return messageView;
});
