define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/people_profile_tpl.html'
], function ($, _, Backbone, Router, peopleProfileTemplate) {

    var peopleProfileView = Backbone.View.extend({
        name: '',
        avatar: '',
        router: {},
        events: {},
        initialize: function () {
            console.log("peopleeeeeeee");
            utils.pageTitle = 'peopleProfile';
            utils.headerTitle = 'PEOPLE';
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });
        },

        render: function () {
            var info = {name: this.name, avatar: this.avatar};
            console.log(info);
            var compiledTemplate = _.template(peopleProfileTemplate);
            this.$el.html(compiledTemplate(info));

            return this;
        },
    });

    return peopleProfileView;
});

