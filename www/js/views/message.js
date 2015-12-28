define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/message_collection',
  'text!templates/message_tpl.html'
], function($, _, Backbone, Router, MessageCollection, messageTemplate){
	
	var messageView = Backbone.View.extend({
		el: '#message_list',
		router: {},
		events: {},
		initialize: function () {
			utils.pageTitle = 'Message';
			utils.headerTitle = 'MESSAGES';
			this.collection = new MessageCollection();
			this.listenTo(this.collection, 'reset', this.addAll);
			this.collection.fetch();
			/*
			this.collection.fetch().done(function(){
			  self.render();
			});
			*/
		},
		
		addAll: function (messageModel) {
			this.collection.each(function(messageModel) {
			var messageViewInst = new messageView({ model: messageModel });
			$el.append(view.render().el);
			});
		},
	
		render: function () {
			var compiledTemplate = _.template( messageTemplate );
			$(this.el).html(compiledTemplate);
			//$el.html(compiledTemplate);
			return this;
		},
	});
	
	return messageView;
});
//http://stackoverflow.com/questions/16533440/backbone-js-iterate-a-collection
//http://stackoverflow.com/questions/16646526/what-is-difference-between-el-and-el-in-backbone-js-view
//https://github.com/tastejs/todomvc/blob/master/examples/backbone_require/js/views/app.js
//http://backbonejs.org/#Model-url
//http://backbonejs.org/#Model-save
//http://backbonejs.org/#Model-isValid