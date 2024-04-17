

let seasons_arabic_dic = {
    "1":"الأول",
    "2":"الثانى",
    "3":"الثالث",
    "4":"الرابع",
    "5":"الخامس",
    "6":"السادس",
    "7":"السابع",
    "8":"الثامن",
    "9":"التاسع",
    "10":"العاشر",

}




function make_options(n){
    options_template = ``;
    option_t = ``;
    for (var i=1;i<=n;i++){


        if(i==1){

            option_t = `<option value="${i}" selected> الموسم ${seasons_arabic_dic[i]} </option>`;
        }else {
            option_t = `<option value="${i}"> الموسم ${seasons_arabic_dic[i]} </option>`;
        }
        
        options_template = options_template + option_t;

    }
    return options_template;

}



function seasons_html_template(n){

    return `
    
    <div class="custome-select">
    <select id="seasons" onchange="changeSeason();">
            ${make_options(n)}
    </select>
    </div> 

    `;

}



function choose_episode(n){

    var episodes_classes = document.getElementsByClassName("episode_card");
    for (var i = 0; i < episodes_classes.length; i++) {
        
        episodes_classes.item(i).style.border="";

    }


    $(n).style.border="solid #ffd52d";

    tvSeriesP = $("tvSeriesP");
    obj = JSON.parse(tvSeriesP.textContent);
    obj.episode_val = n;
    json = JSON.stringify(obj);
    tvSeriesP.textContent = json;

}




function drawEpisodes(n){

    $("episodes").innerHTML="";


    for(var i=1;i<=n;i++){

    div = document.createElement("div");
    div.innerHTML = `
    <div class='episode_card' id='${i}' onclick="episodeListener(this)">
    

    <div class="arabic_episode"> الحلقة </div>
    <div class="episode_number">${i}</div>

    </div>`;

    $("episodes").appendChild(div);

    }


    choose_episode(1);



}




