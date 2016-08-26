define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'text!templates/people_first_tpl.html'
], function($, _, Backbone, Router, peopleFirstTemplate){

    var peopleFirstView = Backbone.View.extend({
        people :[],
        test :[],
        router: {},
        events: {},
        initialize: function () {
            console.log("PEOPLE");
            utils.pageTitle = 'peopleFirst';
            utils.headerTitle = 'PEOPLE';
            // $.ajaxSetup({
            //     xhrFields: {
            //         withCredentials: true
            //     },
            // });
        },

        peopleIndex: function () {
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
            });

            var closure = this;
            var people = [];
            var test = [];
            $.ajax({
                url: utils.baseUrlApi + "/student/profile?peoples",
                dataType: "json",
                type: "GET",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                xhrFields: {
                    withCredentials: true,
                },
                success: function (data) {
                    closure.test = [];
                    closure.people = [];
                    closure.test = data.related_users;

                    function logArrayElements(object, array) {
                        closure.people.push(object);
                    }

                    closure.test.forEach(logArrayElements);
                     closure.render();

                },

                error: function (jqXHR, exception) {
                    console.log(jqXHR.status);

                }
            });

        },

        render: function() {
            console.log( this.people  );
            var compiledTemplate = _.template( peopleFirstTemplate );
            this.$el.html(compiledTemplate({people: this.people}));

            return this;
        },
    });

    return peopleFirstView;
});

