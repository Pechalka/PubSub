require.config({
    paths: {
        "jquery": "/Scripts/jquery-1.8.2.min",
        "knockout": "/Scripts/knockout-2.1.0",
        "text": "/Scripts/text",
        "sammy": "/Scripts/sammy/sammy.min",
        "stringTemplateEngine": "/app/libs/stringTemplateEngine",
        "state" : "/app/state",
        "loader": "/app/loader",
        "mediator": "/app/Mediator",
        "app" : "/app/modules/app",
        "menu" : "/app/modules/menu"
    },
    shim: {
        "sammy": ["jquery"],
        "stringTemplateEngine" : ["knockout"]
    }
});


require(["text", "state", "knockout", "stringTemplateEngine", "dispatcher"], function (app, State, ko) {
    var sm = new State("app", function (state) {
        ko.applyBindings(state);
    });
});