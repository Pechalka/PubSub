define([], function (obj) {
    var channels = {};
    if (!obj) obj = {};

    obj.subscribe = function (channel, subscription) {
        if (!channels[channel]) channels[channel] = [];
        channels[channel].push(subscription);
    };

    obj.publish = function (channel) {
        if (!channels[channel]) return;
        var args = [].slice.call(arguments, 1);
        for (var i = 0; i < channels[channel].length; i++) {
            channels[channel][i].apply(this, args);
        }
    };

    return obj;
});