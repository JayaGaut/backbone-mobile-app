directory.MessageSecondView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MessageSecondView View');
        utils.pageTitle = 'MessageSecond';
        utils.headerTitle = 'MESSAGES';
        
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
