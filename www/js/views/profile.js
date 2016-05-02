define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/profile_tpl.html'
], function($, _, Backbone, profileTemplate) {

	var ProfileView = Backbone.View.extend({
	
		initialize: function () {
			//console.log('Initializing ProfileView View');
			utils.pageTitle = 'Profile';
			utils.headerTitle = 'PROFILE';
			
			//alert("10");
            event.preventDefault(); // Don't let this button submit the form
            console.log('profile..');
			
            var closure = this;
			var user='';
		},
	
		render: function () {
			var that = this;

			$.ajax({
				url : "http://mentorina.staging.dpm.co.com/student/profile",
				dataType : "json",
				type : "GET",
				success : function ( data ) {
					console.log( data );
                    sessionStorage.idUser = data.user.id;
					console.log( sessionStorage.idUser );
					var compiledTemplate = _.template( profileTemplate);
		            that.$el.html(compiledTemplate({userID: sessionStorage.idUser}));
				},
   
                error: function (xhr, status, error) {
                    alert(status);
                }
            });
			
			//return this;
		}
	});

	return ProfileView;

});

