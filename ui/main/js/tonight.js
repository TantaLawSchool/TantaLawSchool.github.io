var movieDB = [
    {
     imdbId:"tt0903747",
     name: "Breaking Bad",
     rating: 9.5,
     
     runtime: "45m",
     description: "بعد اكتشافه لإصابته بسرطان الرئة، يقرر مدرس كيمياء الاستعانة بجيسي بينكمان طالبه السابق بفصل العلوم، من أجل مساعدته على طبخ مخدر الميث وبيعه في نيو ميكسيكو، ليمر والت بالعديد من التغيرات بشخصيته الجديدة.",
     background: "url(../../data/media/poster/tt0903747.jpg)"
    }
    
];





movieDB.forEach(createCard);

function createCard(element, i){
// card
var card = document.createElement('div');
card.setAttribute("class", "tonight-card");
card.style.backgroundImage = element.background;

// name
var name = document.createElement('h1');
name.innerText = element.name;
card.appendChild(name);

// runtime
var runtime = document.createElement('span');
runtime.innerText = element.runtime;
card.appendChild(runtime);

// rating
var star = document.createElement("i");
//star.setAttribute("class", "fas fa-star");
star.setAttribute("class", "tonight-star");
star.innerHTML=`<img src="./images/star-icon.svg">`;
var rating = document.createElement('span');
rating.innerText = element.rating + " IMDB ";
rating.appendChild(star);
card.appendChild(rating);

// description
var description = document.createElement('p');
description.innerText = element.description;
card.appendChild(description);

// watch
var watch = document.createElement('button');
watch.setAttribute("class", "watch");
watch.setAttribute("onclick", `tonightWatchButtonListener("${element.imdbId}")`);
watch.innerText = " شاهد الان";
card.appendChild(watch);



//document.body.appendChild(card);
document.getElementsByClassName("tonight")[0].appendChild(card);
}



function tonightWatchButtonListener(imdbId){
    title_url = window.location.origin+"/ui/title/title.html?imdbId="+imdbId;
    UI.Title(title_url);
}


