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
				//this.collection.bind("reset", this.render);

				this.collection.fetch({
					reset: true
				});
				
				 console.log(this.collection);
			},

			/*addOne: function (messageModel) {
				console.log('adding one');
				
				var view = new MessageView({ model: MessageModel });
				this.$el.append(view.render().el);
			},*/

			render: function () {
				console.log(this.collection.length);
				//alert(JSON.stringify(this.collection));
				
				this.collection.each(function(messageModel) {
					//console.log(messageModel.attributes.inbox);
					var posts = {"posts": messageModel.attributes.inbox};
					var messageViewInst = new MessageView({ model: messageModel });
					//this.$el.append(messageViewInst.render().el);
					this.$el.append(messageViewInst.render(posts).el);
				}, this);

				return this;
			},
		});
	return messagesView;
});
