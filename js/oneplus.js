
   var span = document.getElementById('underline');
    
    var liArr = document.getElementsByTagName('li');
    
    for (var i=0;i<5;i++){
      liArr[i].onmouseover = function(){
    
         span.style.display = 'block';
         animation(span, this.offsetLeft);
        
      };
      
      liArr[i].onmouseout = function(){
       span.style.display = 'none';
       animation(span, span.current);
        
      };
      liArr[i].onclick =function(){
        span.current = this.offsetLeft;
        
      };
    }
    function animation(obj,target){
       clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var dis = (target - obj.offsetLeft) / 10;
            dis = dis>0?Math.ceil(dis):Math.floor(dis);
            obj.style.left = obj.offsetLeft + dis + 'px';
            if (obj.offsetLeft == target){
                clearInterval(obj.timer);
            }
        }, 20);
      
    }
    
