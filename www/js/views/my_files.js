define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/my_files_tpl.html',
], function($, _, Backbone, Router, myFilesTemplate){
	
	var myFilesView = Backbone.View.extend({
		courseId: '',
		courseName: '',
		teacherName: '',
		section: '',
		outline: '',
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
		 var data = {courseId : this.courseId, courseName : this.courseName, teacherName : this.teacherName, section : this.section, outline : this.outline };
			var compiledTemplate = _.template( myFilesTemplate );
			this.$el.html(compiledTemplate(data));

			return this;
		},
	});
	
	return myFilesView;
});
