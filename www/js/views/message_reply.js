define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/message_reply_tpl.html'
], function($, _, Backbone, messageReplyTemplate){
	
		var messageReplyView = Backbone.View.extend({
		
			initialize: function () {
				console.log('Initializing messageReplyView');
				utils.pageTitle = 'MessageReply';
				utils.headerTitle = 'MESSAGES';
			},
		
			render: function () {
				var compiledTemplate = _.template( messageReplyTemplate );
                $(this.el).html(compiledTemplate);
				return this;
			},
		});
 	return messageReplyView;
});