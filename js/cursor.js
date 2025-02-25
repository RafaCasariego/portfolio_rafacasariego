document.addEventListener("DOMContentLoaded", function () {
    // Crear el cursor principal
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    document.body.appendChild(cursor);
  
    // Crear la estela
    const trailCount = 10;
    let trails = [];
  
    for (let i = 0; i < trailCount; i++) {
      let trail = document.createElement("div");
      trail.classList.add("cursor-trail");
      document.body.appendChild(trail);
      trails.push(trail);
    }
  
    let mouseX = 0, mouseY = 0;
    let isMoving = false;
  
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Mueve el cursor principal inmediatamente
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  
      if (!isMoving) {
        isMoving = true;
        moveTrails();
      }
    });
  
    function moveTrails() {
      if (!isMoving) return;
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }, index * 20);
      });
      requestAnimationFrame(moveTrails);
    }
  
    document.addEventListener("mouseleave", () => {
      isMoving = false;
    });
  });
  