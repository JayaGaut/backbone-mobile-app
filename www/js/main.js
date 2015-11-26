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
    jquery: 'js/libs/jquery/jquery.min',
    underscore: 'js/libs/underscore.min',
    backbone: 'js/libs/backbone.min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});



 