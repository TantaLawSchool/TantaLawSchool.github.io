
/*initialize func*/


function initialize(k,v){
    localStorage.setItem(k,v);
}

function isInitialized(k){
   return localStorage.getItem(k);
}



function getAllLocalStorageKeys(){
   k_arr = [];
   l = localStorage.length;
   for(var i=0;i<l;i++){

       k_arr.push(localStorage.key(i));

   }

   return k_arr;
}


function clearLocalStorage(){

   localStorage.clear();

}





/* fav ue*/

function getAllFav(){
   
   f_arr = JSON.parse(localStorage.getItem("fav"));
   return f_arr;

}


function setFav(id){

   f_arr = getAllFav();
   f_arr.push(id);
   sj = JSON.stringify(f_arr);
   localStorage.setItem("fav",sj);

}


function delFav(id){
   if(isFav(id)){
       f_arr = getAllFav();
       f_arr.splice(f_arr.indexOf(id),1);
       sj = JSON.stringify(f_arr);
       localStorage.setItem("fav",sj);

   }
}

function isFav(id){

   f_arr = getAllFav();
   return (f_arr.includes(id));
   
}



/* history ue*/


function getAllHistory(){
   
   h_arr = JSON.parse(localStorage.getItem("history"));
   return h_arr;

}


function setHistory(id){

   h_arr = getAllHistory();
   h_arr.push(id);
   sj = JSON.stringify(h_arr);
   localStorage.setItem("history",sj);

}


function delHistory(id){
   if(isHistory(id)){
       h_arr = getAllHistory();
       h_arr.splice(h_arr.indexOf(id),1);
       sj = JSON.stringify(h_arr);
       localStorage.setItem("history",sj);

   }
}

function isHistory(id){

   h_arr = getAllHistory();
   return (h_arr.includes(id));
   
}


function clearHistory(){
   localStorage.setItem("history","[]");
}


/* profile ue*/


function getAllProfile(){

   p_obj = JSON.parse(localStorage.getItem("profile"));
   return p_obj;

}


function setProfile(profile,value){

   p_obj = getAllProfile();
   p_obj[profile]=value;
   sj = JSON.stringify(p_obj);
   localStorage.setItem("profile",sj);

}


function getProfile(profile){
   p_obj = getAllProfile();
   return p_obj[profile];
}




/* ask ue*/



function getAllAsk(){
   
   ask_arr = JSON.parse(localStorage.getItem("ask"));
   return ask_arr;

}


function setAsk(name){

   ask_arr = getAllAsk();
   ask_arr.push(name);
   sj = JSON.stringify(ask_arr);
   localStorage.setItem("ask",sj);

}


function delAsk(name){
   if(isAsk(name)){
       ask_arr = getAllAsk();
       ask_arr.splice(ask_arr.indexOf(id),1);
       sj = JSON.stringify(ask_arr);
       localStorage.setItem("ask",sj);

   }
}

function isAsk(name){

   ask_arr = getAllAsk();
   return (ask_arr.includes(name));
   
}




if(isInitialized("fav")){

}else{
   initialize("fav","[]");
}


if(isInitialized("profile")){

}else{
   initialize("profile",'{"uname":"","fname":"","lname":"","email":""}');
}



if(isInitialized("history")){

}else{
   initialize("history","[]");
}



if(isInitialized("ask")){

}else{
   initialize("ask","[]");
}


