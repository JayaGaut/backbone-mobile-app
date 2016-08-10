define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/profile_tpl.html'
], function($, _, Backbone, profileTemplate) {

	var ProfileView = Backbone.View.extend({
	
		initialize: function () {
			utils.pageTitle = 'Profile';
			utils.headerTitle = 'Profile';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('profile..');

		},
	
		render: function () {
			var closure = this;
			//var that = this;

			$.ajax({
				url : utils.baseUrlApi + "/student/profile",
				dataType : "json",
				type : "GET",
				success : function ( data ) {
					console.log( data );
					console.log( data.user.id );
                    //sessionStorage.idUser = data.user.meta.meta_name;
					//sessionStorage.img = data.user.avatar.url;
					if( data.user.avatar != null ){
						sessionStorage.urlAvatar = data.user.avatar.url;
						$('#avatar').attr('src',utils.baseUrlApi + sessionStorage.urlAvatar);
					}else {
						sessionStorage.urlAvatar = '';
						$('#avatar').attr('src','');
					}
					
					sessionStorage.UserName = data.user.first_name + ' ' + data.user.last_name;
					sessionStorage.FirstName = data.user.first_name;

					var compiledTemplate = _.template( profileTemplate);
		            closure.$el.html(compiledTemplate({urlAvatar: utils.baseUrlApi + sessionStorage.urlAvatar,UserName:sessionStorage.UserName}));
					//closure.$el.html(compiledTemplate({img: sessionStorage.img}));
					$('#UserName').text(sessionStorage.UserName);
					
				},
   
                error: function (xhr, status, error) {
                    alert(status);
                }
            });
			
		}
	});

	return ProfileView;

});

