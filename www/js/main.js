var utils = {
    baseUrl: 'http://54.200.51.244:8080',
	baseUrlApi: 'http://mentorina.staging.devstdlol.com/dpm/api',
    headerTitle: '',
    pageTitle: '',
    idUser: '',
    idStudent: '',
    userName: '',
    courses: [],
    allCourses: [],
	_token: ''
};

require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone.min',
    templates: '../tpl'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
	
	$.get( utils.baseUrlApi + '/start', function ( data ) { 
	 
		sessionStorage._token = data._token;
		alert(sessionStorage._token);
			
	});
  // The "app" dependency is passed in as "App"
  App.initialize();
});





 