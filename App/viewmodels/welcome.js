define(function () {
    b = getTitles;
    out = " "
    used = []
    for (var i = 0; i < 3; i++) {
        z = Math.floor((Math.random() * b.length));
        console.log(z);
        console.log(used);
        while (used.indexOf(z) != -1) {
            console.log("Let's try this again.");
            z = Math.floor((Math.random() * b.length));
        }
        out += '<div class="col-lg-4 col-sm-12 col-md-6" style=""><center><img src="App/m_media/pictures/littlebook.png" alt="..."><p>'
            + "<b>" + b[z].title + "</b><p>" + "Autor: " + b[z].authors + "<p>"
            + '<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal' + z + '">Detalhes</button>'
            + '<div class="modal fade" id="myModal' + z + '" role="dialog">'
            + '<div class="modal-dialog">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
        out += '<h4 class="modal-title">About <b>' + b[z].title + '</b></h4></div>'
            + '<div class="modal-body">'
            + b[z].notes + '<hr />' 
            + '<p style="text-align: left">Genre: ' + b[z].type + '<br>'
            + 'Publication Date: ' + b[z].pubdate + '<br>'
            + 'Sales: '+b[z].ytd_sales+'</p>'
            + '</div>'
            + '<div class="modal-footer">'
            + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
            + '</div></div></div></div></div> ';
        used.push(z);
    }
    return {
        tast :  out,
        displayName : 'Bemvindo à ITW App!',
        description : 'TESTE123',
        features : [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS'
        ]
    };
});
