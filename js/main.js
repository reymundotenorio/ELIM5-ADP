$(document).ready(function() {
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
    var tweenMaxRepeat = new TimelineMax({ repeat: -1 });

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

  // Animate title
  function animateTitle() {
    $("#future_title").textillate({
      type: "char",
      in: {
        effect: "fadeInUp",
        delayScale: 0.8,
        delay: 40,
        callback: function() {
          // console.log("Finished loading title");
        }
      },
      out: {
        effect: "none"
      }
    });
  }

  function animatePoints() {
    // Get point child element
    var time = 0.1;

    for (i = 1; i < 40; i++) {
      var point = $(
        `.main .future-of-hr-tech .animation-container .circle-container .invisible-circle .point-container:nth-child(${i}) .point`
      );

      point.addClass("with-animation");
      point.css({ "animation-delay": `${time}s` });
      time += 0.05;
    }
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

    // Run animate points
    setTimeout(function() {
      animatePoints();
    }, 200);
  }

  // Animate blue circle
  function animateBlueCircle() {
    var tweenMax = new TimelineMax();

    tweenMax.to("#blue_circle", 0.85, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate iphone
  function animateIphone() {
    var tweenMax = new TimelineMax();

    tweenMax.to("#iphone", 0.6, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate button Executive & Manager Insights
  function animateButtonExecutiveManager() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.executive-manager", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.executive-manager",
        0.6,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Data Explorers
  function animateButtonDataExplorers() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.data-explorers", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.data-explorers",
        0.6,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Reporting & Analytics
  function animateButtonReportingAnalytics() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.reporting-analytics", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.reporting-analytics",
        0.6,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Benchmarking
  function animateButtonBenchmarking() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.benchmarking", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.benchmarking",
        0.6,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Run ALL animations
  function playAnimations() {
    let timer = 500;

    // Run init cicle
    initCircle();

    // Run move buildings background
    moveBuildingsBackground();

    // Run animate blue circle
    animateBlueCircle();

    // Run animate title
    animateTitle();

    // Run animate iphone
    setTimeout(function() {
      animateIphone();
    }, timer);

    // Reset timer
    timer = 250;

    // Run animate button Executive & Manager Insights
    setTimeout(function() {
      animateButtonExecutiveManager();
    }, timer * 2);

    // Run animate button Data Explorers
    setTimeout(function() {
      animateButtonDataExplorers();
    }, timer * 3);

    // Run animate button Reporting & Analytics
    setTimeout(function() {
      animateButtonReportingAnalytics();
    }, timer * 4);

    // Run animate button Benchmarking
    setTimeout(function() {
      animateButtonBenchmarking();
    }, timer * 5);

    // Run animate circle
    setTimeout(function() {
      animateCircle();
    }, timer * 5);
  }

  playAnimations();
});
