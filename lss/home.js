var submarine = document.getElementById("sheep");

 window.onscroll = function(){

  console.log("yo, yo, yo");

  var fromTop = window.pageYOffset;

  console.log(fromTop);

  sheep.innerHTML = fromTop + "px";

  sheep.style.top = fromTop *1.02 + "px";

  // submarine.style.transform="rotate("+ fromTop + "deg)";
   };
