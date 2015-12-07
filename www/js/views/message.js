define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/message_collection',
  'text!templates/message_tpl.html'
], function($, _, Backbone, Router, MessageCollection, messageTemplate){
	
		var messageView = Backbone.View.extend({
			router: {},
			events: {},
			initialize: function () {
				utils.pageTitle = 'Message';
				utils.headerTitle = 'MESSAGES';
				
				var MessageCollectionInst = new MessageCollection();
				MessageCollectionInst.fetch();
				
			},
		
			render: function () {
				var compiledTemplate = _.template( messageTemplate );
				$(this.el).html(compiledTemplate);
				return this;
			},
		});
	return messageView;
});
