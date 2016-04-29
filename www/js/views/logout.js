define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login_tpl.html'
], function($, _, Backbone,logoutTemplate){
	    
      var logoutView = Backbone.View.extend({
          events: {
              "click #logout": "logout"
          },

          initialize: function () {
			  
          },

          logout:function (event) {
			  alert("100");
			 sessionStorage._token = null;
            event.preventDefault(); // Don't let this button submit the form
            console.log('Logout...');
			/*loginData = {
                identifier : $('#inputEmail').val(),
                password : $('#inputPassword').val(),
				_token   : sessionStorage._token
            };*/
            var closure = this;

			$.ajax({
				url : "http://mentorina.staging.dpm.co.com/logout",
				dataType : "json",
				type : "GET",
				
				success : function ( data ) {
					alert("10");
					console.log(data);
					
				},
   
                error: function (xhr, status, error) {
                    alert(status);
                }
            });
	   
        },

        render:function () {
            var compiledTemplate = _.template( logoutTemplate );
            $(this.el).html(compiledTemplate);
            return this;
        }
    });

    return logoutView;
});
