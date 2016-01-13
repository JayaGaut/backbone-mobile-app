define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	
	var MessageModel = Backbone.Model.extend({
		validate: function(attrs){
			if(!attrs.to)
			  return "to is required";
		},
		urlRoot: "http://mentorina.staging.devstdlol.com/dpm/api/messages",
		
		sync : function ( method, model, options ) {
	    
			options.beforeSend = function (xhr) {
	
				xhr.setRequestHeader('X-CSRF-TOKEN', sessionStorage._token);
			};
	       
    		return Backbone.Model.prototype.sync.call(this, method, _model, options);
			
	    },
		
		//utils.baseUrlApi + '/messages',
		defaults: {
		to: '',
		subject: '',
		content: ''
		},
	
		initialize:function () {
		}
	
	});

 	return MessageModel;
});