define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	
	var MessageModel = Backbone.Model.extend({
		/*validate: function(attrs){
			if(!attrs.to)
			  return "to is required";
		},*/
		
		
		sync : function ( method, model, options ) {
	    
			options.beforeSend = function (xhr) {
	
				xhr.setRequestHeader('X-CSRF-TOKEN', sessionStorage._token);
			};
	       
    		return Backbone.Model.prototype.sync.call(this, method, _model, options);
			
	    },
		urlRoot: "http://mentorina.staging.dpm.co.com/student/messages",
		defaults: {
		id: '',
		_id: ''
		},
	
		/*initialize:function () {
		}*/
	
	});

 	return MessageModel;
});