define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/header_tpl.html'
], function($, _, Backbone, Router, headerTemplate){
	
		var headerView = Backbone.View.extend({
			router: {},
			events: {
				 
				"click #trash-icon": "deleteIcon",
			<!--"click #alert-delete": "alertAelete",-->
				"click #menu-icon": "displayMenu",
				/*"click #close-menu": "closeMenu"*/
			},
			initialize: function () {
			},
			
			 deleteIcon: function() {
				 window.location.href = '#messagedelete';
			},
			
				displayMenu: function() {
				( function( $ ) {
		
				  var $body = $( 'body' ),
					  $page = $( '#page' ),
					  $menu = $( '#menu' ),
				  
				  transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
			
				  $body.addClass( 'animating' );
				  if ( $body.hasClass( 'menu-visible' ) ) {
				   $body.addClass( 'left' );
				  } else {
				   $body.addClass( 'right' );
				  }
			
				  $page.on( transitionEnd, function() {
					  
				   $body
					.removeClass( 'animating right left' )
					.toggleClass( 'menu-visible' );
				
				   $page.off( transitionEnd );
				  } );
				  } )( jQuery );
				  
			},
			render: function () {
				  //this.$el.html(this.template());
				  var compiledTemplate = _.template( headerTemplate );
					$(this.el).html(compiledTemplate);
				  
				if (utils.pageTitle == 'Courses' || utils.pageTitle == 'CourseNotification' || 
					utils.pageTitle == 'DiscussionFirst' || utils.pageTitle == 'MenAcademy' || 
					utils.pageTitle == '' || utils.pageTitle == 'Profile') {
						$(body).removeClass('menu-visible');
		
				} 
		
				if (utils.pageTitle == 'Message') {
					this.$('#trash-icon').addClass('visibility-visible');
					this.$('#Envelope-plus').addClass('visibility-visible');
		
				} else if (utils.pageTitle == 'MessageSecond' || utils.pageTitle == 'MessageDelete' || utils.pageTitle == 'DiscussionSecond') {
		
					this.$('#trash-icon').addClass('visibility-visible');
		
				} else if (utils.pageTitle == 'MessageReply') {
					
					this.$('#plan').addClass('visibility-visible');
		
				} 
				else if (utils.pageTitle == 'Profile') {
		
					this.$('#chevron-left-icon').addClass('visibility-hidden');
					this.$('#menu-icon').addClass('visibility-visible');
		
		
				} else if (utils.pageTitle !== 'Profile') {
		
					this.$('#menu-icon').addClass('visibility-hidden');
					this.$('#chevron-left-icon').addClass('visibility-visible');
		
				}
				return this;
			}
		});

	return headerView;
});