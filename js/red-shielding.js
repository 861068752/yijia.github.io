 var join = document.getElementsByClassName('join')[0];
    
 var red = document.getElementsByClassName('red-shield')[0];
 
 
 red.onmouseover = function(){
  join.style.background = 'red';
   red.style.color = 'white';
  
   
   
 };
    red.onmouseout = function(){
  join.style.background = 'white';
   red.style.color = 'black';
  
   
   
 };
//var i = red.width;
//  function animation(obj){
//     clearInterval(obj.timer);
//      obj.timer = setInterval(function(){
//        for(i;i<join.width;i+10){
//          
//          
//        }
//           
//           
//           
//         }
//      }, 20);
//    
//  }
    
