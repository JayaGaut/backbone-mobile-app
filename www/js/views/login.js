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
          },

          login:function (event) {
			  
		 event.preventDefault(); // Don't let this button submit the form
		 console.log('Loggin in...');
		 var closure = this;

		/*loginData = {
			identifier : $('#inputEmail').val(),
			password : $('#inputPassword').val(),
			_token   : sessionStorage._token
		};*/
          
			$.ajax({
				
				url : "http://mentorina.staging.dpm.co.com/login",
				dataType : "json",
				type : "POST",
				xhrFields: {
					withCredentials: true
				},
				data : {
					_token: sessionStorage._token,
					identifier: "GeorgeS",
					password: "abcd1234"
				},
				success : function ( data ) {
					//console.log( r, sessionStorage._token );
					console.log( data );
					window.location.hash = "profile";
					/*if ((data.name == $('#inputEmail').val()) && (data.password == $('#inputPassword').val())) {
						console.log('success', data);
					    window.location.hash = "profile";
					}*/
					
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
