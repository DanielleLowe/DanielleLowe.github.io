var submarine = document.getElementById("submarine");

 window.onscroll = function(){

  console.log("yo, yo, yo");

  var fromTop = window.pageYOffset;

  console.log(fromTop);

  submarine.innerHTML = fromTop + "px";

  submarine.style.top = fromTop *1.02 + "px";

  // submarine.style.transform="rotate("+ fromTop + "deg)";
   };
