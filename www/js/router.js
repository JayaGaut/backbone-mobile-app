define([
  'jquery',
  'underscore',
  'backbone',
  'views/header',
  'views/login',
  'views/profile',
  'views/messages',
  'views/message',
  'views/message_second',
  'views/create_new_msg',
  'views/message_delete',
  'models/message_model'
], function($, _, Backbone, headerView, loginView, profileView, messagesView,
	messageView, messageSecondView, newMessageView, messageDeleteView, MessageModel){
	  var routerInst;
	  var app_router = Backbone.Router.extend({
		   
			routes: {
				"": "login",
				"logout": "logout",
				"profile": "profile",
				"messages": "messages",
				"messageSecond/:sender_name/:subject/:sentDate/:content": "messageSecond",
				"new_message": "new_message",
				"messageDelete/:posts": "messageDelete"
			},
		
		   login: function () {
			    
				loginViewInst = new loginView();
				loginViewInst.render();
			   
			    $('.header').hide();
				$("#content").html(loginViewInst.el);
				
		   },
		   
		   logout: function () {
			   //alert( "Handler for .click() called." );
			   $("#body").removeClass('menu-visible');	
			   sessionStorage.clear();
			   $.ajax({
				url : utils.baseUrlApi + "/logout",
				dataType : "json",
				type : "GET",
				success : function ( data ) {
					console.log(data);
					window.location.hash = "";
					
				},
   
                error: function (xhr, status, error) {
                    alert(status);
                }
			});
		   },
		   
		   profile: function () {
				profileViewInst = new profileView();
				profileViewInst.render();
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$('.header').show();
				$("#content").html(profileViewInst.el);
           },
		   
		   messages: function () {
				messagesViewInst = new messagesView();
				messagesViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messagesViewInst.el);
        
           },
		   
		   messageSecond: function (sender_name, subject, sentDate, content ) {
				messageSecondViewInst = new messageSecondView();
				messageSecondViewInst.sender_name = sender_name;
				messageSecondViewInst.subject = subject;
				messageSecondViewInst.sentDate = sentDate;
				messageSecondViewInst.content = content;
				messageSecondViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageSecondViewInst.el);
        
           },
		   
		    new_message: function () {
				newMessageViewInst = new newMessageView();
				newMessageViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(newMessageViewInst.el);
        
           },
		   
		   messageDelete: function (posts) {
				messageDeleteViewInst = new messageDeleteView();
				messageDeleteViewInst.posts = posts;
				messageDeleteViewInst.render();
				
				headerViewInst = new headerView();
		        headerViewInst.render();

                $('.header').html(headerViewInst.el);
				$("#content").html(messageDeleteViewInst.el);
        
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

