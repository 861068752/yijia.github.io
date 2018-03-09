 var imgbox = document.getElementsByClassName('b-b')[0];
    //console.log(getStyle(box, 'opacity'));
    imgbox.onmouseover = function(){animation(imgbox, {opacity:0.1})};
    imgbox.onmouseout = function(){animation(imgbox, {opacity:0.9})};

    function animation(obj, target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            //如果*100后还有小数，只保存整数部分
            var c = Math.round(getStyle(obj, 'opacity') * 100);
            var t = target.opacity * 100;
            var s = (t - c) / 10;
            s = s > 0 ? Math.ceil(s) : Math.floor(s);
            console.log(c + ', ' + t + ', ' + s);
            obj.style.opacity = (c + s)/100;
            obj.style.filter = 'alpha(opacity='+(c+s)+')';
            if (c + s == t){
                clearInterval(obj.timer);
            }
        }, 20);
    }

    function getStyle(obj,property){
        if (window.getComputedStyle){
            return getComputedStyle(obj,null)[property];
        }else{
            return obj.currentStyle[property];
        }
    }
