define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/my_files_tpl.html',
], function($, _, Backbone, Router, myFilesTemplate){
	
	var myFilesView = Backbone.View.extend({
		router: {},
		events: {},
		
		initialize: function () {
			utils.pageTitle = 'MyFiles';
			utils.headerTitle = 'My Files';
			$.ajaxSetup({
				xhrFields: {
			    	withCredentials: true
				},
			});
		},

	 render: function() {
			var compiledTemplate = _.template( myFilesTemplate );
			this.$el.html(compiledTemplate);

			return this;
		},
	});
	
	return myFilesView;
});
