
gsap.from("#page1 img", {
  scale: 0.3,
  borderRadius: "50px",
  delay: 0.5,
  duration: 2,
});

var g = gsap.timeline();
g.from("#content h1", {
  y: -500,
  delay: 0.3,
  opacity: 0,
  duration: 0.9,
  stagger: 0.5,
});
g.from("#hi", {
  x: -500,

  opacity: 0,
  duration: 0.9,
  stagger: 0.5,
});

g.from("#nav i", {
  y: -500,

  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
g.from("#nav-part2", {
  x: -500,

  opacity: 0,
  duration: 0.9,
  stagger: 0.5,
});

var allH1 = document.querySelectorAll("#page2 h1");
allH1.forEach(function (elem) {
  var h1Text = elem.textContent;
  var splitedText = h1Text.split("");
  var clutter = "";
  splitedText.forEach(function (elemm) {
    clutter += `<span>${elemm}</span>`;
  });
  elem.innerHTML = clutter;
});

// Animate each span color on scroll in page2
g.to("#page2 h1 span", {
  color: "#E3E3C4",
  stagger: 0.04,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    start: "top 45%",
    end: "top -15%",
    scrub: 2,
    // markers: true,
  },
});
