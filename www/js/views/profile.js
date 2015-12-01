define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/profile_tpl.html'
], function($, _, Backbone, profileTemplate){

		var ProfileView = Backbone.View.extend({
		
			initialize: function () {
				console.log('Initializing ProfileView View');
				utils.pageTitle = 'Profile';
				utils.headerTitle = 'PROFILE';
				
			},
		
			render: function () {
				var compiledTemplate = _.template( profileTemplate );
                $(this.el).html(compiledTemplate);
				return this;
			}
		});

	return ProfileView;

});

