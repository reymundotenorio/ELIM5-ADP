$(document).ready(function() {
  var tweenMaxRepeat = new TimelineMax({ repeat: -1 });

  // Move buildings functions
  function moveBuildingsBackground() {
    tweenMaxRepeat
      .to("#buildings", 4, {
        backgroundPosition: "75% 0%",
        ease: Linear.easeNone
      })
      .to("#buildings", 2, {
        backgroundPosition: "25% 0%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "100% 0%",
        ease: Linear.easeNone
      })
      .to("#buildings", 5, {
        backgroundPosition: "0% 0%",
        ease: Linear.easeNone
      });
  }

  // Run move buildings functions
  moveBuildingsBackground();
});
