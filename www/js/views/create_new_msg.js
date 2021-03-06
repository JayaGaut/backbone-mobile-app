define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model',
  'collections/messages_collection',
  'text!templates/create_new_msg_tpl.html'
], function($, _, Backbone, MessageModel, MessagesCollection, newMessageTemplate){
	
		var newMessageView = Backbone.View.extend({
		sender_id: '',
		subject: '',
			initialize: function () {
				console.log('Initializing newMessageView');
				utils.pageTitle = 'MessageReply';
				utils.headerTitle = 'MESSAGES';
			},
			
			events: {
				"click #sendMessage": "onClickSubmit",
			},
			
	/*onClickSubmit: function(){
				console.log("clicked submit");
				MessageModelInst = new MessageModel();
                MessageModelInst.set({'_token':sessionStorage._token,
				                      'to': $('#to').val(),
									  'cc':$('#to').val(), 
									  'bcc':'',
									  'subject': $('#subject').val(),
									  'content':$('#body').val()});
                console.log(MessageModelInst.toJSON());
				
					if (!MessageModelInst.isValid()) {
					alert(MessageModelInst.get("to") + " " + MessageModelInst.validationError);
					return;
					}
					
				MessageModelInst.save();
				MessageCollection.add(MessageModelInst);
				window.location.hash = "messages";
			},*/

			onClickSubmit: function () {
				console.log("clicked submit");
				console.log($('#comment').val());
				console.log($('#messageSubject').val());
				console.log($('#to').val());
				MessageModelInst = new MessageModel();
				MessageModelInst.set({
					'_token': sessionStorage._token,
					'to': $('#to').val(),
					'cc': $('#to').val(),
					'bcc': '',
					'subject': $('#messageSubject').val(),
					'content': '<p>' + $('#comment').val() + '</p>'
				});
				console.log(MessageModelInst.toJSON());
				MessageModelInst.save();
				window.location.hash = "#messages";
			},
		
			render: function () {
				var data = { sender_id : this.sender_id, subject : this.subject};
				var compiledTemplate = _.template( newMessageTemplate );
                $(this.el).html(compiledTemplate(data));
				return this;
			},
		});
		
 	return newMessageView;
});
