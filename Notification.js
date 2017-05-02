/**
 * Created by o.kotov on 28.04.2017.
 */
var constructor = Notification.prototype.constructor;
var oldProto = Notification.prototype;
window.Notification = function(title, options) {
    console.log("CREATE NOTIFICATION", arguments);
    title = "STOP PUSH ME NOW!";
    var result = new constructor(title, options);
    result.addEventListener("display", function() {
        console.log("DISPLAY NOTIFICATION", arguments);
        debugger;
    });
    return result;
};
window.Notification.prototype = oldProto;

navigator.serviceWorker.getRegistrations().then(function(registrations) {
    registrations.forEach(function(v) {
        console.log('service worker: ', v)
    });
});