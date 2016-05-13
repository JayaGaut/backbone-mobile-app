define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/messages_collection',
  'models/message_model',
  'views/message',
  'text!templates/messages_tpl.html'
], function($, _, Backbone, Router, MessagesCollection, 
	MessageModel, MessageView, messagesTemplate){
	
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
				
				//this.listenTo(this.collection, 'add', this.addOne);
				this.listenTo(this.collection, 'reset', this.render);

				this.collection.fetch({
					reset: true
				});
			},

			/*addOne: function (messageModel) {
				console.log('adding one');
				
				var view = new MessageView({ model: MessageModel });
				this.$el.append(view.render().el);
			},*/

			render: function () {
				this.collection.each(function(messageModel) {
					var messageViewInst = new MessageView({ model: messageModel });
					this.$el.append(messageViewInst.render().el);
				}, this);

				return this;
			},
		});
	return messagesView;
});
