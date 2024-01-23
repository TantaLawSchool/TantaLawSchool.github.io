





function Msg(){

  arabic_msg = "جارى تحضير الفيديو";

  Msg_div = `
  <div class="Msg" id="Msg-id">
    <img src="./g/ZNeT.gif"></img>

     <h2>${arabic_msg}</h2> 

  </div>
  `
  el = document.getElementById("Msg-id");
  if (typeof(el) != 'undefined' && el != null)
     {
    // if Msg-id element Exists.
    return false;

     }
     else{
      document.body.innerHTML = document.body.innerHTML + Msg_div;
     }

}

function hideMsg(){

    el = document.getElementById("Msg-id");
  if (typeof(el) != 'undefined' && el != null)
     {
    // if Msg-id element Exists.
    el.style.visibility="hidden";
    el.remove();

     }
     else{
      return false;
     }

}







