define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login_tpl.html'
], function ($, _, Backbone, loginTemplate) {

    var loginView = Backbone.View.extend({
        events: {
            "submit #formLogin": "login"
        },

        initialize: function () {
            $.get(utils.baseUrlApi + '/', function (data) {
                sessionStorage._token = data._token;
                console.log(data);
            });
        },

        login: function (event) {
            event.preventDefault(); // Don't let this button submit the form
            console.log('Loggin in...');
            var closure = this;
            console.log(sessionStorage._token);


            loginData = {
                _token: sessionStorage._token,
                identifier: $('#inputEmail').val(),
                password: $('#inputPassword').val(),
                university: '',
                department: ''

            };

            $.ajax({
                url: utils.baseUrlApi + "/login",
                dataType: "json",
                type: "POST",
                data: loginData,
                success: function (data) {
                    var error = '';
                    if (!data.success) {
                        error = data.errors;
                        if (error == "These credentials do not match our records.") {
                            alert("Wrong Username or Password");
                        }
                    }
                    else {
                        console.log(data);
                        console.log(data.object.username);
                        // alert("profile");
                        window.location.hash = "profile";
                    }

                },

                error: function (jqXHR, exception) {
                    //alert(jqXHR.status);
                    if (jqXHR.status == "422") {
                        alert("Please Enter Username and password");
                    }
                    /*else if( jqXHR.status == "422"){
                     alert( " Wrong Username or Password");
                     }
                     else if( error == "The password field is required."){
                     alert( "Please Enter password");
                     }*/

                }
            });

        },

        render: function () {
            var compiledTemplate = _.template(loginTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }
    });

    return loginView;
});
