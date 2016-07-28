var utils = {
	baseUrlApi: 'http://mentorinav3.staging.dpm.co.com',
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
	require:'libs/require/require',
    templates: '../tpl'
  }

});

require([
    'jquery', 
    'app', // Load our app module and pass it to our definition function
], function($, App){
    //this ajaxsetup is required only once.
    $.ajaxSetup({
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
		xhrFields: {
					withCredentials: true
		}
		
    });

/*$.get(utils.baseUrlApi + '/', function ( data ) {
		    sessionStorage._token = data._token;
			console.log(data);
		
	});*/
    // The "app" dependency is passed in as "App"
    App.initialize();
});





 