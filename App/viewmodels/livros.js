var placeholder;
   function procuragen(){
               var gen;
               gen=document.getElementById("genoro").value;            
               gen=gen.toLowerCase(); 
               var i;
               var k;
               var counter;
               counter=0;
               if (gen=="")
                {
                   document.getElementById("demo").innerHTML = placeholder;
                   return "nada";  
                }
               if (gen.length>0){
                   var out = "<div class='col-sm-12 col-md-12 col-lg-12'><table class=\"table table-striped table-bordered table-condensed small\">";
                       out += "<thead><tr><th>Título</th><th class=\"col-md-2\">Autor(es)</th>" +
                        "<th>Género</th><th>Preço</th><th>Vendas</th>" +
                           "<th>Descrição</th><th>Data Publicação</th></tr></thead>";
                   out += "<tbody>"; 
                   for (i = 0; i < getTitles.length; i++) {
                               lowerb=getTitles[i].type.toLowerCase();

                               console.log(lowerb);
                               hits=lowerb.indexOf(gen);
                               console.log(hits);
                   if (hits>-1)
{
                       counter++;
                      
                    
                        out += '<tr><td>' + getTitles[i].title + '</td><td>';
                   for (var j = 0; j < getTitles[i].authors.length; j++) {
                       if (j>0)
                           out += "<br />";
                       out += "<i class=\"fa fa-user\"></i> " + getTitles[i].authors[j];
}
                   out += "</td><td>";
                   out += getTitles[i].type + '</td><td>' +
                   getTitles[i].price + '</td><td>' +
                   getTitles[i].ytd_sales + '</td><td>' +
                   getTitles[i].notes + '</td><td>' +
                   getTitles[i].pubdate + '</td></tr>';
}
            

}
                    
}
               if (counter == 0) { document.getElementById("demo").innerHTML = "<div class= 'alert alert-danger'><center><b>Nao encontrou resultados</b></center></div>"; }
else {
                   out += "</tbody>";
                   out += "</table></div>";
                   document.getElementById("demo").innerHTML = out;

}
                                       
}


   function procuraaut(){
               var aut;
               aut=document.getElementById("autor").value;            
               aut=aut.toLowerCase(); 
               var i;
               var k;
               var counter;
               var lowerb;
               counter=0;
               if (aut=="")
{
                   document.getElementById("demo").innerHTML = placeholder;
                   return "nada";   
}
               if (aut.length>0){ 
                   var out = "<div class='col-sm-12 col-md-12 col-lg-12'><table class=\"table table-striped table-bordered table-condensed small\">";
                       out += "<thead><tr><th>Título</th><th class=\"col-md-2\">Autor(es)</th>" +
                        "<th>Género</th><th>Preço</th><th>Vendas</th>" +
                           "<th>Descrição</th><th>Data Publicação</th></tr></thead>";
                   out += "<tbody>";
                   for (i = 0; i < getTitles.length; i++) {
                       for (var j = 0; j < getTitles[i].authors.length; j++) {
                               lowerb=getTitles[i].authors[j];
                                
                               lowerb=lowerb.toLowerCase();
                               hits=lowerb.indexOf(aut);
                                
                        
                   if (hits>-1)
{
                       counter++;
                        
                    
                        out += '<tr><td>' + getTitles[i].title + '</td><td>';
                   for (var j = 0; j < getTitles[i].authors.length; j++) {
                       if (j>0)
                           out += "<br />";
                       out += "<i class=\"fa fa-user\"></i> " + getTitles[i].authors[j];
}
                   out += "</td><td>";
                   out += getTitles[i].type + '</td><td>' +
                   getTitles[i].price + '</td><td>' +
                   getTitles[i].ytd_sales + '</td><td>' +
                   getTitles[i].notes + '</td><td>' +
                   getTitles[i].pubdate + '</td></tr>';
}
          

}
}
}
                   if (counter==0) { document.getElementById("demo").innerHTML = "<div class= 'alert alert-danger'><center><b>Nao encontrou resultados</b></center></div>"; }
else {
                   out += "</tbody>";
                   out += "</table></div>";
                   document.getElementById("demo").innerHTML = out;
}
                                       
}



function procuratit(){
               var tit;
               tit=document.getElementById("titulo").value;            
               tit=tit.toLowerCase(); 
               var i;
               var k;
               var counter;
               counter=0;
               if (tit=="")
{
                   document.getElementById("demo").innerHTML = placeholder;
                   return "nada";  
}
               if (tit.length>0){ 
                   var out = "<div class='col-sm-12 col-md-12 col-lg-12'><table class=\"table table-striped table-bordered table-condensed small\">";
                   out += "<thead><tr><th>Título</th><th class=\"col-md-2\">Autor(es)</th>" +
                    "<th>Género</th><th>Preço</th><th>Vendas</th>" +
                       "<th>Descrição</th><th>Data Publicação</th></tr></thead>";
                   out += "<tbody>";
                   for (i = 0; i < getTitles.length; i++) {
                               lowerb=getTitles[i].title.toLowerCase();
                               hits=lowerb.indexOf(tit);
                   if (hits>-1)
{
                       counter++;
                        
                    
                        out += '<tr><td>' + getTitles[i].title + '</td><td>';
                   for (var j = 0; j < getTitles[i].authors.length; j++) {
                       if (j>0)
                           out += "<br />";
                       out += "<i class=\"fa fa-user\"></i> " + getTitles[i].authors[j];
}
                   out += "</td><td>";
                   out += getTitles[i].type + '</td><td>' +
                   getTitles[i].price + '</td><td>' +
                   getTitles[i].ytd_sales + '</td><td>' +
                   getTitles[i].notes + '</td><td>' +
                   getTitles[i].pubdate + '</td></tr>';
}
          

}
}
               if (counter == 0) { document.getElementById("demo").innerHTML = "<div class= 'alert alert-danger'><center><b>Nao encontrou resultados</b></center></div>"; }
else {
                   out += "</tbody>";
                   out += "</table></div>";
                   document.getElementById("demo").innerHTML = out;
}
                                       
}

define(function () {

    var out = "<div class='col-sm-12 col-md-12 col-lg-12'><table class=\"table table-striped table-bordered table-condensed small\">";
    out += "<thead><tr><th>Título</th><th class=\"col-md-2\">Autor(es)</th>" +
     "<th>Género</th><th>Preço</th><th>Vendas</th>" +
        "<th>Descrição</th><th>Data Publicação</th></tr></thead>";
    out += "<tbody>";
    var i;
    for (i = 0; i < getTitles.length; i++) {
        out += '<tr><td>' + getTitles[i].title + '</td><td>';
        for (var j = 0; j < getTitles[i].authors.length; j++) {
            if (j>0)
                out += "<br />";
            out += "<i class=\"fa fa-user\"></i> " + getTitles[i].authors[j];
        }
        out += "</td><td>";
        out += getTitles[i].type + '</td><td>' +
        getTitles[i].price + '</td><td>' +
        getTitles[i].ytd_sales + '</td><td>' +
        getTitles[i].notes + '</td><td>' +
        getTitles[i].pubdate + '</td></tr>';
    }
    out += "</tbody>";
    out += "</table></div>";
    placeholder = out;
    return {
        out
    }
});