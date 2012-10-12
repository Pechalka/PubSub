define(["mediator", "state", "jquery"], function (mediator, State, $) {
    var updateState = function (dataUrl, request, event, viewModelName) {
        $.get(dataUrl, request, function (data) {
            var p = new State(viewModelName,
                    function (state) {
                        mediator.publish(event, state);
                    }, data);
        });
    };

    var appChangeContentTo = function (viewModelName, model) {

        var p = new State(viewModelName,
            function (state) {
                mediator.publish("app:changeContent", state);
            }, model);
    };

    var cleanState = function() {
        mediator.publish("catalogLayout:changeContent", null);
    };

    mediator.subscribe("leftMenu:selected", function (newVal) {
        if (newVal == "letersTemplates")
            updateState("/home/GetDataLetersTemplates", '', "catalogLayout:changeContent", "letersTemplates");
        else
            cleanState("catalogLayout:changeContent");
    });

    mediator.subscribe("topMenu:selected", function (newVal) {
        if (newVal == "1") {
            cleanState("app:changeContent");            
            return;
        }

        $.get("/home/navigateTopMenu", { selectedItem: newVal }, function (data) {
            appChangeContentTo(data.ViewModelName, data.Model);
        });
    });
});

