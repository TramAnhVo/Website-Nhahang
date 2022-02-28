/********** lua chon menu  *************************/
$(document).ready(function () {
    $(".menu li").click(function () {
      var choose = $(this).attr("index");
  
      if (choose == 0) 
      {
        $(".food").show(500);
        $(".thuc_uong").show(500);
        $(".trang_mieng").show(500);
      } 
      else if (choose == 1) 
      {
        $(".food").show(500);
        $(".thuc_uong").hide(500);
        $(".trang_mieng").hide(500);
      } 
      else if (choose == 2) 
      {
        $(".thuc_uong").show(500);
        $(".trang_mieng").hide(500);
        $(".food").hide(500);
      } 
      
      else if (choose == 3) 
      {
        $(".thuc_uong").hide(500);
        $(".trang_mieng").show(500);
        $(".food").hide(500);
      } 
    });
});

/********** menu cho pc và mobile  *************************/
function myFunction(y) {
  var x = document.getElementById("mm");
      y.classList.toggle("change");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
