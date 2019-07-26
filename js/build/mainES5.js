"use strict";

$(document).ready(function() {
  var informationFirstTime = true; // Animate SVG

  function animateSVG(target, percent) {
    var path = $(target).get(0);
    var pathLen = path.getTotalLength();
    var adjustedLen = (percent * pathLen) / 100;
    path.setAttribute("stroke-dasharray", adjustedLen + " " + pathLen);
  }

  function initCircle() {
    animateSVG("#circle", 0);
  } // Move buildings background

  function moveBuildingsBackground() {
    var tweenMaxRepeat = new TimelineMax({
      repeat: -1
    });
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
  } // Animate title

  function animateTitle() {
    $("#future_title").textillate({
      type: "char",
      in: {
        effect: "fadeInUp",
        delayScale: 0.8,
        delay: 40,
        callback: function callback() {
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
      var point = $(".main .future-of-hr-tech .animation-container .circle-container .invisible-circle .point-container:nth-child(".concat(i, ") .point"));
      point.addClass("with-animation");
      point.css({
        "animation-delay": "".concat(time, "s")
      });
      time += 0.05;
    }
  } // Animate circle

  function animateCircle() {
    // Get circle element
    var circleSVG = $("#circle"); // Adding stroke color

    circleSVG.css({
      stroke: "#000000"
    }); // Adding class to enable transition

    circleSVG.attr("class", "with-transition");
    animateSVG("#circle", 100); // Run animate points

    setTimeout(function() {
      animatePoints();
    }, 200);
  } // Animate blue circle

  function animateBlueCircle() {
    var tweenMax = new TimelineMax();
    tweenMax.to("#blue_circle", 0.85, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  } // Animate iphone

  function animateIphone() {
    var tweenMax = new TimelineMax();
    tweenMax.to("#iphone", 0.6, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  } // Animate button Executive & Manager Insights

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
  } // Animate button Data Explorers

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
  } // Animate button Reporting & Analytics

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
  } // Animate button Benchmarking

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
  } // Collapse and add/remove active class to button

  function collapseAndActive(button, block) {
    var _this = this;

    block.slideToggle(300, function() {
      if (block.css("display") === "block") {
        $(_this).addClass("active");
        button.addClass("active");
      } else {
        $(_this).removeClass("active");
        button.removeClass("active");
      }
    });
  }

  function hidePreviousCollapse(currentIndex) {
    var selectors = ["executive-manager", "data-explorers", "reporting-analytics", "benchmarking"];
    selectors.forEach(function(item, index) {
      if (index != currentIndex) {
        var block = $(".description.mobile.".concat(item));
        var button = $(".button.mobile.".concat(item));

        if (block.hasClass("active")) {
          collapseAndActive(button, block);
        }
      }
    });
  } // Activate mobile buttons click listeners

  function ActivateButtonsMobileListers() {
    var _this2 = this;

    // Button mobile click listener - Executive & Manager Insights
    $(".button.mobile.executive-manager").click(function() {
      var buttonElement = $(_this2);
      var blockElement = $(".description.mobile.executive-manager");
      hidePreviousCollapse(0);
      collapseAndActive(buttonElement, blockElement);
    }); // Button mobile click listener - Data Explorers

    $(".button.mobile.data-explorers").click(function() {
      var buttonElement = $(_this2);
      var blockElement = $(".description.mobile.data-explorers");
      hidePreviousCollapse(1);
      collapseAndActive(buttonElement, blockElement);
    }); // Button mobile click listener - Reporting & Analytics

    $(".button.mobile.reporting-analytics").click(function() {
      var buttonElement = $(_this2);
      var blockElement = $(".description.mobile.reporting-analytics");
      hidePreviousCollapse(2);
      collapseAndActive(buttonElement, blockElement);
    }); // Button mobile click listener - Benchmarking

    $(".button.mobile.benchmarking").click(function() {
      var buttonElement = $(_this2);
      var blockElement = $(".description.mobile.benchmarking");
      hidePreviousCollapse(3);
      collapseAndActive(buttonElement, blockElement);
    });
  } // Add Textillate properties to informations

  function addTextillateToInformation() {
    var titles = ["#executive_manager_title", "#data_explorers_title", "#reporting_analytics_title", "#benchmarking_title"];
    var descriptions = ["#executive_manager_description", "#data_explorers_description", "#reporting_analytics_description", "#benchmarking_description"];
    var containers = [".description.desktop.executive-manager", ".description.desktop.data-explorers", ".description.desktop.reporting-analytics", ".description.desktop.benchmarking"];
    titles.forEach(function(title, count) {
      $(title).textillate({
        type: "char",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInLeft",
          delayScale: 0.5,
          callback: function callback() {
            $(descriptions[count]).textillate("in");
          }
        },
        out: {
          effect: "fadeOutLeft",
          delayScale: 0.5,
          callback: function callback() {
            $(containers[count]).fadeOut(10);
          }
        }
      });
    });
    descriptions.forEach(function(description, count) {
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
          sync: true,
          callback: function callback() {
            $(titles[count]).textillate("out");
          }
        }
      });
    });
  } // Remove inactive class from buttons

  function removeInactiveState() {
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    buttons.forEach(function(button) {
      if ($(button).hasClass("inactive")) {
        $(button).removeClass("inactive");
      }
    }); // Run activate desktop buttons click listeners

    ActivateButtonsDesktopListeners();
  } // Activate desktop buttons click listeners

  function DeactivateButtonsDesktopListeners() {
    // Button desktop click listener - Executive & Manager Insights
    $(".button.desktop.executive-manager").unbind("click"); // Button desktop click listener - Data Explorers

    $(".button.desktop.data-explorers").unbind("click"); // Button desktop click listener - Reporting & Analytics

    $(".button.desktop.reporting-analytics").unbind("click"); // Button desktop click listener - Benchmarking

    $(".button.desktop.benchmarking").unbind("click");
  } // Remove listeners from buttons

  function removeListenersToButtons() {
    // Run deactivate desktop buttons click listeners
    DeactivateButtonsDesktopListeners();
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    buttons.forEach(function(button) {
      $(button).addClass("inactive");
    });
  } // Close non active informations

  function closeNonActiveDescriptions(index) {
    var tweenMax = new TimelineMax();
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    var containers = [".description.desktop.executive-manager", ".description.desktop.data-explorers", ".description.desktop.reporting-analytics", ".description.desktop.benchmarking"];
    var descriptions = ["#executive_manager_description", "#data_explorers_description", "#reporting_analytics_description", "#benchmarking_description"];
    var circleTitles = [".circle-title.executive-manager", ".circle-title.data-explorers", ".circle-title.reporting-analytics", ".circle-title.benchmarking"];
    descriptions.forEach(function(description, count) {
      if (count != index) {
        if ($(containers[count]).hasClass("active")) {
          $(description).textillate("out");
          setTimeout(function() {
            tweenMax
              .to(circleTitles[count], 0.5, {
                scale: 1.1,
                ease: Linear.easeNone
              })
              .to(circleTitles[count], 0.2, {
                scale: 1,
                ease: Linear.easeNone
              });
          }, 1500);
          setTimeout(function() {
            $(containers[count]).removeClass("active");
            $(buttons[count]).removeClass("active");
          }, 2000);
        }
      }
    });
  } // Close non active informations on click

  async function closeNonActiveClickDescriptions(index) {
    var tweenMax = new TimelineMax();
    var circleTitles = [".circle-title.executive-manager", ".circle-title.data-explorers", ".circle-title.reporting-analytics", ".circle-title.benchmarking"];
    removeListenersToButtons();
    return new Promise(function(resolve) {
      var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
      var containers = [".description.desktop.executive-manager", ".description.desktop.data-explorers", ".description.desktop.reporting-analytics", ".description.desktop.benchmarking"];
      var descriptions = ["#executive_manager_description", "#data_explorers_description", "#reporting_analytics_description", "#benchmarking_description"];
      descriptions.forEach(function(description, count) {
        if (count != index) {
          if ($(containers[count]).hasClass("active")) {
            $(description).textillate("out");
            setTimeout(function() {
              tweenMax
                .to(circleTitles[count], 0.5, {
                  scale: 1.1,
                  ease: Linear.easeNone
                })
                .to(circleTitles[count], 0.2, {
                  scale: 1,
                  ease: Linear.easeNone
                });
            }, 1500);
            setTimeout(function() {
              $(containers[count]).removeClass("active");
              $(buttons[count]).removeClass("active");
            }, 2000);
          }
        }
      });
      setTimeout(function() {
        setTimeout(function() {
          ActivateButtonsDesktopListeners();
        }, 2500);
        resolve("Done!");
      }, 2500);
    });
  } // Show descriptions with animation

  async function animateShowDescriptions(index, button, container, title) {
    var tweenMax = new TimelineMax();
    var circleTitles = [".circle-title.executive-manager", ".circle-title.data-explorers", ".circle-title.reporting-analytics", ".circle-title.benchmarking"];
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    return new Promise(function(resolve) {
      closeNonActiveDescriptions(index);
      setTimeout(function() {
        tweenMax
          .to("".concat(buttons[index], ">.explosion"), 0.45, {
            left: "-20pt",
            right: "-20pt",
            top: "-20pt",
            bottom: "-20pt",
            ease: Linear.easeNone
          })
          .to(
            "".concat(buttons[index], ">.explosion"),
            0.08,
            {
              borderWidth: 0,
              ease: Linear.easeNone
            },
            "-=0.1"
          );
        tweenMax.to(
          "".concat(buttons[index], ">.explosion>.points-around"),
          0.3,
          {
            scale: 2,
            opacity: 1,
            ease: Linear.easeNone
          },
          "-=0.3"
        );
        tweenMax.to(
          "".concat(buttons[index], ">.explosion>.points-around>.points-container"),
          0.4,
          {
            opacity: 0,
            ease: Linear.easeNone
          },
          "-=0.3"
        );
        tweenMax.to(
          "".concat(buttons[index], ">.explosion>.points-around>.points-container>.point"),
          0.4,
          {
            scale: 0,
            ease: Linear.easeNone
          },
          "-=0.4"
        );
        $(container).fadeIn(10, function() {
          tweenMax
            .to(circleTitles[index], 0.5, {
              scale: 1.1,
              ease: Linear.easeNone
            })
            .to(
              circleTitles[index],
              0.4,
              {
                scale: 0,
                ease: Linear.easeNone
              },
              "-=0.1"
            );
          $(title).textillate("in");
          $(button).addClass("active");
          $(container).addClass("active");
        });
        setTimeout(function() {
          resolve("Done!");
        }, 4000);
      }, 3500);
    });
  } // Show descriptions with animation with click

  function animateShowDescriptionsClick(index, button, container, title) {
    var tweenMax = new TimelineMax();
    var circleTitles = [".circle-title.executive-manager", ".circle-title.data-explorers", ".circle-title.reporting-analytics", ".circle-title.benchmarking"];
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    $("".concat(buttons[index], ">.explosion")).removeAttr("style");
    $("".concat(buttons[index], ">.explosion>.points-around")).removeAttr("style");
    $("".concat(buttons[index], ">.explosion>.points-around>.points-container")).removeAttr("style");
    $("".concat(buttons[index], ">.explosion>.points-around>.points-container>.point")).removeAttr("style");
    tweenMax
      .to("".concat(buttons[index], ">.explosion"), 0.45, {
        left: "-20pt",
        right: "-20pt",
        top: "-20pt",
        bottom: "-20pt",
        ease: Linear.easeNone
      })
      .to(
        "".concat(buttons[index], ">.explosion"),
        0.08,
        {
          borderWidth: 0,
          ease: Linear.easeNone
        },
        "-=0.1"
      );
    tweenMax.to(
      "".concat(buttons[index], ">.explosion>.points-around"),
      0.3,
      {
        scale: 2,
        opacity: 1,
        ease: Linear.easeNone
      },
      "-=0.3"
    );
    tweenMax.to(
      "".concat(buttons[index], ">.explosion>.points-around>.points-container"),
      0.4,
      {
        opacity: 0,
        ease: Linear.easeNone
      },
      "-=0.3"
    );
    tweenMax.to(
      "".concat(buttons[index], ">.explosion>.points-around>.points-container>.point"),
      0.4,
      {
        scale: 0,
        ease: Linear.easeNone
      },
      "-=0.4"
    );

    if (informationFirstTime) {
      $(container).fadeIn(10, function() {
        $(title).textillate("in");
        $(button).addClass("active");
        $(container).addClass("active");
        tweenMax
          .to(circleTitles[index], 0.5, {
            scale: 1.1,
            ease: Linear.easeNone
          })
          .to(
            circleTitles[index],
            0.4,
            {
              scale: 0,
              ease: Linear.easeNone
            },
            "-=0.1"
          );
      });
    } else {
      closeNonActiveClickDescriptions(index).then(function(response) {
        // setTimeout(() => {
        $(container).fadeIn(10, function() {
          $(title).textillate("in");
          $(button).addClass("active");
          $(container).addClass("active");
          tweenMax
            .to(circleTitles[index], 0.5, {
              scale: 1.1,
              ease: Linear.easeNone
            })
            .to(
              circleTitles[index],
              0.4,
              {
                scale: 0,
                ease: Linear.easeNone
              },
              "-=0.1"
            );
        }); // }, 2000);
        // console.log(response);

        return;
      });
    }

    informationFirstTime = false;
  } // Activate desktop buttons click listeners

  function ActivateButtonsDesktopListeners() {
    var _this3 = this;

    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    buttons.forEach(function(button) {
      $(button).removeClass("inactive");
    }); // Button desktop click listener - Executive & Manager Insights

    $(".button.desktop.executive-manager").click(function() {
      if (!$(_this3).hasClass("active")) {
        // Animate description Executive Manager
        animateShowDescriptionsClick(0, ".button.desktop.executive-manager", ".description.desktop.executive-manager", "#executive_manager_title");
      }
    }); // Button desktop click listener - Data Explorers

    $(".button.desktop.data-explorers").click(function() {
      if (!$(_this3).hasClass("active")) {
        // Animate description Data Explorers
        animateShowDescriptionsClick(1, ".button.desktop.data-explorers", ".description.desktop.data-explorers", "#data_explorers_title");
      }
    }); // Button desktop click listener - Reporting & Analytics

    $(".button.desktop.reporting-analytics").click(function() {
      if (!$(_this3).hasClass("active")) {
        // Animate description Reporting & Analytics
        animateShowDescriptionsClick(2, ".button.desktop.reporting-analytics", ".description.desktop.reporting-analytics", "#reporting_analytics_title");
      }
    }); // Button desktop click listener - Benchmarking

    $(".button.desktop.benchmarking").click(function() {
      if (!$(_this3).hasClass("active")) {
        // Animate description Benchmarking
        animateShowDescriptionsClick(3, ".button.desktop.benchmarking", ".description.desktop.benchmarking", "#benchmarking_title");
      }
    });
  } // Animate descriptions desktop

  function animateDescriptions() {
    // Animate description Executive Manager
    animateShowDescriptions(0, ".button.desktop.executive-manager", ".description.desktop.executive-manager", "#executive_manager_title").then(function(response) {
      // Animate description Data Explorers
      animateShowDescriptions(1, ".button.desktop.data-explorers", ".description.desktop.data-explorers", "#data_explorers_title").then(function(response) {
        // Animate description Reporting & Analytics
        animateShowDescriptions(2, ".button.desktop.reporting-analytics", ".description.desktop.reporting-analytics", "#reporting_analytics_title").then(function(response) {
          // Animate description Benchmarking
          animateShowDescriptions(3, ".button.desktop.benchmarking", ".description.desktop.benchmarking", "#benchmarking_title").then(function(response) {
            // return "Done";
            closeNonActiveDescriptions(1);
            setTimeout(function() {
              removeInactiveState();
            }, 2000);
          });
        });
      });
    });
  } // Animate buttons titles

  function animateButtonsTitles() {
    var tweenMax = new TimelineMax();
    tweenMax
      .to(".circle-title.executive-manager", 0.5, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".circle-title.executive-manager",
        0.5,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.5"
      )
      .to(".circle-title.data-explorers", 0.5, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".circle-title.data-explorers",
        0.5,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.5"
      )
      .to(".circle-title.reporting-analytics", 0.5, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".circle-title.reporting-analytics",
        0.5,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.5"
      )
      .to(".circle-title.benchmarking", 0.5, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".circle-title.benchmarking",
        0.5,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.5"
      );
  } // Run ALL animations

  function playAnimations() {
    // Run init cicle
    initCircle(); // Run activate mobile buttons click listeners

    ActivateButtonsMobileListers(); // Run init textillate

    addTextillateToInformation(); // Run move buildings background

    moveBuildingsBackground(); // Run animate blue circle

    animateBlueCircle(); // Run animate title

    animateTitle();
    var timer = 500; // Run animate iphone

    setTimeout(function() {
      animateIphone();
    }, timer); // Reset timer

    timer = 250; // Run animate button Executive & Manager Insights

    setTimeout(function() {
      animateButtonExecutiveManager();
    }, timer * 2); // Run animate button Data Explorers

    setTimeout(function() {
      animateButtonDataExplorers();
    }, timer * 3); // Run animate button Reporting & Analytics

    setTimeout(function() {
      animateButtonReportingAnalytics();
    }, timer * 4); // Run animate button Benchmarking

    setTimeout(function() {
      animateButtonBenchmarking();
    }, timer * 5); // Run animate titles

    setTimeout(function() {
      animateButtonsTitles();
    }, timer * 6); // Run animate circle

    setTimeout(function() {
      animateCircle();
    }, timer * 13); // Run animate descriptions

    setTimeout(function() {
      animateDescriptions();
    }, 1500);
  }

  playAnimations();
});
