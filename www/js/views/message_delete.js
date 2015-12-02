directory.MessageDeleteView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MessageDeleteView View');
        utils.pageTitle = 'MessageDelete';
        utils.headerTitle = 'MESSAGES';
        
  
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
