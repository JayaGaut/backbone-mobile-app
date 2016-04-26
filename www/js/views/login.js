define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login_tpl.html'
], function($, _, Backbone, loginTemplate){
	    
      var loginView = Backbone.View.extend({
          events: {
              "submit #formLogin": "login"
          },

          initialize: function () {
			  console.log(sessionStorage._token);
          },

          login:function (event) {
            event.preventDefault(); // Don't let this button submit the form
            console.log('Loggin in...');
            var closure = this;

			$.ajax({
				xhrFields: {
        			withCredentials: true
    			},
				url : "http://mentorina.staging.dpm.co.com/login",
				dataType : "json",
				type : "POST",
				data : {
				_token : sessionStorage._token,
				identifier : "GeorgeS",
				password : "abcd1234"
				},
				success : function ( data ) {
					//sessionStorage._token = r._token;
					//console.log( r, sessionStorage._token );
					console.log('success', data);
					window.location.hash = "profile";
				},
   
                error: function (xhr, status, error) {
                    alert(status);
                }
            });
	   
        },

        render:function () {
            var compiledTemplate = _.template( loginTemplate );
            $(this.el).html(compiledTemplate);
            return this;
        }
    });

    return loginView;
});
