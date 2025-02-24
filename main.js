document.addEventListener("DOMContentLoaded", () => {
  gsap.set("nav", { y: -150 });

  const digit1 = document.querySelector(".digit-1");
  const digit2 = document.querySelector(".digit-2");
  const digit3 = document.querySelector(".digit-3");

  const splitTextIntoSpans = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const text = element.innerText;
      const splitText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      element.innerHTML = splitText;
    }
  };

  splitTextIntoSpans("nav h1");

  const animate = (digit, targetNumber, duration, delay = 1) => {
    const numHeight = digit.querySelector(".num").clientHeight;
    const totalDistance = targetNumber * numHeight;

    console.log(`Animating ${digit.className}:`, { numHeight, totalDistance });

    gsap.to(digit, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
      onComplete: () => console.log(`Animation complete for ${digit.className}`),
    });
  };

  animate(digit1, 2, 4);
  animate(digit2, 3, 3);
  animate(digit3, 7, 5);

  gsap.to(".progress_bar",{
    width: "30%",
    duration: 2,
    ease: "power4.inOut",
    delay: 7,
  });

  gsap.to(".progress_bar",{
    width: "100%",
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    delay: 8.5,
  });

  gsap.to(".hero_images > img",{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease:"power4.inOut",
    stagger: 0.5,
    delay: 9,
  });

  gsap.to(".hero",{
    scale: 1.25,
    duration: 3,
    ease:"power3.inOut",
    delay: 10,
    onComplete:() =>{
      gsap.set(".content", {
        display: "flex",
      });
    },
  })

});