var canvas = document.getElementById("canvas");
var sheep = document.getElementById("sheep");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  sheep.style.top = 400 + y * .97 + "px";

  sheep.innerHTML = "sheep";

  if (y > 2000) {
    sheep.style.backgroundColor = "green";
  }else{
    sheep.style.backgroundColor = "blue";}

  icon.style.top = 200 + y  + "px";

  if(y > 2000){

      // icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

  }else{

  // icon.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
 }

};
