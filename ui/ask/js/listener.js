



function askButtonListener(e){
   

  if($("ask_content").value.length==0 || $("ask_content").value.replaceAll(" ","").length==0){

  }else{

    if(isAsk($("ask_content").value)){



    }else{
        setAsk($("ask_content").value);

        /*send ask*/
        send_ask($("ask_content").value);


    }


  $("container").innerHTML = `
  <div class="received"> <img src="../ue/a/sent.png" height="60px"></img> تم ارسال طلبك بنجاح  </div>
  `;

  }


}






