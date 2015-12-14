define( function () {

    au = '<table class="table table-striped table-hover table-bordered"><tr><td style="width=40px"><b>Picture</b></td><td><b>Name</b></td><td><b>City</b></td><td><b>State</b></td></tr>';
    used2 = [];
    for (var i = 0; i < getAuthors.length; i++) {
        z = Math.floor((Math.random() * getAuthors.length));
        while (used2.indexOf(z) != -1) {
            console.log("Let's try this again.");
            z = Math.floor((Math.random() * getAuthors.length));
        }
        im = 'http://192.168.160.36/images/'+getAuthors[z].ID+'.png'
        au += '<tr>'
        + '<td> <img src=' +im+ ' alt="Smiley face" height="42" width="42"></td>'
        + '<td>' + getAuthors[z].name + '</td>'
        + '<td>' + getAuthors[z].city + '</td>'
        + '<td>' + getAuthors[z].ID + '</td>'
        + '</tr>';

        used2.push(z);
    }
    au += "</table>";


    return {
        au
    }
});