define(function () {
        var out = "<div class='col-sm-12 col-md-12 col-lg-12'> <table class=\"table table-striped table-bordered table-condensed small\">";
        out += "<thead><tr><th>Título</th><th class=\"col-md-2\">Autor(es)</th>" +
            "<th>Género</th><th>Preço</th><th>Vendas</th>" +
            "<th>Notas</th><th>Data de Publicação</th></tr></thead>";
        out += "<tbody>";
        var i;
        getTitles.sort(function (a, b) {
            return parseFloat(b.ytd_sales) - parseFloat(a.ytd_sales);
        });

        uniques = [];
        for (var i = 1;i < 13; i++) {
            if (getTitles[i].title != getTitles[i - 1].title) {
                out += '<tr><td>' + getTitles[i].title + '</td><td>';
                for (var j = 0; j < getTitles[i].authors.length; j++) {
                    if (j > 0)
                        out += "<br />";
                    out += "<i class=\"fa fa-user\"></i> " + getTitles[i].authors[j];
                }
                out += "</td><td>";
                out += getTitles[i].type + '</td><td>' +
                getTitles[i].price + '</td><td>' +
                getTitles[i].ytd_sales + '</td><td>' +
                getTitles[i].notes + '</td><td>' +
                getTitles[i].pubdate + '</td></tr>';
                uniques.push(getTitles[i].title);
            }
            else {
            }

        }
        
        
        out += "</tbody>";
        out += "</table></div>";
    return {
        out
    }
});