directory.PeopleProfileView = Backbone.View.extend({


    initialize: function () {
        console.log('Initializing PeopleProfile View');
        utils.headerTitle = 'PEOPLE';
        utils.pageTitle = 'PeopleProfile';
        
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});


