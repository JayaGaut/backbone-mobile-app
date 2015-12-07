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
		urlRoot:"",
		defaults: {
		to: '',
		subject: '',
		body: ''
		},
		initialize:function () {
		}
	
	});

 	return MessageModel;
});