const takeoverButton = document.querySelector(".takeover-button");
const takeover = takeoverButton.querySelector(".takeover");
const bg = takeover.querySelector(".background");
const button = takeoverButton.querySelector(".button");
const circle = button.querySelector(".circle");
const lineOne = button.querySelector(".line-1");
const lineTwo = button.querySelector(".line-2");
const lines = [lineOne, lineTwo];

const toggleTakeover = new TimelineMax({ paused: true, reversed: true });
const transition = new TimelineMax({ paused: true, reversed: true });

toggleTakeover
  .to(
    takeover,
    0.2,
    {
      width: "800px",
      height: "800px",
      x: "-290px",
      y: "-740px",
      ease: Expo.easeOut,
      transformOrigin: "center center"
    },
    0.4
  )
  .to(
    lines,
    0.2,
    {
      rotation: 90,
      ease: Expo.easeOut,
      transformOrigin: "center center"
    },
    0
  );

transition
  .to(
    circle,
    0.2,
    {
      ease: Expo.easeOut,
      transformOrigin: "0% 0%"
    },
    0.2
  )
  .to(lines, 0.2, { opacity: 0, ease: Expo.easeOut }, 0)
  .to(
    button,
    0.8,
    {
      width: "200vw",
      height: "200vh",
      ease: Expo.easeInOut,
      transformOrigin: "center center",
      x: "-100vw",
      y: "-100vh"
    },
    0.3
  )
  .to(
    circle,
    0.8,
    {
      scale: 1.2,
      ease: Expo.easeInOut,
      transformOrigin: "center center"
    },
    0.3
  );

takeoverButton.addEventListener("mouseenter", () => {
  if (takeoverButton.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? toggleTakeover.play() : null;
  }
});

takeoverButton.addEventListener("mouseleave", () => {
  if (takeoverButton.classList.contains("js-x")) {
    return;
  } else {
    toggleTakeover.reversed() ? null : toggleTakeover.reverse();
  }
});

takeoverButton.addEventListener("click", () => {
  takeoverButton.classList.toggle("js-x");
  toggleTakeover.reverse();
  if (transition.reversed()) {
    transition.play();
    // button.classList.add("active");
    // takeoverButton.classList.add("active");
  } else {
    transition.reverse();
  }
});
