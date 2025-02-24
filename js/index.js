
/* 
SCRIPTS DE LA PÁGINA DE INICIO (INDEX)
*/

const scrollWrapper = document.getElementById('scrollWrapper');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const nextButtons = document.querySelectorAll('.btn-next');
const prevButtons = document.querySelectorAll('.btn-prev');


  // SCROLL HORIZONTAL
window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (e.deltaY > 0) {
    // Siguiente pantalla
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = slides.length - 1;
    }
  } else {
    // Pantalla anterior
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = 0;
    }
  }

  // Calcula la posición horizontal a la que debemos ir
  const scrollPos = window.innerWidth * currentSlide;

  // Desplaza el wrapper de forma suave
  scrollWrapper.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}, { passive: false });


  // ANIMACIÓN DEL FONDO DE CADA SLIDE
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Finisher para el slide 1
  new FinisherHeader1({
    "count": 12,
    "size": {
      "min": 1300,
      "max": 1500,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0.6,
        "max": 3
      },
      "y": {
        "min": 0.6,
        "max": 3
      }
    },
    "colors": {
      "background": "#050f20",
      "particles": [
        "#13346d",
        "#050f20",
        "#202a5a",
        "#031129"
      ]
    },
    "blending": "lighten",
    "opacity": {
      "center": 0.6,
      "edge": 0
    },
    "skew": 0,
    "shapes": [
      "c"
    ]
  });

  // Inicializa Finisher para el slide 2 (con otros colores)
  new FinisherHeader2({
      "count": 12,
      "size": {
        "min": 1300,
        "max": 1500,
        "pulse": 0
      },
      "speed": {
        "x": {
          "min": 0.6,
          "max": 1
        },
        "y": {
          "min": 0.6,
          "max": 1.1
        }
      },
      "colors": {
        "background": "#35313b",
        "particles": [
          "#83858e",
          "#453745",
          "#000000",
          "#000000"
        ]
      },
      "blending": "lighten",
      "opacity": {
        "center": 0.6,
        "edge": 0
      },
      "skew": 0,
      "shapes": [
        "c"
      ]
    });

  // Inicializa Finisher para el slide 3 (con otros colores)
  new FinisherHeader3({
    "count": 12,
    "size": {
      "min": 1300,
      "max": 1500,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0.6,
        "max": 1.6
      },
      "y": {
        "min": 0.6,
        "max": 1.6
      }
    },
    "colors": {
      "background": "#000000",
      "particles": [
        "#3d9f2d",
        "#082709",
        "#082709",
        "#083e0b"
      ]
    },
    "blending": "lighten",
    "opacity": {
      "center": 0.6,
      "edge": 0
    },
    "skew": 0,
    "shapes": [
      "c"
    ]
  });
});


// EFECTO FLIP DE LAS TARJETAS DE PROYECTO
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


// EFECTO MAGNÉTICO SUTIL SOBRE .tilt-wrapper
document.querySelectorAll('.project-card').forEach(card => {
  const tiltWrapper = card.querySelector('.tilt-wrapper');
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    // Coordenadas relativas dentro de la tarjeta
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcula el centro del contenedor
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Determina la distancia del cursor al centro (en porcentaje)
    const percentX = (x - centerX) / centerX; // va de -1 a 1
    const percentY = (y - centerY) / centerY; // va de -1 a 1
    
    // Define el desplazamiento máximo (en píxeles)
    const maxTranslate = 8;
    
    // Calcula el desplazamiento en X e Y
    const translateX = percentX * maxTranslate;
    const translateY = percentY * maxTranslate;
    
    // Aplica la transformación magnética (traslación y escala)
    tiltWrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.04)`;
  });
  
  card.addEventListener('mouseleave', () => {
    // Reinicia el efecto cuando el cursor sale de la tarjeta
    tiltWrapper.style.transform = 'translate(0, 0) scale(1)';
  });
});


// LÓGICA BOTONES NEXT Y PREV
function goToNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
  }
  scrollToSlide(currentSlide);
}


function goToPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  scrollToSlide(currentSlide);
}

nextButtons.forEach(btn => {
  btn.addEventListener('click', goToNextSlide);
});

prevButtons.forEach(btn => {
  btn.addEventListener('click', goToPrevSlide);
});

// Función que desplaza el scroll al slide deseado
function scrollToSlide(slideIndex) {
  const scrollPos = window.innerWidth * slideIndex;
  scrollWrapper.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}