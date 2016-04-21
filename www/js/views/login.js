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
                            url : "http://mentorinav2.staging.devstdlol.com/login",
                            type : "POST",
                            data : {
							_token : "c6Vowmo5hA6peFT9mCyEAUWhHYih3AvYi0GxOYQS",
							username : "George",
							password : "abcd1234"},
                            dataType : 'json',
                            /*headers: { 'Accept': 'application/json',
                                       'X-Requested-With': 'XMLHttpRequest'
									 },*/
                            success : function ( r ) {
                                //sessionStorage._token = r._token;
                                //console.log( r, sessionStorage._token );
								alert(sessionStorage._token);
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
