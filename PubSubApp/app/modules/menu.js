define(["knockout", "mediator"], function (ko, mediator) {
    return function (data) {
        data = data || {};
        data.items = data.items || [];
        data.eventName = data.eventName || "menu:selected";
        var menu = this;

        menu.items = ko.observableArray(data.items);
        menu.selected = ko.observable(data.seleced);


        menu.selectItem = function (newVal) {
            menu.selected(newVal);
            mediator.publish(data.eventName, newVal);
        };
    };
});