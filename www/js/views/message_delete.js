define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model',
  'collections/messages_collection',
  'text!templates/message_delete_tpl.html'
], function($, _, Backbone, MessageModel, MessagesCollection, MessageDeleteTemplate){
	
		var messageDeleteView = Backbone.View.extend({
		    posts:'',
			initialize: function () {
				console.log('Initializing messageDeleteView');
				utils.pageTitle = 'MessageDelete';
                utils.headerTitle = 'MESSAGES';
			},
			
/*			events: {
				"click #submitPlane": "onClickSubmit"
			},
			
			onClickSubmit: function(){
				console.log("clicked submit");
				MessageModelInst = new MessageModel();
                MessageModelInst.set({'_token':sessionStorage._token,
				                      'to': $('#to').val(),
									  'cc':'', 'bcc':'',
									  'subject': $('#subject').val(),
									  'content':$('#body').val()});
                console.log(MessageModelInst.toJSON());
				
					/*if (!MessageModelInst.isValid()) {
					alert(MessageModelInst.get("to") + " " + MessageModelInst.validationError);
					return;
					}*/
					
				/*MessageModelInst.save();
				MessageCollection.add(MessageModelInst);
				window.location.hash = "messages";
			},*/
		
			render: function () {
				var data = {posts : this.posts};
				console.log(data);
				var compiledTemplate = _.template( MessageDeleteTemplate );
                this.$el.html(compiledTemplate());
				 //$(this.el).html(compiledTemplate);
				
				return this;
			},
		});
		
 	return messageDeleteView;
});
