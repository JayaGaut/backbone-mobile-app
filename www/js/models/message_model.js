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
		
		//idAttribute: "_id",
		sync : function ( method, model, options ) {
	    
			options.beforeSend = function (xhr) {
	
				xhr.setRequestHeader('X-CSRF-TOKEN', sessionStorage._token);
			};
	       
    		return Backbone.Model.prototype.sync.call(this, method, model, options);
			
	    },
		urlRoot: "http://mentorina.staging.dpm.co.com/student/messages",
		defaults: {
		_token: '',
		to: '',
		cc: '',
		bcc: '',
		subject: '',
		content: '',
		situation:'',
		status: ''
		},
	
		/*initialize:function () {
		}*/
	
	});

 	return MessageModel;
});