var app = app || {};

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

require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore.min',
    backbone: 'libs/backbone.min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});



 