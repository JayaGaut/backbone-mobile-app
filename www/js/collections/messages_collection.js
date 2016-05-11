define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model'
], function($, _, Backbone, MessageModel){
	
	var MessagesCollection = Backbone.Collection.extend({

		model: MessageModel,
		url: "http://mentorina.staging.dpm.co.com/student/messages",
		
		sync : function ( method, model, options ) {
	    
			options.beforeSend = function (xhr) {
	
				xhr.setRequestHeader('X-CSRF-TOKEN', sessionStorage._token);
			};
	
			return Backbone.Collection.prototype.sync.call(this, method, model, options);
	    },

});

 	return MessagesCollection;
});