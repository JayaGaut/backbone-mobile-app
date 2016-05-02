define([
  'jquery',
  'underscore',
  'backbone',
  'views/header',
  'views/login',
  'views/profile',
  'views/messages',
  'views/message',
  'views/create_new_msg',
  'models/message_model'
], function($, _, Backbone, headerView, loginView, profileView, messagesView,
	messageView, newMessageView, MessageModel){
	  var routerInst;
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login",
				//"logout": "logout",
				"profile": "profile",
				"message": "message",
				"new_message": "new_message"
			},
		
		   login: function () {
			   
				loginViewInst = new loginView();
				loginViewInst.render();
			   
				$("#content").html(loginViewInst.el);
		   },
		   
		   /*logout: function () {
			   $( "#logout" ).click(function() {
  			   		alert( "Handler for .click() called." );
					
			   });
		   },*/
		   
		   profile: function () {
				profileViewInst = new profileView();
				profileViewInst.render();
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(profileViewInst.el);
           },
		   
		   message: function () {
				messagesViewInst = new messagesView();
				messagesViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messagesViewInst.el);
        
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

