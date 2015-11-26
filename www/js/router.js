app.Router = Backbone.Router.extend({

    routes: {
	    "": "login",
	    "profile": "profile",
	    "peoplefirst": "peoplefirst",
	    "peopleprofile": "peopleprofile",
	    "messagefirst": "messagefirst",
	    "messagesecond": "messagesecond",
	    "messagereply": "messagereply",
	    "choosepeople": "choosepeople",
	    "courses": "courses",
	    "coursedetail/:id/:slot": "coursedetail",
	    "coursenotification": "courseNotification",
		"messagedelete": "messagedelete",
		"achievement/:name": "achievement",
		"teacherreports": "teacherReports",
		"menacademy": "menAcademy",
		"academydetail": "academyDetail",
		"discussionfirst": "discussionFirst",
		"discussionsecond": "discussionSecond"
    },

   initialize: function () {
        app.headerView = new app.HeaderView();
       //$('.header').html(app.headerView.render().el);
   },
  
   initUser: function () {
       
   },
   login: function () {
       
        app.loginView = new app.LoginView();
        app.loginView.render();
       
        $("#content").html(app.loginView.el);
    },

    profile: function () {
        app.profileView = new app.ProfileView();
        app.profileView.render();
		
		app.headerView = new app.HeaderView();
		app.headerView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.profileView.el);
        
    },

    peoplefirst: function () {
        app.peoplefirstView = new app.PeopleFirstView();
        app.peoplefirstView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.peoplefirstView.el);

    },

    peopleprofile: function () {
        app.peopleprofileView = new app.PeopleProfileView();
        app.peopleprofileView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.peopleprofileView.el);

    },

    messagefirst: function () {
        app.messagefirstView = new app.MessageFirstView();
        app.messagefirstView.render();
		
		app.headerView = new app.HeaderView();
		app.headerView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.messagefirstView.el);

    },

    messagesecond: function () {
        app.messagesecondView = new app.MessageSecondView();
        app.messagesecondView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.messagesecondView.el);

    },
    
    messagereply: function () {
        app.messagereplyView = new app.MessageReplyView();
        app.messagereplyView.render();

       $('.header').html(app.headerView.render().el);
       $("#content").html(app.messagereplyView.el);

    },

    choosepeople: function () {
        app.choosepeopleView = new app.ChoosePeopleView();
        app.choosepeopleView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.choosepeopleView.el);

    },

    courses: function () {
        app.coursesView = new app.CoursesView();
        app.coursesView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.coursesView.el);

    },

    coursedetail: function (id, slot) {
        app.coursedetailView = new app.CourseDetailView();
        app.coursedetailView.course = utils.courses[slot];
        app.coursedetailView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.coursedetailView.el);
		app.coursedetailView.renderCourseDetail();

    },
	
	 achievement: function (name) {
        app.achievementView = new app.AchievementView();
		app.achievementView.courseName = name;
        app.achievementView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.achievementView.el);
		app.achievementView.renderChart(app.achievementView.tIdx);

    },
	
	teacherReports: function () {
        app.teacherReportsView = new app.TeacherReportsView();
        app.teacherReportsView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.teacherReportsView.el);
		//app.achievementView.renderReports();
    },
	
	menAcademy: function () {
        app.menAcademyView = new app.MenAcademyView();
        app.menAcademyView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.menAcademyView.el);
    },
	
	academyDetail: function () {
        app.academyDetailView = new app.AcademyDetailView();
        app.academyDetailView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.academyDetailView.el);
    },
	
	discussionFirst: function () {
        app.discussionFirstView = new app.DiscussionFirstView();
        app.discussionFirstView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.discussionFirstView.el);
    },
	
	discussionSecond: function () {
        app.discussionSecondView = new app.DiscussionSecondView();
        app.discussionSecondView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.discussionSecondView.el);
    },
	
	messagedelete: function () {
        app.messagedeleteView = new app.MessageDeleteView();
        app.messagedeleteView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.messagedeleteView.el);


    },

    courseNotification: function () {
        app.courseNotificationView = new app.CourseNotificationView();
        app.courseNotificationView.render();

        $('.header').html(app.headerView.render().el);
        $("#content").html(app.courseNotificationView.el);

    },
	
});
