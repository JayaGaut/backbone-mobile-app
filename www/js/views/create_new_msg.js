define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model',
  'text!templates/create_new_msg_tpl.html'
], function($, _, Backbone, MessageModel, newMessageTemplate){
	
		var newMessageView = Backbone.View.extend({
		
			initialize: function () {
				console.log('Initializing newMessageView');
				utils.pageTitle = 'MessageReply';
				utils.headerTitle = 'MESSAGES';
				
				this.model.on("add", this.onAddNewMsg, this);
			},
			
			onAddNewMsg: function(MessageModelInst){
				console.log("added");
				this.model.save();
			},
			
			events: {
				"click #SubmitPlane": "onClickSubmit"
			},
			
			onClickSubmit: function(){
				console.log("clicked submit");
				var MessageModelInst = new MessageModel({ to: $('#to').val()});
				MessageModelInst.save();
				this.model.add(MessageModelInst);
			},
		
			render: function () {
				var compiledTemplate = _.template( newMessageTemplate );
                $(this.el).html(compiledTemplate);
				return this;
			},
		});
		
 	return newMessageView;
});