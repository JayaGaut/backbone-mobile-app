define([
  'jquery',
  'underscore',
  'backbone',
  'views/header',
  'views/login',
  'views/profile',
  'views/message',
  'views/create_new_msg'
], function($, _, Backbone, headerView, loginView, profileView, messageView, newMessageView){
	  var routerInst;
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login",
				"profile": "profile",
				"message": "message",
				"new_message": "new_message"
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
		   
		   message: function () {
				messageViewInst = new messageView();
				messageViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageViewInst.el);
        
           },
		   
		    new_message: function () {
				newMessageViewInst = new newMessageView();
				newMessageViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(newMessageViewInst.el);
        
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

