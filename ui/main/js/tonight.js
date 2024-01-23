var movieDB = [
    {
     imdbId:"tt13287846",
     name: "Napoleon",
     rating: 6.6,
     
     runtime: "2h 38m",
     description: "ملحمة تفصل صعود وسقوط الإمبراطور الفرنسي نابليون بونابرت ورحلته الدؤوبة إلى السلطة من خلال منظور علاقته المدمنة والمتقلبة مع زوجته جوزفين.",
     background: "url('https://m.media-amazon.com/images/M/MV5BZWIzNDAxMTktMDMzZS00ZjJmLTlhNjYtOGUxYmZlYzVmOGE4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg')"
    },
    {
    imdbId:"tt5537002",
    name: "Killers of the Flower Moon",
    rating: 7.8,
    
    runtime: "3h 26m",
    description: "عندما يتم اكتشاف النفط في عشرينيات القرن العشرين أوكلاهوما تحت أرض أوساج الأمة ، يتم قتل شعب أوساج واحدا تلو الآخر - حتى يتدخل مكتب التحقيقات الفيدرالي لكشف اللغز.",
    background: "url('https://m.media-amazon.com/images/M/MV5BMjE4ZTZlNDAtM2Q3YS00YjFhLThjN2UtODg2ZGNlN2E2MWU2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX380_CR0,4,380,562_.jpg')"
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
star.setAttribute("class", "fas fa-star");
var rating = document.createElement('span');
rating.innerText = element.rating + " IMDB ";
rating.appendChild(star);
card.appendChild(rating);

// description
var description = document.createElement('p');
description.innerText = element.description;
card.appendChild(description);

// watch/watch again
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
    Tree.Title(title_url);
}


