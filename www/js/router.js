define([
  'jquery',
  'underscore',
  'backbone',
  'views/header',
  'views/login',
  'views/profile',
  'views/message_first'
], function($, _, Backbone, headerView, loginView, profileView, messageFirstView){
	  var routerInst;
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login",
				"profile": "profile",
				"message_first": "message_first"
			},
		
		   login: function () {
			   
				loginViewInst = new loginView();
				loginViewInst.render();
			   
				$("#content").html(loginViewInst.el);
		   },
		   
		   profile: function () {
				profileViewInst = new profileView();
				profileViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(profileViewInst.el);
        
           },
		   
		   message_first: function () {
				messageFirstViewInst = new messageFirstView();
				messageFirstViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageFirstViewInst.el);
        
           }
		});

      var initialize = function() {
		  
        routerInst = new app_router();
        Backbone.history.start();
      };
	  
      var getInstance = function() {
      	return routerInst;
      }

      return {
        initialize: initialize,
		 getInstance: getInstance
		
      }
});

