PlaHold = "";
function AuthSrc() {
    var aut;
    aut = document.getElementById("autor").value;
    aut = aut.toLowerCase();
    var i;
    var counter;
    var lowerb;
    counter = 0;
    if (aut == "") {
        document.getElementById("demo2").innerHTML = PlaHold;
        return "nada";
    }
    if (aut.length > 0) {
        au = "";
        for (i = 0; i < getAuthors.length; i++) {
            lowerb = getAuthors[i].name;
            console.log(lowerb);
            lowerb = lowerb.toLowerCase();
            hits = lowerb.indexOf(aut);

            if (hits > -1) {
                
                counter++;

                    im = 'http://192.168.160.36/images/' + getAuthors[i].ID + '.png';
                    au += '<div class="col-sm-12 col-md-6 col-lg-4"> <table class="table table-striped table-bordered">'
                    + '<tr>'
                    + '<th> <center><img src=' + im + ' alt="Smiley face" height="128px" width="128px"></center></th>'
                    + '<th><h2>' + getAuthors[i].name + '</h2></th>'
                    + '</tr>'
                    + '<tr>'
                    + '<td><center>' + getAuthors[i].state + '</center></td>'
                    + '<td><center>' + getAuthors[i].city + '</center></td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td colspan="2"><center>' + getAuthors[i].address + '</center></td>'
                    + '</tr><tr><td colspan="4">'      
                    au += '<center><button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal' + i + '" onClick="SaberMais(\'' + getAuthors[i].name + '\')" >Obras do(a) Autor</button></center>'
                    + '<div class="modal fade" id="myModal' + i + '" role="dialog">'
                    + '<div class="modal-dialog modal-lg">'
                    + '<div class="modal-content">'
                    + '<div class="modal-header">'
                    + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
                    + '<center><h4 class="modal-title">Obras de <b>' + getAuthors[i].name + '</b></h4></center>'
                    + '</div>'
                    + '<div class="modal-body">'
                    + '<p id="' + getAuthors[i].name + '">Aconteceu um erro!</p>'
                    + '</div>'
                    + '<div class="modal-footer">'
                    + ''
                    + '</div></div></div></div></div></td></tr>';
                    au += "</table></div>";
                }
            if (counter == 0) { document.getElementById("demo2").innerHTML = "<div class= 'alert alert-danger'><center><b>Nao encontrou resultados</b></center></div>"; }
                else {
                    document.getElementById("demo2").innerHTML = au;
                    }
                }
            }
}

function SaberMais(x) {
    console.log(x);
    books = [];
    taipe = [];
    price = [];
    for (var i = 0; i < getTitles.length; i++) {
        if (getTitles[i].authors.indexOf(x) > -1) {
            if (books.indexOf(getTitles[i].title) == -1) {
                books.push(getTitles[i].title);
                taipe.push(getTitles[i].type);
                price.push(getTitles[i].price);
            }
        }
    }
    if (books[0] == undefined) {
        document.getElementById(x).innerHTML = "<center>Ele(a) não publicous livros neste site.</center>";
    }
    else {
        document.getElementById(x).innerHTML = "";
        for (var i = 0; i < books.length; i++) {
            document.getElementById(x).innerHTML += '<table class="table table-striped"><tr><th colspan="2"><center><h4>' + books[i] + '</h4></center></th></tr>'
            + '<tr><td><center><b>Tipo: </b>' + taipe[i] + '</center></td><td><center><b>Preço: </b>'+ price[i] +'</center></td></tr>'
            + '</table>'
        }
    }
        
}



define(function () {

    au = "<center style='color: #672e09'><h2>Autores em destaque</h2></center><hr />";
    used2 = [];
    for (var i = 0; i < 3; i++) {
        z = Math.floor((Math.random() * getAuthors.length));
        while (used2.indexOf(z) != -1) {
            console.log("Let's try this again.");
            z = Math.floor((Math.random() * getAuthors.length));
        }
        im = 'http://192.168.160.36/images/' + getAuthors[z].ID + '.png';
        au += '<div class="col-sm-12 col-md-6 col-lg-4"> <table class="table table-striped table-hover table-bordered">'
        + '<tr>'
        + '<th> <center><img src=' + im + ' alt="Smiley face" height="128px" width="128px"></center></th>'
        + '<th><h2>' + getAuthors[z].name + '</h2></th>'
        + '</tr>'
        + '<tr>'
        + '<td><center>' + getAuthors[z].state + '</center></td>'
        + '<td><center>' + getAuthors[z].city + '</center></td>'
        + '</tr>'
        + '<tr>'
        + '<td colspan="2"><center>' + getAuthors[z].address + '</center></td>'
        + '</tr><tr><td colspan="4">';
        au += '<center><button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal' + z + '" onClick="SaberMais(\'' + getAuthors[z].name + '\')" >Obras do(a) Autor</button></center>'
        + '<div class="modal fade" id="myModal'+z+'" role="dialog">'
        + '<div class="modal-dialog modal-lg">'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
        + '<center><h4 class="modal-title">Obras de <b>' + getAuthors[z].name + '</b></h4></center>'
        + '</div>'
        + '<div class="modal-body">'
        + '<p id="' + getAuthors[z].name + '">Uh oh.</p>'
        + '</div>'
        + '<div class="modal-footer">'
        + ''
        + '</div></div></div></div></div></td></tr>';
        au += "</table></div>";
        used2.push(z);
    }
    //data-dismiss="modal"
    PlaHold = au;
    return {
        au
    }
});