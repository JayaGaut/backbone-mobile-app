directory.DiscussionSecondView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing DiscussionSecondView View');
        utils.pageTitle = 'DiscussionSecond';
        utils.headerTitle = 'DISCUSSION';
        
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
