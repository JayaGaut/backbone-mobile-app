directory.ChoosePeopleView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing ChoosePeopleView View');
        utils.headerTitle = 'PEOPLE';
        utils.pageTitle = 'ChoosePeople';
        
    },

    render: function () {
        $(this.el).find("#remove-measure-btn").hide();
        $(this.el).html(this.template());
        return this;
    },
});
