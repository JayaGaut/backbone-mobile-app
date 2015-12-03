define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	
		var MessageModel = Backbone.Model.extend({
		
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