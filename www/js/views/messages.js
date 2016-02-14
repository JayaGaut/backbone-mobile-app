define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/messages_collection',
  'models/message_model',
  'views/message'
], function($, _, Backbone, Router, MessagesCollection, 
	MessageModel, MessageView){
	
		var messagesView = Backbone.View.extend({
			tagName: 'ul',
			attributes: {
				id: 'messages_list',
				class: 'regular-ul regular-list',
				style: 'margin-top:43px !important;'
			},
			router: {},
			events: {},

			initialize: function () {
				utils.pageTitle = 'Message';
				utils.headerTitle = 'MESSAGES';
				this.collection = new MessagesCollection();
				
				this.listenTo(this.collection, 'add', this.addOne);
				this.listenTo(this.collection, 'reset', this.addAll);
				this.collection.fetch();
			},

			addOne: function (messageModel) {
				console.log('adding one');
				
				var view = new MessageView({ model: messageModel });
				this.$el.append(view.render().el);
			},

			addAll: function () {
				console.log('adding all..');
				/*this.collection.each(function(messageModel) {
				var messageViewInst = new messageView({ model: messageModel });
				$el.append(view.render().el);
				});*/
			},
		
			render: function () {
				return this;
			},
		});
	return messagesView;
});
