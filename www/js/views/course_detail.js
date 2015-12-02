directory.CourseDetailView = Backbone.View.extend({
    course: '',
	profName: '',
    initialize: function () {
        console.log('Initializing CourseDetailView View');
        utils.pageTitle = 'CourseDetail';
        utils.headerTitle = 'MY COURSES';
		
    },
	
	renderCourseDetail: function (){
		//alert(this.course.professor_id);
		var closure = this;
		var url = utils.baseUrl + '/api/professor/' + this.course.professor_id ;
               closure.profName = '';
                $.ajax({
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
						closure.profName = data.firstName + ' ' + data.lastName ;
						closure.render();
                    },
                    error: function (xhr, status, error) {
                        alert(status);
                    }
                });
	},

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
