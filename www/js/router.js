define([
  'jquery',
  'underscore',
  'backbone',
  'views/login'
], function($, _, Backbone, loginView){
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login" 
			},
		
		   login: function () {
			   
				loginViewInst = new loginView();
				loginViewInst.render();
			   
				$("#content").html(loginViewInst.el);
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

