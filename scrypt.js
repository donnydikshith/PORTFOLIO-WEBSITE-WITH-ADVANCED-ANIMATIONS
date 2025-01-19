// Wait for the window to load
window.onload = () => {
    // Animate the hero section on load
    gsap.from(".content h1", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });
  
    gsap.from(".content p", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.5,
    });
  
    gsap.from(".cta-btn", {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
      delay: 1,
    });
  
    // Animate the about section when scrolling
    gsap.from(".about-section", {
      scrollTrigger: ".about-section",
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    });
  };
  