directory.AcademyDetailView = Backbone.View.extend({
    courses: [],
    //url : utils.baseUrl + '/api/course/byUserId/' + utils.idUser,
    events: {
		
    },

    initialize: function () {
        console.log('Initializing AcademyDetailView View');
		utils.pageTitle = 'AcademyDetail';
        utils.headerTitle = 'MENACADEMY';
    },
    render: function () {
        $(this.el).html(this.template());
        return this;
        
    },
});


