define(["menu", "knockout", "mediator"], function (Menu, ko, mediator) {
    return function (data) {
        var self = this;
        self.content = ko.observable(null);
        self.leftMenu = new Menu({
            items: ["Home", "Profile", "Messages", "letersTemplates"],
            eventName: "leftMenu:selected",
            selected: "Home"
        });


        mediator.subscribe("catalogLayout:changeContent", function (content) {
            self.content(content);
        });
    };
});