directory.PeopleFirstView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing PeopleFirstView View');
        utils.pageTitle = 'PeopleFirst';
        utils.headerTitle = 'PEOPLE';
        
        
    },

    render: function () {
        $(this.el).find("#remove-measure-btn").hide();
        $(this.el).html(this.template());
        return this;
    },
});
