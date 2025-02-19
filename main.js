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
  
    const animate = (digit, duration, delay = 1) => {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;
  
      console.log(`Animating ${digit.className}:`, { numHeight, totalDistance });
  
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
        onComplete: () => console.log(`Animation complete for ${digit.className}`),
      });
    };
  
    // 237
    // Animate the digits
    animate(digit3, 5);
    animate(digit2, 6);
    animate(digit1, 2, 5);
  });