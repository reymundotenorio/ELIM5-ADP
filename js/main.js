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

  // Collapse and add/remove active class to button
  function collapseAndActive(button, block) {
    block.slideToggle(300, function() {
      if (block.css("display") === "block") {
        $(this).addClass("active");
        button.addClass("active");
      } else {
        $(this).removeClass("active");
        button.removeClass("active");
      }
    });
  }

  function hidePreviousCollapse(currentIndex) {
    var selectors = ["executive-manager", "data-explorers", "reporting-analytics", "benchmarking"];

    selectors.forEach(function(item, index) {
      if (index != currentIndex) {
        var block = $(`.description.mobile.${item}`);
        var button = $(`.button.mobile.${item}`);

        if (block.hasClass("active")) {
          collapseAndActive(button, block);
        }
      }
    });
  }

  // Button mobile click listener - Executive & Manager Insights
  $(".button.mobile.executive-manager").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.executive-manager");

    hidePreviousCollapse(0);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Data Explorers
  $(".button.mobile.data-explorers").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.data-explorers");

    hidePreviousCollapse(1);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Reporting & Analytics
  $(".button.mobile.reporting-analytics").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.reporting-analytics");

    hidePreviousCollapse(2);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Benchmarking
  $(".button.mobile.benchmarking").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.benchmarking");

    hidePreviousCollapse(3);
    collapseAndActive(buttonElement, blockElement);
  });

  function addTextillateToInformation() {
    var titles = [
      "#executive_manager_title",
      "#data_explorers_title",
      "#reporting_analytics_title",
      "#benchmarking_title"
    ];

    var descriptions = [
      "#data_explorers_description",
      "#executive_manager_description",
      "#reporting_analytics_description",
      "#benchmarking_description"
    ];

    titles.forEach(title => {
      $(title).textillate({
        type: "char",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInLeft",
          delayScale: 0.5
        },
        out: {
          effect: "fadeOutLeft",
          delayScale: 0.5
        }
      });
    });

    descriptions.forEach(description => {
      $(description).textillate({
        type: "word",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInDown",
          delayScale: 0.5,
          sync: true
        },
        out: {
          effect: "fadeOutUp",
          delayScale: 0.5,
          sync: true
        }
      });
    });
  }
  
  function closeNonActiveDescriptions() {
    var titles = [
      "#executive_manager_title",
      "#data_explorers_title",
      "#reporting_analytics_title",
      "#benchmarking_title"
    ];

    var descriptions = [
      "#data_explorers_description",
      "#executive_manager_description",
      "#reporting_analytics_description",
      "#benchmarking_description"
    ];

    titles.forEach(title => {
      $(title).textillate({
        type: "char",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInLeft",
          delayScale: 0.5
        },
        out: {
          effect: "fadeOutLeft",
          delayScale: 0.5
        }
      });
    });

    descriptions.forEach(description => {
      $(description).textillate({
        type: "word",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInDown",
          delayScale: 0.5,
          sync: true
        },
        out: {
          effect: "fadeOutUp",
          delayScale: 0.5,
          sync: true
        }
      });
    });
  }

  // Show descriptions with animation
  function animateShowDescriptions(title, description) {
    $(title).textillate("in");

    setTimeout(() => {
      $(description).textillate("in");
    }, 800);

    // // var description = $(element);
    // // // Show container
    // // description.fadeIn(300, function() {
    // // });
    // // Animate title
    // $(element).textillate({
    //   type: "char",
    //   autoStart: false,
    //   loop: true,
    //   in: {
    //     effect: "fadeInLeft"
    //     // delayScale: 0.5,
    //     // callback: function() {
    //     //   // Animate description text
    //     //   description.find(".info-text").textillate({
    //     //     type: "word",
    //     //     // autoStart: false,
    //     //     in: {
    //     //       effect: "fadeInDown",
    //     //       delayScale: 1,
    //     //       delay: 0,
    //     //       sync: true
    //     //     },
    //     //     out: {
    //     //       effect: "fadeOutUp",
    //     //       delayScale: 1.5,
    //     //       delay: 50,
    //     //       sync: true
    //     //     }
    //     //   });
    //     // }
    //   },
    //   out: {
    //     effect: "fadeOutLeft"
    //     // delayScale: 0.5,
    //     // callback: function() {
    //     // Hide container
    //     // description.fadeOut(300);
    //     // }
    //   }
    // });
  }

  // Animate description Data Explorers
  function animateDescriptionExecutiveManager() {
    animateShowDescriptions("#executive_manager_title", "#executive_manager_description");
  }

  // Animate description Executive Manager
  function animateDescriptionDataExplorers() {
    animateShowDescriptions("#data_explorers_title", "#data_explorers_description");
  }

  // Animate description Reporting & Analytics
  function animateDescriptionExecutiveReportingAnalytics() {
    animateShowDescriptions("#reporting_analytics_title", "#reporting_analytics_description");
  }

  // Animate description Benchmarking
  function animateDescriptionBenchmarking() {
    animateShowDescriptions("#benchmarking_title", "#benchmarking_description");
  }

  // Run ALL animations
  function playAnimations() {
    let timer = 500;

    // Run init cicle
    initCircle();

    // Run init textillate
    addTextillateToInformation();

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

      // Reset timer
    timer = 4800;

    // Run animate descriptions
    setTimeout(function() {
      animateDescriptionExecutiveManager();
    }, timer);

    // Increasing timer
    timer += 2000;

    // Run animate descriptions
    setTimeout(function() {
      animateDescriptionDataExplorers();
    }, timer);

    // Increasing timer
    timer += 2000;

    // Run animate descriptions
    setTimeout(function() {
      animateDescriptionExecutiveReportingAnalytics();
    }, timer);

    // Increasing timer
    timer += 2000;

    // Run animate descriptions
    setTimeout(function() {
      animateDescriptionBenchmarking();
    }, timer);
  }

  playAnimations();
});
