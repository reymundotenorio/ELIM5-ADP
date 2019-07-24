$(document).ready(function() {
  var tweenMaxRepeat = new TimelineMax({ repeat: -1 });

  // Animate SVG
  function animateSVG(target, percent) {
    var path = $(target).get(0);
    var pathLen = path.getTotalLength();
    var adjustedLen = (percent * pathLen) / 100;
    path.setAttribute("stroke-dasharray", adjustedLen + " " + pathLen);
  }

  function initCircle() {
    animateSVG("#circle", 0);
  }

  // Move buildings background
  function moveBuildingsBackground() {
    tweenMaxRepeat
      .to("#buildings", 1, {
        backgroundPosition: "30% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 2, {
        // Return 0
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 3, {
        // Delay on 0
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.8, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.2, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.2, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.5, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.2, {
        // Delay on 60
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "80% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "78% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "82% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "75% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "98% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.5, {
        backgroundPosition: "35% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        // Delay on 35
        backgroundPosition: "35% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.2, {
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      });
  }

  function animateTitle() {
    $("#future_title").textillate({
      type: "char",
      in: {
        effect: "fadeInUp",
        delayScale: 1.5,
        delay: 40,
        callback: function() {
          console.log("Finished loading title");
        }
      },
      out: {
        effect: "none"
      }
    });
  }

  // Animate circle
  function animateCircle() {
    // Get circle element
    var circleSVG = $("#circle");
    // Adding stroke color
    circleSVG.css({ stroke: "#000000" });
    // Adding class to enable transition
    circleSVG.attr("class", "with-transition");

    animateSVG("#circle", 100);
  }

  function animatePoints(){
    
  }

  // Run init cicle
  initCircle();

  // Run move buildings background
  moveBuildingsBackground();
  // Run animate title
  animateTitle();
  // Run animate circle
  animateCircle();
});
