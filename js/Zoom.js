    var box =document.getElementsByClassName('img-yijia')[0];
    var small =document.getElementsByClassName('small')[0];
    var big = document.getElementsByClassName('big')[0];
    var bigImg =document.getElementsByClassName('bigimg')[0];
    var mask = document.getElementsByClassName('mask')[0];

   
     small.onmousemove = function(ev){
        var e = ev || window.event;

        var x = e.clientX + small.offsetLeft - box.offsetLeft - mask.offsetWidth / 2;
        var y = e.clientY + small.offsetTop - box.offsetTop - mask.offsetHeight / 2;

        if (x < 0){
            x = 0;
        }else if(x > small.offsetWidth - mask.offsetWidth){
            x = small.offsetWidth- mask.offsetWidth;
        }
        if (y < 0){
            y = 0;
        }else if(y > small.offsetHeight - mask.offsetHeight){
            y = small.offsetHeight - mask.offsetHeight;
        }

        mask.style.left = x + 'px';
        mask.style.top = y + 'px';

      
        var percentX = x / small.offsetWidth;
        var percentY = y / small.offsetHeight;
       
     
      
        var left = percentX * bigImg.offsetWidth;
        var top = percentY * bigImg.offsetHeight;
        if (left > bigImg.offsetWidth - big.offsetWidth){
            left = bigImg.offsetWidth - big.offsetWidth;
        }
        if (top > bigImg.offsetWidth - big.offsetWidth){
            top = bigImg.offsetHeight - big.offsetHeight;
        }

        bigImg.style.left = -left  + 'px';
        bigImg.style.top = -top  + 'px';
        
    };

    
    small.onmouseenter = function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    };
   
    small.onmouseleave = function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    };