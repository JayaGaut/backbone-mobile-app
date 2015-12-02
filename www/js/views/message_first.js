directory.MessageFirstView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MessageFirstView View');
        utils.pageTitle = 'MessageFirst';
        utils.headerTitle = 'MESSAGES';
        
  
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
