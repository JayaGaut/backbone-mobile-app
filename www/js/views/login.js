directory.LoginView = Backbone.View.extend({
    router: {},
    events: {
        "submit #formLogin": "login"
    },

    initialize: function () {
        
    },

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form
      
        var url = utils.baseUrl+'/api/user/auth/'+$('#inputEmail').val()+'/'+$('#inputPassword').val();
        console.log('Loggin in... ');
        console.log(this.router);
       
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
                    
                    $.ajax({
                        url: utils.baseUrl + '/api/student/findByUserId/' + utils.idUser,
                        contentType: 'application/json',
                        dataType: 'json',
                        type: 'GET',
                        success: function (data) {
                            sessionStorage.userName = data.firstName + ' ' + data.lastName;
                            sessionStorage.location = data.location;
                            sessionStorage.idStudent = data.id;
                            utils.idStudent = data.id;
                            utils.userName = data.firstName + ' ' + data.lastName; 
                            utils.location = data.location;
                            closure.render();
                            window.location= "#profile";
							
							$.ajax({
								url: utils.baseUrl + '/api/course/findByStudentId/' + sessionStorage.idStudent,
								contentType: 'application/json',
								dataType: 'json',
								type: 'GET',
								success: function (data) {
									utils.allCourses = data;
									sessionStorage.allCourses = data;
									closure.render();
								},
								error: function (xhr, status, error) {
									alert(status);
								}
							});
							closure.render();
											
                        },
                        error: function (xhr, status, error) {
                            alert(status);
                        }
                    });
                    closure.render();
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
        $(this.el).html(this.template());
        return this;
    }
});