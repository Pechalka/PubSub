define(["jquery", "knockout", "state", "mediator"], function ($, ko, State, mediator) {
    return function () {
        var app = this;
        app.topMenu = new State("topMenu", function (state) {
            state.setVar("app", app);
        });
        app.content = ko.observable(null);

        mediator.subscribe("app:changeContent", function (content) {
            app.content(content);
        });
    };
});