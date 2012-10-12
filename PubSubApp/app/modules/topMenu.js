define(["menu"], function (Menu) {
    return function () {
        this.topMenu = new Menu({
            items : ["1", "2", "3"],
            eventName : "topMenu:selected",
            seleced: "1"
        });
    };
});