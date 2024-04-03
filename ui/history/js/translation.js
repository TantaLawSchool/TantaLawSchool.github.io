
var ar_genre = {
    "Action":"أكشن",
    "Adventure":"مغامرة",
    "Animation":"رسوم متحركة",
    "Biography":"سيرة ذاتية",
    "Comedy":"كوميدى",
    "Crime":"جريمة",
    "Documentary":"وثائقى",
    "Drama":"دراما",
    "Family":"عائلى",
    "Fantasy":"خيال",
    "Film-Noir":"Film-Noir",
    "History":"تاريخ",
    "Horror":"رعب",
    "Music":"موسيقى",
    "Musical":"موسيقي",
    "Mystery":"لغز",
    "Romance":"رومانسى",
    "Sci-Fi":"خيال علمى",
    "Short":"قصير",
    "Sport":"رياضة",
    "Thriller":"اثارة",
    "War":"حرب",
    "Western":"غرب أمريكى"
};


function translate(k){

    if(k in ar_genre){
        return ar_genre[k];
    }else{
        return k;
    }
}


function translate_list(l){
    new_l = [];
    for(var i in l){
        new_l.push(translate(l[i]));
    }
    return new_l;
}

