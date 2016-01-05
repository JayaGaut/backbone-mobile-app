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
			  var loginData = {
				username : $('#inputEmail').val(),
				password : $('#inputPassword').val(),
			  }, url;
		  	url = utils.baseUrl+'/api/user/auth/'+loginData.username+'/'+loginData.password;
            /*var url = utils.baseUrl+'/api/user/auth/'+$('#inputEmail').val()+'/'+$('#inputPassword').val();*/
              console.log('Loggin in... ');
             
              var closure = this;

              $.ajax({
                  url: url,
                  contentType: 'application/json',
                  dataType: 'json',
                  type: 'POST',
                  success: function (data) {
                      if ((data.name == $('#inputEmail').val()) && (data.password == $('#inputPassword').val())) {

                          utils.idUser = data.id;
                          sessionStorage.idUser = data.id;
						  
						  
					//alert(sessionStorage._token);	  
				    $.ajax({
                    url : utils.baseUrlApi + '/login',
                    type : 'POST',
                    data : loginData,
                    dataType : 'json',
                    headers: { 'X-CSRF-TOKEN': sessionStorage._token },
                    success : function ( dpmData ) {

                    window.location.hash = "profile";
                    },
                   
                  });
						       
                      }
                      else {
                          $('.alert-error').text("unsucces").show();
                          alert('Your username or password is invalid.');
                      }  
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
