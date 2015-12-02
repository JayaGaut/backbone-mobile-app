directory.MessageReplyView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MessageReplyView View');
        utils.pageTitle = 'MessageReply';
        utils.headerTitle = 'MESSAGES';
        
        
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
