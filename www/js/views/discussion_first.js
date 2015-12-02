directory.DiscussionFirstView = Backbone.View.extend({
    courses: [],
    //url : utils.baseUrl + '/api/course/byUserId/' + utils.idUser,
    events: {
        "click #buttonCurrent": "clickCurrent",
        "click #buttonPast": "clickPast"
    },

    initialize: function () {
        console.log('Initializing DiscussionFirstView View');
		utils.pageTitle = 'DiscussionFirst';
        utils.headerTitle = 'DISCUSSION'; 
	},
        /*var url = utils.baseUrl + '/api/course/findByStudentId/' + sessionStorage.idStudent;
        var closure = this;
                closure.courses = [];
                $.ajax({
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        //alert('test');
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();
                        if (dd < 10) {
                            dd = '0' + dd
                        }
                        if (mm < 10) {
                            mm = '0' + mm
                        }

                        today = yyyy + '-' + mm + '-' + dd;
                        for (var i = 0, len = data.length; i < len; i++) {
                            var myDate = data[i].endDate;
                            if (myDate > today) {
                                closure.courses.push(data[i]);
                                utils.courses = closure.courses;
                                closure.render();
                            }
                        }
                    },
                    error: function (xhr, status, error) {
                        alert(status);
                    }
                });
                closure.render();
    },*/
    clickCurrent: function (event) {
		$('#buttonPast').removeClass('active-link');
        $("#buttonCurrent").addClass("active-link");
	},
       /* var url = utils.baseUrl + '/api/course/findByStudentId/' + sessionStorage.idStudent;
        var closure = this;
        closure.courses = [];
        $.ajax({
            url: url,
            contentType: 'application/json',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd
                }
                if (mm < 10) {
                    mm = '0' + mm
                }

                today = yyyy + '-' + mm + '-' + dd;
                for (var i = 0, len = data.length; i < len; i++) {
                    var myDate = data[i].endDate;
                    if (myDate > today) {
                        closure.courses.push(data[i]);
                        utils.courses = closure.courses;
                        closure.render();
                    }
                }
            },
            error: function (xhr, status, error) {
                alert(status);
            }
        });
        closure.render();   
    },*/
    clickPast: function () {
		$('#buttonCurrent').removeClass('active-link');
        $('#buttonPast').addClass('active-link');   
	},
        /*var url = utils.baseUrl + '/api/course/findByStudentId/' + sessionStorage.idStudent;
        var closure = this;
        closure.courses = [];
        $.ajax({
            url: url,
            contentType: 'application/json',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();
                if(dd<10) {
                    dd='0'+dd
                } 
                if(mm<10) {
                    mm='0'+mm
                } 

                today = yyyy+'-'+mm+'-'+dd;
                for (var i=0, len=data.length; i < len; i++) {
                    var myDate = data[i].endDate;
                    if(myDate < today){
                        closure.courses.push(data[i]);
                        utils.courses = closure.courses;
						closure.render();
						$('#buttonCurrent').removeClass('active-link');
                        $('#buttonPast').addClass('active-link');   
                    }
                }
            },
            error: function (xhr, status, error) {
                alert(status);
            }
        });
        closure.render();
    },*/
    render: function () {
        $(this.el).html(this.template());
        return this;
        
    },
});


