define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model'
], function($, _, Backbone, MessageModel){
	
	var MessageCollection = Backbone.Collection.extend({

		model: MessageModel,
		url: "http://mentorina.staging.devstdlol.com/dpm/api/messages"
		//utils.baseUrlApi + '/messages'

});

 	return MessageCollection;
});