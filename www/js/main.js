require.config({
  paths: {
    jquery: 'js/libs/jquery/jquery.min',
    underscore: 'js/libs/underscore/underscore.min',
    backbone: 'js/libs/backbone/backbone.min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});

/*
var utils = {
    baseUrl: 'http://54.200.51.244:8080',
    headerTitle: '',
    pageTitle: '',
    idUser: '',
    idStudent: '',
    userName: '',
    courses: [],
	allCourses: []
};


directory.Router = Backbone.Router.extend({

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
        directory.headerView = new directory.HeaderView();
       //$('.header').html(directory.headerView.render().el);
   },
  
   initUser: function () {
       
   },
   login: function () {
       
        directory.loginView = new directory.LoginView();
        directory.loginView.render();
       
        $("#content").html(directory.loginView.el);
    },

    profile: function () {
        directory.profileView = new directory.ProfileView();
        directory.profileView.render();
		
		directory.headerView = new directory.HeaderView();
		directory.headerView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.profileView.el);
        
    },

    peoplefirst: function () {
        directory.peoplefirstView = new directory.PeopleFirstView();
        directory.peoplefirstView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.peoplefirstView.el);

    },

    peopleprofile: function () {
        directory.peopleprofileView = new directory.PeopleProfileView();
        directory.peopleprofileView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.peopleprofileView.el);

    },

    messagefirst: function () {
        directory.messagefirstView = new directory.MessageFirstView();
        directory.messagefirstView.render();
		
		directory.headerView = new directory.HeaderView();
		directory.headerView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.messagefirstView.el);

    },

    messagesecond: function () {
        directory.messagesecondView = new directory.MessageSecondView();
        directory.messagesecondView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.messagesecondView.el);

    },
    
    messagereply: function () {
        directory.messagereplyView = new directory.MessageReplyView();
        directory.messagereplyView.render();

       $('.header').html(directory.headerView.render().el);
       $("#content").html(directory.messagereplyView.el);

    },

    choosepeople: function () {
        directory.choosepeopleView = new directory.ChoosePeopleView();
        directory.choosepeopleView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.choosepeopleView.el);

    },

    courses: function () {
        directory.coursesView = new directory.CoursesView();
        directory.coursesView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.coursesView.el);

    },

    coursedetail: function (id, slot) {
        directory.coursedetailView = new directory.CourseDetailView();
        directory.coursedetailView.course = utils.courses[slot];
        directory.coursedetailView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.coursedetailView.el);
		directory.coursedetailView.renderCourseDetail();

    },
	
	 achievement: function (name) {
        directory.achievementView = new directory.AchievementView();
		directory.achievementView.courseName = name;
        directory.achievementView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.achievementView.el);
		directory.achievementView.renderChart(directory.achievementView.tIdx);

    },
	
	teacherReports: function () {
        directory.teacherReportsView = new directory.TeacherReportsView();
        directory.teacherReportsView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.teacherReportsView.el);
		//directory.achievementView.renderReports();
    },
	
	menAcademy: function () {
        directory.menAcademyView = new directory.MenAcademyView();
        directory.menAcademyView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.menAcademyView.el);
    },
	
	academyDetail: function () {
        directory.academyDetailView = new directory.AcademyDetailView();
        directory.academyDetailView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.academyDetailView.el);
    },
	
	discussionFirst: function () {
        directory.discussionFirstView = new directory.DiscussionFirstView();
        directory.discussionFirstView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.discussionFirstView.el);
    },
	
	discussionSecond: function () {
        directory.discussionSecondView = new directory.DiscussionSecondView();
        directory.discussionSecondView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.discussionSecondView.el);
    },
	
	messagedelete: function () {
        directory.messagedeleteView = new directory.MessageDeleteView();
        directory.messagedeleteView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.messagedeleteView.el);


    },

    courseNotification: function () {
        directory.courseNotificationView = new directory.CourseNotificationView();
        directory.courseNotificationView.render();

        $('.header').html(directory.headerView.render().el);
        $("#content").html(directory.courseNotificationView.el);

    },
	
});
*/
 