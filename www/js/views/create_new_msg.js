define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model',
  'collections/message_collection',
  'text!templates/create_new_msg_tpl.html'
], function($, _, Backbone, MessageModel, MessageCollection, newMessageTemplate){
	
		var newMessageView = Backbone.View.extend({
		
			initialize: function () {
				alert("33");
				console.log('Initializing newMessageView');
				utils.pageTitle = 'MessageReply';
				utils.headerTitle = 'MESSAGES';
			},
			
			events: {
				"click #SubmitPlane": "onClickSubmit"
			},
			
			onClickSubmit: function(){
				console.log("clicked submit");
				var MessageModelInst = new MessageModel({ to: $('#to').val()});
				
					if (!MessageModelInst.isValid()) {
					alert(MessageModelInst.get("to") + " " + MessageModelInst.validationError);
					return;
					}
					
				MessageModelInst.save();
				MessageCollection.add(MessageModelInst);
				window.location.hash = "message";
			},
		
			render: function () {
				var compiledTemplate = _.template( newMessageTemplate );
                $(this.el).html(compiledTemplate);
				return this;
			},
		});
		
 	return newMessageView;
});