directory.CourseNotificationView = Backbone.View.extend({
    initialize: function () {
        console.log('Initializing CourseNotificationView View');
        utils.pageTitle = 'CourseNotification';
        utils.headerTitle = 'NOTIFICATIONS';
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
