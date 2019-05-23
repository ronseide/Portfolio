
$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      console.log(acc[i])
      acc[i].addEventListener("mouseenter", hoverScreenShot) 
      acc[i].addEventListener("mouseout", hoverScreenShot) 
    }
    function hoverDisplay () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      };
      function hoverScreenShot (event) {
          console.log($(this).data("name"));
        var screenShotPanels = document.getElementsByClassName($(this).data("name"));
        console.log(screenShotPanels);
        for (var i = 0; i < screenShotPanels.length; i++) {
            if (screenShotPanels[i].style.display === "block") {
                screenShotPanels[i].style.display = "none";
              } else {
                screenShotPanels[i].style.display = "block";
              }
    
        }
    
  
      }

});

