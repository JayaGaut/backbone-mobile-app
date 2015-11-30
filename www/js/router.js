define([
  'jquery',
  'underscore',
  'backbone',
  'views/login'
], function($, _, Backbone){
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login" 
			},
		
		   login: function () {
			   
				app.loginView = new app.LoginView();
				app.loginView.render();
			   
				$("#content").html(app.loginView.el);
		   }
		});

      var initialize = function() {
        new app_router();
        Backbone.history.start();
      };

      return {
        initialize: initialize
      }
});

