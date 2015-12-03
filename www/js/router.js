define([
  'jquery',
  'underscore',
  'backbone',
  'models/message_model',
  'views/header',
  'views/login',
  'views/profile',
  'views/message',
  'views/message_reply'
], function($, _, Backbone, MessageModel, headerView, loginView, profileView, messageView, messageReplyView){
	  var routerInst;
	  var app_router = Backbone.Router.extend({
	
			routes: {
				"": "login",
				"profile": "profile",
				"message": "message",
				"message_reply": "message_reply"
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
				messageViewInst = new messageView({ model: MessageModel });
				messageViewInst.render();
				console.log(messageViewInst.el);
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageViewInst.el);
        
           },
		   
		   message_reply: function () {
				messageReplyViewInst = new messageReplyView();
				messageReplyViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageReplyViewInst.el);
        
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

