
var isMobile = false; //initiate as false
// device detection
// document.addEventListener('touchmove', function(e) {
//     e.preventDefault();
// }, { passive: false });
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$( document ).ready(function() {
document.getElementById("smartdisbutton").style.display = "none";
document.getElementById("smart_wrap").style.display = "block";

      var mousex, mousey, startmousex, startmousey;
      var clicked = false;
      var w = window.innerWidth;
      var unit = w*0.16
      var arr = [1.5,1.3,0.8,0.6,0.4,0.2]
      var middle1, middle2, middle3, middle4, oldmiddle1
      var element1, element2, element3, element4
      var element1left, element1top,
          element2left, element2top,
          element3left, element3top,
          element4left, element4top
      var mousex,mousexafter,startmousex,
          mousey,mouseyafter,startmousey

      var moved = false


$( window ).resize(function() {
      w = window.innerWidth;
      unit = w*0.16
});


 
      document.addEventListener('mousemove', function(e) {
      document.getElementById("wholeposter").style.display = "none";
        console.log(clicked)
        if(!clicked){
            mousex = e.clientX;
            mousey = e.clientY;
            diff = (Math.abs(mousex-mousexafter)+Math.abs(mousey-mouseyafter))/20
            mousexafter = mousex;
            mouseyafter = mousey;
            definemiddle(mousex,mousey);

console.log(moved)
            $('.smartbox_surface').animate({opacity: 0.8}, {duration:80, queue: false});
        if(mousex!==mousexafter){
          if(!moved){
            startmousex = e.clientX;
                      startmousey = e.clientY;
                      mousex = e.clientX;
                      mousey = e.clientY;
                      mousexafter = e.clientX;
                      mouseyafter = e.clientY;
                      definemiddle(startmousex,startmousey);
                      arr = shuffle(arr);


                    $( ".smartbox" ).each(function( index ) {
                            thisleft = parseInt($( this ).css("left"), 10);
                            thistop = parseInt($( this ).css("top"), 10);

                            if(!$( this ).hasClass('selected')){
                              if($( this ).hasClass('group1')){
                                $( this ).animate({left: thisleft-arr[0]*unit, top: thistop-arr[0]*unit },30);
                              }
                              if($( this ).hasClass('group2')){
                                $( this ).animate({left: thisleft-arr[1]*unit, top: thistop-arr[1]*unit },30);
                              }
                              if($( this ).hasClass('group3')){
                                $( this ).animate({left: thisleft-arr[2]*unit, top: thistop-arr[2]*unit },30);
                              }
                              if($( this ).hasClass('group4')){
                                $( this ).animate({left: thisleft-arr[3]*unit, top: thistop-arr[3]*unit },30);
                              }
                              if($( this ).hasClass('group5')){
                                $( this ).animate({left: thisleft-arr[4]*unit, top: thistop-arr[4]*unit },30);
                              }
                              if($( this ).hasClass('group6')){
                                $( this ).animate({left: thisleft-arr[5]*unit, top: thistop-arr[5]*unit },30);
                              }
                            }
                    });
          moved = true
          }
        }




        $( ".smartbox" ).each(function( index ) {
                if(!$( this ).hasClass('.selected')){
                  offset = $( this ).offset();
                  if(!$( this ).hasClass('down')){
                    if(($( this ).hasClass('vrow1') && offset.left>0.02*w-1.5*unit) || 
                       ($( this ).hasClass('vrow2') && offset.left>0.18*w-1.5*unit) || 
                       ($( this ).hasClass('vrow3') && offset.left>0.34*w-1.5*unit) ||  
                       ($( this ).hasClass('vrow4') && offset.left>0.5*w-1.5*unit) || 
                       ($( this ).hasClass('vrow5') && offset.left>0.66*w-1.5*unit) || 
                       ($( this ).hasClass('vrow6') && offset.left>0.82*w-1.5*unit)){
                        $( this ).css( "left",'-='+diff);
                        $( this ).css( "top",'-='+diff);
                      }else{
                    $( this ).addClass("down")
                    console.log($( this ))
                    }
                  }

                  if($( this ).hasClass('down')){
                    if(($( this ).hasClass('vrow1') && offset.left<0.02*w) || 
                       ($( this ).hasClass('vrow2') && offset.left<0.18*w) || 
                       ($( this ).hasClass('vrow3') && offset.left<0.34*w) ||  
                       ($( this ).hasClass('vrow4') && offset.left<0.5*w) || 
                       ($( this ).hasClass('vrow5') && offset.left<0.66*w) || 
                       ($( this ).hasClass('vrow6') && offset.left<0.82*w)){
                          $( this ).css( "left",'+='+diff);
                          $( this ).css( "top",'+='+diff);
                        }else{
                    $( this ).removeClass("down")
                    }
                  }
                }
        });
        }
      }, false);





function definemiddle(definex, definey){
      if(definey < w*0.24){
              if(definex < w*0.098 && definex > w*0){middle1 = 1;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 2;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 3;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 4;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 5;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 6;}
      }
      if(definey < w*0.40 && definey > w*0.24){
              if(definex < w*0.098 && definex > w*0){middle1 = 11;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 12;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 13;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 14;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 15;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 16;}
      }
      if(definey < w*0.56 && definey > w*0.40){
              if(definex < w*0.098 && definex > w*0){middle1 = 21;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 22;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 23;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 24;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 25;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 26;}
      }
      if(definey < w*0.72 && definey > w*0.56){
              if(definex < w*0.098 && definex > w*0){middle1 = 31;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 32;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 33;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 34;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 35;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 36;}
      }
      if(definey < w*0.88 && definey > w*0.72){
              if(definex < w*0.098 && definex > w*0){middle1 = 41;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 42;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 43;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 44;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 45;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 46;}
      }
      if(definey < w && definey > w*0.88){
              if(definex < w*0.098 && definex > w*0){middle1 = 51;}
              if(definex < w*0.258 && definex > w*0.098){middle1 = 52;}
              if(definex < w*0.418 && definex > w*0.258){middle1 = 53;}
              if(definex < w*0.58 && definex > w*0.418){middle1 = 54;}
              if(definex < w*0.74 && definex > w*0.58){middle1 = 55;}
              if(definex < w*0.9 && definex > w*0.74){middle1 = 56;}
      }
      defineelements();

}


      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
      function defineelements(){
        middle2 = middle1-1
        middle3 = middle1-10
        middle4 = middle1-11
        middle5 = middle1+10
        middle6 = middle1+9
        element1 = document.getElementById('smartbox' + middle1);
        element2 = document.getElementById('smartbox' + middle2);
        element3 = document.getElementById('smartbox' + middle3);
        element4 = document.getElementById('smartbox' + middle4);
        element5 = document.getElementById('smartbox' + middle5);
        element6 = document.getElementById('smartbox' + middle6);
        $('.smartbox').removeClass('selected');
        $(element1).addClass('selected');
        $(element2).addClass('selected');
        $(element3).addClass('selected');
        $(element4).addClass('selected');
        $(element5).addClass('selected');
        $(element6).addClass('selected');
////아래추가
                element1left = parseInt($(element1).css("left"), 10);
                element1top = parseInt($(element1).css("top"), 10);
                element2left = parseInt($(element2).css("left"), 10);
                element2top = parseInt($(element2).css("top"), 10);
                element3left = parseInt($(element3).css("left"), 10);
                element3top = parseInt($(element3).css("top"), 10);
                element4left = parseInt($(element4).css("left"), 10);
                element4top = parseInt($(element4).css("top"), 10);
                element5left = parseInt($(element3).css("left"), 10);
                element5top = parseInt($(element3).css("top"), 10);
                element6left = parseInt($(element4).css("left"), 10);
                element6top = parseInt($(element4).css("top"), 10);


        $(element1).addClass('selectedbefore');
        $(element2).addClass('selectedbefore');
        $(element3).addClass('selectedbefore');
        $(element4).addClass('selectedbefore');
        $(element5).addClass('selectedbefore');
        $(element6).addClass('selectedbefore');

        $( ".selected" ).each(function( index ) {
                if($( this ).hasClass('vrow1')){
                    $( this ).animate({left: 0.018*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow2')){
                    $( this ).animate({left: 0.17867*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow3')){
                    $( this ).animate({left: 0.33934*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow4')){
                    $( this ).animate({left: 0.5*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow5')){
                    $( this ).animate({left: 0.66067*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow6')){
                    $( this ).animate({left: 0.82134*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow1')){
                    $( this ).animate({top: 0.16067*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow2')){
                    $( this ).animate({top: 0.32134*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow3')){
                    $( this ).animate({top: 0.48201*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow4')){
                    $( this ).animate({top: 0.64268*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow5')){
                    $( this ).animate({top: 0.80335*w+0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow6')){
                    $( this ).animate({top: 0.96402*w+0.018*w}, {duration:80, queue: false});
                }

        });

        $( ".selectedbefore" ).each(function( index ) {
               if(!$( this ).hasClass('selected')){
                if($( this ).hasClass('vrow1')){
                    $( this ).animate({left: 0.018*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow2')){
                    $( this ).animate({left: 0.17867*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow3')){
                    $( this ).animate({left: 0.33934*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow4')){
                    $( this ).animate({left: 0.5*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow5')){
                    $( this ).animate({left: 0.66067*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('vrow6')){
                    $( this ).animate({left: 0.82134*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow1')){
                    $( this ).animate({top: 0.16067*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow2')){
                    $( this ).animate({top: 0.32134*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow3')){
                    $( this ).animate({top: 0.48201*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow4')){
                    $( this ).animate({top: 0.64268*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow5')){
                    $( this ).animate({top: 0.80335*w}, {duration:80, queue: false});
                }
                if($( this ).hasClass('hrow6')){
                    $( this ).animate({top: 0.96402*w}, {duration:80, queue: false});
                }
        $('.smartbox').removeClass('selectedbefore');
              }
        })


        $('element1').animate({
            left: element1left,
            top:  element1top
          });
        $('element2').animate({
            left: element2left,
            top:  element2top
          });
        $('element3').animate({
            left: element3left,
            top:  element3top
          });
        $('element4').animate({
            left: element4left,
            top:  element4top
          });
        $('element5').animate({
            left: element5left,
            top:  element5top
          });
        $('element6').animate({
            left: element6left,
            top:  element6top
          });
      }


$(document).mouseleave(function () {
});

// var timeout;
  $(document).mouseleave(function () {
    console.log('out');
    $('.smartbox_surface').animate({opacity: 1},{ duration: 25, queue: false });
          // moved = false
$( "#smartbox1" ).animate({left: 0.018*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox11" ).animate({left: 0.018*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox21" ).animate({left: 0.018*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox31" ).animate({left: 0.018*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox41" ).animate({left: 0.018*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox51" ).animate({left: 0.018*w+0.018*w, top: 0.96402*w+0.05*w},{ duration: 250, queue: false });

          $( "#smartbox2" ).animate({left: 0.17867*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox12" ).animate({left: 0.17867*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox22" ).animate({left: 0.17867*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox32" ).animate({left: 0.17867*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox42" ).animate({left: 0.17867*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox52" ).animate({left: 0.17867*w+0.018*w, top: 0.96402*w+0.05*w},{ duration: 250, queue: false });

          $( "#smartbox3" ).animate({left: 0.33934*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox13" ).animate({left: 0.33934*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox23" ).animate({left: 0.33934*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox33" ).animate({left: 0.33934*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox43" ).animate({left: 0.33934*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox53" ).animate({left: 0.33934*w+0.018*w, top: 0.96402*w+0.05*w},{ duration: 250, queue: false });

          $( "#smartbox4" ).animate({left: 0.5*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox14" ).animate({left: 0.5*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox24" ).animate({left: 0.5*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox34" ).animate({left: 0.5*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox44" ).animate({left: 0.5*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox54" ).animate({left: 0.5*w+0.018*w, top: 0.96402*w+0.05*w},{ duration: 250, queue: false });

          $( "#smartbox5" ).animate({left: 0.66067*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox15" ).animate({left: 0.66067*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox25" ).animate({left: 0.66067*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox35" ).animate({left: 0.66067*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox45" ).animate({left: 0.66067*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox55" ).animate({left: 0.66067*w+0.018*w, top: 0.96402*w+0.05*w},{ duration: 250, queue: false });

          $( "#smartbox6" ).animate({left: 0.82134*w+0.018*w, top: 0.16067*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox16" ).animate({left: 0.82134*w+0.018*w, top: 0.32134*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox26" ).animate({left: 0.821347*w+0.018*w, top: 0.48201*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox36" ).animate({left: 0.82134*w+0.018*w, top: 0.64268*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox46" ).animate({left: 0.82134*w+0.018*w, top: 0.80335*w+0.05*w},{ duration: 250, queue: false });
          $( "#smartbox56" ).animate({left: 0.82134*w+0.018*w, top: 0.96402*w+0.05*w},250, function() { wrapup();});

        });
// document.onmousemove = function(){
//   if(!clicked){
//   clearTimeout(timeout);
// }



function wrapup(){
          $( "#smartbox1" ).animate({left: 0.018*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox11" ).animate({left: 0.018*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox21" ).animate({left: 0.018*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox31" ).animate({left: 0.018*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox41" ).animate({left: 0.018*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox51" ).animate({left: 0.018*w, top: 0.96402*w},{ duration: 70, queue: false });

          $( "#smartbox2" ).animate({left: 0.17867*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox12" ).animate({left: 0.17867*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox22" ).animate({left: 0.17867*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox32" ).animate({left: 0.17867*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox42" ).animate({left: 0.17867*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox52" ).animate({left: 0.17867*w, top: 0.96402*w},{ duration: 70, queue: false });

          $( "#smartbox3" ).animate({left: 0.33934*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox13" ).animate({left: 0.33934*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox23" ).animate({left: 0.33934*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox33" ).animate({left: 0.33934*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox43" ).animate({left: 0.33934*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox53" ).animate({left: 0.33934*w, top: 0.96402*w},{ duration: 70, queue: false });

          $( "#smartbox4" ).animate({left: 0.5*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox14" ).animate({left: 0.5*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox24" ).animate({left: 0.5*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox34" ).animate({left: 0.5*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox44" ).animate({left: 0.5*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox54" ).animate({left: 0.5*w, top: 0.96402*w},{ duration: 70, queue: false });

          $( "#smartbox5" ).animate({left: 0.66067*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox15" ).animate({left: 0.66067*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox25" ).animate({left: 0.66067*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox35" ).animate({left: 0.66067*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox45" ).animate({left: 0.66067*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox55" ).animate({left: 0.66067*w, top: 0.96402*w},{ duration: 70, queue: false });

          $( "#smartbox6" ).animate({left: 0.82134*w, top: 0.16067*w},{ duration: 70, queue: false });
          $( "#smartbox16" ).animate({left: 0.82134*w, top: 0.32134*w},{ duration: 70, queue: false });
          $( "#smartbox26" ).animate({left: 0.821347*w, top: 0.48201*w},{ duration: 70, queue: false });
          $( "#smartbox36" ).animate({left: 0.82134*w, top: 0.64268*w},{ duration: 70, queue: false });
          $( "#smartbox46" ).animate({left: 0.82134*w, top: 0.80335*w},{ duration: 70, queue: false });
          $( "#smartbox56" ).animate({left: 0.82134*w, top: 0.96402*w},{ duration: 70, queue: false });
      document.getElementById("wholeposter").style.display = "block";
}
// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



  var newHeight = $( window ).height();
    $("#smart_wrap").css('height', newHeight);
    $("#smart").css('height', newHeight);

  $("#smartdisbutton").click(function(){
    document.getElementById('smartdisbutton').style.backgroundColor="#d6d6d6";
    document.getElementById('smartdisdonebutton').style.backgroundColor="#d6d6d6";
    document.getElementById('smartkorbutton').style.backgroundColor="#d6d6d6";
    document.getElementById('smartengbutton').style.backgroundColor="#d6d6d6";
        document.getElementById("wholeposter").style.display = "block";
    clicked = true
    $("#smartdisdonebutton").show();
    $("#smartdisbutton").hide();
    $("#smart_dis_wrap").show();
    $(".smart_dis_column").animate({marginTop:  '12.9vw'}, {queue: false});
    $("#smart_dis_wrap").css('overflowY', 'visible'); 
    $('body').css('overflowY', 'scroll');  
  });
  $("#smartdisdonebutton").click(function(){
      document.getElementById("wholeposter").style.display = "block";
    clicked = false
    $("#smartdisdonebutton").hide();
    // $("#smartdisbutton").show();
    $(".smart_dis_column").animate({marginTop: '100vh'}, function() {
    $("#smart_dis_wrap").hide();
                });
    $("#smart_dis_wrap").css('overflowY', 'hidden'); 
    $('body').css('overflowY', 'hidden'); 
    document.getElementById('smartdisbutton').style.backgroundColor="";
    document.getElementById('smartdisdonebutton').style.backgroundColor="";
    document.getElementById('smartkorbutton').style.backgroundColor="";
    document.getElementById('smartengbutton').style.backgroundColor="";
  });



   $("#smartkorbutton").click(function(){
        document.getElementById("wholeposter").style.display = "block";
        document.getElementById("wholeposter").style.backgroundImage = "url('posters/poster-87.jpg')";
      $("#smartkorbutton").hide();
      $("#smartengbutton").show();
      $(".eng_dis").hide();
      $(".kor_dis").show();
document.getElementById("smartbox_surface1").style.backgroundImage = "url('posters/poster-50.jpg')";
document.getElementById("smartbox_surface2").style.backgroundImage = "url('posters/poster-51.jpg')";
document.getElementById("smartbox_surface3").style.backgroundImage = "url('posters/poster-52.jpg')";
document.getElementById("smartbox_surface4").style.backgroundImage = "url('posters/poster-53.jpg')";
document.getElementById("smartbox_surface5").style.backgroundImage = "url('posters/poster-54.jpg')";
document.getElementById("smartbox_surface6").style.backgroundImage = "url('posters/poster-55.jpg')";

document.getElementById("smartbox_surface11").style.backgroundImage = "url('posters/poster-56.jpg')";
document.getElementById("smartbox_surface12").style.backgroundImage = "url('posters/poster-57.jpg')";
document.getElementById("smartbox_surface13").style.backgroundImage = "url('posters/poster-58.jpg')";
document.getElementById("smartbox_surface14").style.backgroundImage = "url('posters/poster-59.jpg')";
document.getElementById("smartbox_surface15").style.backgroundImage = "url('posters/poster-60.jpg')";
document.getElementById("smartbox_surface16").style.backgroundImage = "url('posters/poster-61.jpg')";

document.getElementById("smartbox_surface21").style.backgroundImage = "url('posters/poster-62.jpg')";
document.getElementById("smartbox_surface22").style.backgroundImage = "url('posters/poster-63.jpg')";
document.getElementById("smartbox_surface23").style.backgroundImage = "url('posters/poster-64.jpg')";
document.getElementById("smartbox_surface24").style.backgroundImage = "url('posters/poster-65.jpg')";
document.getElementById("smartbox_surface25").style.backgroundImage = "url('posters/poster-66.jpg')";
document.getElementById("smartbox_surface26").style.backgroundImage = "url('posters/poster-86.jpg')";

document.getElementById("smartbox_surface31").style.backgroundImage = "url('posters/poster-67.jpg')";
document.getElementById("smartbox_surface32").style.backgroundImage = "url('posters/poster-68.jpg')";
document.getElementById("smartbox_surface33").style.backgroundImage = "url('posters/poster-69.jpg')";
document.getElementById("smartbox_surface34").style.backgroundImage = "url('posters/poster-70.jpg')";
document.getElementById("smartbox_surface35").style.backgroundImage = "url('posters/poster-71.jpg')";
document.getElementById("smartbox_surface36").style.backgroundImage = "url('posters/poster-72.jpg')";

document.getElementById("smartbox_surface41").style.backgroundImage = "url('posters/poster-73.jpg')";
document.getElementById("smartbox_surface42").style.backgroundImage = "url('posters/poster-74.jpg')";
document.getElementById("smartbox_surface43").style.backgroundImage = "url('posters/poster-75.jpg')";
document.getElementById("smartbox_surface44").style.backgroundImage = "url('posters/poster-76.jpg')";
document.getElementById("smartbox_surface45").style.backgroundImage = "url('posters/poster-77.jpg')";
document.getElementById("smartbox_surface46").style.backgroundImage = "url('posters/poster-78.jpg')";

document.getElementById("smartbox_surface51").style.backgroundImage = "url('posters/poster-79.jpg')";
document.getElementById("smartbox_surface52").style.backgroundImage = "url('posters/poster-80.jpg')";
document.getElementById("smartbox_surface53").style.backgroundImage = "url('posters/poster-81.jpg')";
document.getElementById("smartbox_surface54").style.backgroundImage = "url('posters/poster-82.jpg')";
document.getElementById("smartbox_surface55").style.backgroundImage = "url('posters/poster-83.jpg')";
document.getElementById("smartbox_surface56").style.backgroundImage = "url('posters/poster-84.jpg')";


document.getElementById("smarttop").style.backgroundImage = "url('posters/poster-48.jpg')";
document.getElementById("smartbottom").style.backgroundImage = "url('posters/poster-85.jpg')";
document.getElementById("smartleft").style.backgroundImage = "url('posters/poster-89.jpg')";
document.getElementById("smartright").style.backgroundImage = "url('posters/poster-88.jpg')";
  });




  $("#smartengbutton").click(function(){
document.getElementById("wholeposter").style.display = "block";
document.getElementById("wholeposter").style.backgroundImage = "url('posters/poster-44.jpg')";
      $("#smartkorbutton").show();
      $("#smartengbutton").hide();
      $(".eng_dis").show();
      $(".kor_dis").hide();
document.getElementById("smartbox_surface1").style.backgroundImage = "url('posters/poster-04.jpg')";
document.getElementById("smartbox_surface2").style.backgroundImage = "url('posters/poster-05.jpg')";
document.getElementById("smartbox_surface3").style.backgroundImage = "url('posters/poster-06.jpg')";
document.getElementById("smartbox_surface4").style.backgroundImage = "url('posters/poster-07.jpg')";
document.getElementById("smartbox_surface5").style.backgroundImage = "url('posters/poster-08.jpg')";
document.getElementById("smartbox_surface6").style.backgroundImage = "url('posters/poster-09.jpg')";

document.getElementById("smartbox_surface11").style.backgroundImage = "url('posters/poster-10.jpg')";
document.getElementById("smartbox_surface12").style.backgroundImage = "url('posters/poster-11.jpg')";
document.getElementById("smartbox_surface13").style.backgroundImage = "url('posters/poster-12.jpg')";
document.getElementById("smartbox_surface14").style.backgroundImage = "url('posters/poster-13.jpg')";
document.getElementById("smartbox_surface15").style.backgroundImage = "url('posters/poster-14.jpg')";
document.getElementById("smartbox_surface16").style.backgroundImage = "url('posters/poster-15.jpg')";

document.getElementById("smartbox_surface21").style.backgroundImage = "url('posters/poster-16.jpg')";
document.getElementById("smartbox_surface22").style.backgroundImage = "url('posters/poster-17.jpg')";
document.getElementById("smartbox_surface23").style.backgroundImage = "url('posters/poster-18.jpg')";
document.getElementById("smartbox_surface24").style.backgroundImage = "url('posters/poster-19.jpg')";
document.getElementById("smartbox_surface25").style.backgroundImage = "url('posters/poster-20.jpg')";
document.getElementById("smartbox_surface26").style.backgroundImage = "url('posters/poster-42.jpg')";

document.getElementById("smartbox_surface31").style.backgroundImage = "url('posters/poster-21.jpg')";
document.getElementById("smartbox_surface32").style.backgroundImage = "url('posters/poster-22.jpg')";
document.getElementById("smartbox_surface33").style.backgroundImage = "url('posters/poster-23.jpg')";
document.getElementById("smartbox_surface34").style.backgroundImage = "url('posters/poster-24.jpg')";
document.getElementById("smartbox_surface35").style.backgroundImage = "url('posters/poster-25.jpg')";
document.getElementById("smartbox_surface36").style.backgroundImage = "url('posters/poster-26.jpg')";

document.getElementById("smartbox_surface41").style.backgroundImage = "url('posters/poster-27.jpg')";
document.getElementById("smartbox_surface42").style.backgroundImage = "url('posters/poster-28.jpg')";
document.getElementById("smartbox_surface43").style.backgroundImage = "url('posters/poster-29.jpg')";
document.getElementById("smartbox_surface44").style.backgroundImage = "url('posters/poster-30.jpg')";
document.getElementById("smartbox_surface45").style.backgroundImage = "url('posters/poster-31.jpg')";
document.getElementById("smartbox_surface46").style.backgroundImage = "url('posters/poster-32.jpg')";

document.getElementById("smartbox_surface51").style.backgroundImage = "url('posters/poster-33.jpg')";
document.getElementById("smartbox_surface52").style.backgroundImage = "url('posters/poster-34.jpg')";
document.getElementById("smartbox_surface53").style.backgroundImage = "url('posters/poster-35.jpg')";
document.getElementById("smartbox_surface54").style.backgroundImage = "url('posters/poster-36.jpg')";
document.getElementById("smartbox_surface55").style.backgroundImage = "url('posters/poster-37.jpg')";
document.getElementById("smartbox_surface56").style.backgroundImage = "url('posters/poster-38.jpg')";


document.getElementById("smarttop").style.backgroundImage = "url('posters/poster-02.jpg')";
document.getElementById("smartbottom").style.backgroundImage = "url('posters/poster-40.jpg')";
document.getElementById("smartleft").style.backgroundImage = "url('posters/poster-46.jpg')";
document.getElementById("smartright").style.backgroundImage = "url('posters/poster-45.jpg')";
  });
});