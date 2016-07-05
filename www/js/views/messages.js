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
			events: {
				"click .peple-chechbox": "clicked"
			},
            
			initialize: function () {
				utils.pageTitle = 'Message';
				utils.headerTitle = 'MESSAGES';
				this.collection = new MessagesCollection();
				this.model = new MessageModel();
				
				//this.listenTo(this.collection, 'add', this.addOne);
				this.listenTo(this.collection, 'reset', this.render);
				//this.model.on("remove", this.onRemoveMessage, this);
				this.listenTo(this.model, 'remove', this.onRemoveMessage);
				//this.collection.bind("reset", this.render);

				this.collection.fetch({
					reset: true
				});
				
				 console.log(this.collection);
			},
			onRemoveMessage: function(MessageModel) {
				 allert("20");
				 console.log("removed", MessageModel);
				 this.$("li#" + MessageModel.id).remove();
				 
			},
			
			 /*clicked: function(e) {
				console.log(this.model.id);
				console.log("clickeddddddddd");
				 e.preventDefault();
                 var id = $(e.currentTarget).data("id");
				 console.log(id);
			},*/

			/*addOne: function (messageModel) {
				console.log('adding one');
				
				var view = new MessageView({ model: MessageModel });
				this.$el.append(view.render().el);
			},*/

			render: function () {
				console.log(this.collection.length);
				//alert(JSON.stringify(this.collection));
				
				this.collection.each(function(messageModel) {
					var posts = {"posts": messageModel.attributes.inbox};
					console.log(posts);
					var messageViewInst = new MessageView({ model: messageModel });
					this.$el.append(messageViewInst.render(posts).el);
				}, this);

				return this;
			},
		});
	return messagesView;
});
