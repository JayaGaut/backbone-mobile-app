define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model'
], function($, _, Backbone, MessageModel){
	
	var MessageCollection = Backbone.Collection.extend({

		model: MessageModel,
		url: "/messages"

});

 	return MessageCollection;
});