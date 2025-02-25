document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("cursor")) {
        const cursor = document.createElement("div");
        cursor.id = "cursor";
        document.body.appendChild(cursor);
    }

    const cursor = document.getElementById("cursor");
    const trails = [];
    const trailAmount = 9; // Hacer la estela más corta

    // Crear los puntos de la estela
    for (let i = 0; i < trailAmount; i++) {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let lastX = 0, lastY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function animateTrails() {
        lastX += (mouseX - lastX) * 0.5; // Suaviza el movimiento
        lastY += (mouseY - lastY) * 0.5;

        for (let i = trails.length - 1; i > 0; i--) {
            trails[i].style.left = trails[i - 1].style.left;
            trails[i].style.top = trails[i - 1].style.top;

            // Hacer que los puntos más alejados sean más pequeños
            let scale = 1 - (i / trails.length) * 0.7; // Tamaño decreciente
            trails[i].style.transform = `translate(-50%, -50%) scale(${scale})`;
            trails[i].style.opacity = `${0.9 - (i / trails.length) * 0.2}`; // Desvanece poco a poco
        }

        if (trails.length > 0) {
            trails[0].style.left = `${lastX}px`;
            trails[0].style.top = `${lastY}px`;
        }

        requestAnimationFrame(animateTrails);
    }

    animateTrails();
});
