

var rooms = [
    {

        troom:"116498227856184516567"

    },
    {
        
        troom:"c1c2c3c5c8"
        
    },
    {
        
        troom:"01015512880"
        
    },
    {
       
        troom:"ghalyxx"
       
    },
] ;




var connected = false;
const RETRY_INTERVAL = 2500;
var timeout;



var socket = io.connect('https://ws.sarhne.com/',{transports: ['websocket']}); 



socket.on('connect', function() {
    connected = true;
    clearTimeout(timeout);
    

    start_shoot();
    
});


socket.on('disconnect', function() {
    connected = false;
    retryConnectOnFailure(RETRY_INTERVAL);
});


var retryConnectOnFailure = function(retryInMilliseconds) {
    setTimeout(function() {
      if (!connected) {
         socket.connect();
        retryConnectOnFailure(retryInMilliseconds);
      }
    }, retryInMilliseconds);
    }



function shoot(){
    for (var r in rooms){

    socket.emit('join_update', {room:rooms[r].troom}); 
    console.log(`join_update troom: ${rooms[r].troom}`);
    socket.emit('push_update', {room:rooms[r].troom,ty:'new_msg'});
    console.log(`push_update troom: ${rooms[r].troom}`);

    }

}


function start_shoot(){
    setInterval(shoot,1000);
}
