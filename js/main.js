$( document ).ready(function() {
  var tweenMax = new TimelineMax();

  function moveBuildingsBackground() {
    tweenMax.to("#buildings", 4, {
      backgroundPosition: "75% 0%",
      ease: Linear.easeNone
    });
  
    tweenMax.to("#buildings", 2, {
      backgroundPosition: "25% 0%",
      ease: Linear.easeNone
    });
  
    tweenMax.to("#buildings", 1, {
      backgroundPosition: "100% 0%",
      ease: Linear.easeNone
    });
  
    tweenMax.to("#buildings", 5, {
      backgroundPosition: "0% 0%",
      ease: Linear.easeNone
    });
  
    moveBuildingsBackground();
  }
  
  moveBuildingsBackground();
});