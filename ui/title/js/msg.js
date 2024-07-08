





function Msg(){

  arabic_msg = "جارى تحضير الفيديو";

  Msg_div = document.createElement("div");
  Msg_div.innerHTML = `
  <div class="Msg" id="Msg-id">
    
     <div class="topSpace">

      <div class="loadingBoard">
          <div class="_1stbox"></div>
          <div class="_2stbox"></div>
          <div class="_3stbox"></div>
          <div class="_4stbox"></div>
      </div>

     </div>

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
      document.body.appendChild(Msg_div);
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







