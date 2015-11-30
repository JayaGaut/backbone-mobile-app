define([
  'jquery',
  'underscore',
  'backbone',
  'views/login'
], function($, _, Backbone){
	  var app.Router = Backbone.Router.extend({
	
			routes: {
				"": "login" 
			},
		
		   login: function () {
			   
				app.loginView = new app.LoginView();
				app.loginView.render();
			   
				$("#content").html(app.loginView.el);
		   }
		});
});

