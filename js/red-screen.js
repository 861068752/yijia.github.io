var more = document.getElementsByClassName('more')[0];

var a = document.getElementsByClassName('red-under')[0];


a.onmouseover = function(){
  more.style.background = 'red';
  a.style.color = 'white';
  
  
};
a.onmouseout = function(){
  more.style.background = 'white';
  a.style.color = 'red';

}
