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
			//tagName: 'ul',
			/*attributes: {
				id: 'messages_list',
				class: 'regular-ul regular-list',
				style: 'margin-top:43px !important;'
			},*/
			router: {},
			events: {
				"click #delete": "onClickDelete"
			},
            
			initialize: function () {
				utils.pageTitle = 'Message';
				utils.headerTitle = 'MESSAGES';
				this.collection = new MessagesCollection();
				this.model = new MessageModel();
			
					
				//this.listenTo(this.collection, 'add', this.addOne);
				this.listenTo(this.collection, 'reset', this.render);
				this.listenTo(this.collection, 'remove', this.render);
				//this.collection.bind("reset", this.render);
				 
				

				this.collection.fetch({
					reset: true,
					success:function(){
               			// console.log(this.collection);
   					}
				});
			},
			     
				 onClickDelete: function(e) {
					 //console.log("this is model:" + this.collection.get("c7").cid);
					 var collection = this.collection;
					 console.log("clickeddddddddd");
					 
					 $("input:checked").each(function () {
						var id = $(this).attr("data-id");
						console.log("Do something for: " + id );
						var model = collection.get(id);
						console.log(model);
						collection.remove(model);
						model.destroy();
						
						$.ajax({
						  url: utils.baseUrlApi + "/student/bulk/messages",
						  dataType: "json",
						  type : "POST",
						  data : {
							_token : sessionStorage._token,
							action : "delete",
							items : [ model.id ]
						  },
						  headers : {
						   'X-Requested-With' : 'XMLHttpRequest',
						  },
						  xhrFields: {
							withCredentials: true,
						  },
						  success : function(r) {
							console.log(r);
						  },
						  error : function(r) {
							console.log(r);
						  }
						});

					});
			},
			
			onRemoveMessage: function() {
				 allert("20");
				 //console.log("removed", MessageModel);
				 //this.$("li#" + MessageModel.id).remove();
				 
			},

			/*addOne: function (messageModel) {
				console.log('adding one');
				
				var view = new MessageView({ model: MessageModel });
				this.$el.append(view.render().el);
			},*/

			render: function () {
				var compiledTemplate = _.template( messagesTemplate );
				this.$el.html(compiledTemplate());
				//alert(JSON.stringify(this.collection));
				var models = this.collection;
				console.log(models);
				var messageViewInst = new MessageView({ model: this.model });
				this.$el.append(messageViewInst.render(models).el);
				/*this.collection.attributes.inbox.each(function(messageModel) {
					console.log(messageModel.get(id));
					//var posts = {"cid": messageModel.cid , "posts": messageModel.attributes.inbox};
					//console.log(posts);
					var messageViewInst = new MessageView({ model: messageModel });
					this.$el.append(messageViewInst.render(posts).el);
				}, this);*/ 
				return this;
			},
		});
	return messagesView;
});
