getAuthors = [];
$.when(getJson("http://192.168.160.36/JSON/getAuthors.aspx", {})).done(function (a1) {
    var arr = a1;
    getAuthors = arr;
});

getTitles = [];
$.when(getJson("http://192.168.160.36/JSON/getTitles.aspx", {})).done(function (a1) {
    var arr = a1;
    getTitles = arr;
});

function getJson(myurl, mydata) {
    return $.ajax({
        type: "GET",
        url: myurl,
        async: false,
        data: mydata,
        dataType: "jsonp",
        error: function (xhr, status, err) { }
    });
}



requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'ITW Starter Kit';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});