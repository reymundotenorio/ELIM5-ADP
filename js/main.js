var tl = new TimelineMax({ repeat: -1 }); /* repeat loop forever */

tl.to("#buildings", 10, {
//   backgroundPosition: "-2247px 0px" /* negative width of background image your animating - left top */,
  backgroundPosition: "100% 0%" /* negative width of background image your animating - left top */,
  ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
});
