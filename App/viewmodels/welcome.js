define(function () {
    b = getTitles;
    out = " ";
    used = [];
    for (var i = 0; i < 3; i++) {
        z = Math.floor((Math.random() * b.length));
        console.log(z);
        console.log(used);
        while (used.indexOf(z) != -1) {
            z = Math.floor((Math.random() * b.length));
        }
        out += '<div class="col-lg-4 col-sm-12 col-md-6" style=""><center><img src="App/m_media/pictures/littlebook.png" alt="..."><p>'
            + "<b>" + b[z].title + "</b><p>" + "Autor: " + b[z].authors + "<p>"
            + '<button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#myModal' + z + '">Detalhes</button>'
            + '<div class="modal fade" id="myModal' + z + '" role="dialog">'
            + '<div class="modal-dialog">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
        out += '<h4 class="modal-title"><b>Título: </b>' + b[z].title + '</h4></div>'
            + '<div class="modal-body">'
            + b[z].notes + '<hr />' 
            + '<p style="text-align: left"><b>Género:</b> ' + b[z].type + '<br>'
            + '<b>Data de publicação: </b>' + b[z].pubdate + '<br>'
            + '<b>Vendas:</b> '+b[z].ytd_sales+'</p>'
            + '</div>'
            + '<div class="modal-footer">'
            + '</div></div></div></div></div> ';
        used.push(z);
    }
    return {
        tast :  out,
    };
});
