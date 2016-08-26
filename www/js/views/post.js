define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/post_tpl.html'
], function($, _, Backbone, postTemplate) {

	var PostView = Backbone.View.extend({
	
		initialize: function () {
			utils.pageTitle = 'Post';
			utils.headerTitle = 'Post';
            event.preventDefault(); // Don't let this button submit the form
            // console.log('profile..');

		},

		render: function () {
			var compiledTemplate = _.template( postTemplate );
			$(this.el).html(compiledTemplate);

			return this;
		}
	});

	return PostView;

});

