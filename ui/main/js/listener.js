
/* events listener */



function cardListener(e){

    /*
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
    */

    title_url = window.location.origin+"/ui/title/title.html?imdbId="+e.parentNode.id;
    UI.Title(title_url);

}


function genreListener(e){
    genre_url = window.location.origin+"/ui/genre/genre.html?genreId="+e.id;
    UI.Genre(genre_url);
}


