var x = 0;
let playCubic = null
let play_pause = true

const rotate = degree => {
     if(playCubic !== null){
          return
     }
     x += degree;
     $(".cube").css("transform",`rotateY(${x}deg)`);
}


$(document).ready(
     function(){
          $(".arrow-left").click(
               function(){
                    rotate(45)
               }
          );
          $(".arrow-right").click(
               function(){
                    rotate(-45)
               }
          );
          $(".arrow-left").mouseout(
               function(){
                    rotate(-10)
               }
          );
          $(".arrow-left").mouseover(
               function(){
                    rotate(10)
               }
          );
          $(".arrow-right").mouseover(
               function(){
                    rotate(-10)
               }
          );
          $(".arrow-right").mouseout(
               function(){
                    rotate(10)
               }
          );
          $(".play").click(
               function(){
                    if(play_pause){
                         play_pause = false
                         $(".fa-play")[0].className = 'fas fa-pause'
                         playCubic = setInterval(() => {
                              x += 45;
                              $(".cube").css("transform",`rotateY(${x}deg)`);
                         }, 2000);
                     }else{
                         play_pause = true
                         $(".fa-pause")[0].className = 'fas fa-play'
                         clearInterval(playCubic);
                         playCubic = null
                     }
                   
               }
          );
     }
)