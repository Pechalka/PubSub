define(["knockout", "text"], function (ko) {
    return function (file, callback, initData) {
        var s = this;
        s.data = ko.observable(null);
        s.html = ko.observable(null);
        s.setVar = function (i, v) {
            var data = s.data();
            data[i] = v;
            s.data(data);
        };

        require(["/app/modules/" + file + ".js", "text!/app/templates/" + file + ".html"],
            function (Module, html) {
                s.data(typeof Module === "function" ? new Module(initData) : Module);
                s.html(html);

                if (s.data().init && typeof s.data().init == "function")
                    s.data().init(initData);

                if (callback && typeof callback === "function")
                    callback(s);
                
            });

    };
});