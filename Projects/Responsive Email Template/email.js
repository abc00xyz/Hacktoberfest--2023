
document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".social-icon");
  
    socialIcons.forEach((icon, index) => {
      icon.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`;
    });
  });
  