define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model'
], function($, _, Backbone, MessageModel){
	
	var MessageCollection = Backbone.Collection.extend({

		model: MessageModel,
		url: "http://mentorina.staging.devstdlol.com/dpm/api/messages",
		//utils.baseUrlApi + '/messages'
		
		sync : function ( method, model, options ) {
	    
			options.beforeSend = function (xhr) {
	
				xhr.setRequestHeader('X-CSRF-TOKEN', sessionStorage._token);
			};
	
			return Backbone.Collection.prototype.sync.call(this, method, model, options);
	    },

});

 	return MessageCollection;
});