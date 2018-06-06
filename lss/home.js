var canvas = document.getElementById("canvas");
var sheep = document.getElementById("sheep");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  sheep.style.top = 400 + y * .97 + "px";

  sheep.innerHTML = y + "px";

    icon.style.top = 200 + y  + "px";

  if(y > 1000){

      icon.src="sleep.svg";}
  else{

  icon.src="sheep.svg";
 }

};
