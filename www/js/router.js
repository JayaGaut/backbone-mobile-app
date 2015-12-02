define([
  'jquery',
  'underscore',
  'backbone',
  'views/login',
  'views/profile'
], function($, _, Backbone, loginView, profileView){
	  var appRouter;
	  var router = Backbone.Router.extend({
	
			routes: {
				"": "login",
				"profile": "profile"
				
			},
		
		   login: function () {
			   
				loginViewInst = new loginView();
				loginViewInst.render();
			   
				$("#content").html(loginViewInst.el);
		   },
		   profile: function () {
				profileViewInst = new profileView();
				profileViewInst.render();
		
				
				$("#content").html(profileViewInst.el);
        
           }
		});

      var initialize = function() {
        routerInst = new router();
        Backbone.history.start();
      };
	  
      var getInstance = function() {
      	return routerInst;
      };

      return {
        initialize: initialize,
		getInstance: getInstance
      };
});

