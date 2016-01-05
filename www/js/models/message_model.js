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