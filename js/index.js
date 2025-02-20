const scrollWrapper = document.getElementById('scrollWrapper');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


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
      "background": "#5d5b57",
      "particles": [
        "#2d56ab",
        "#495168",
        "#2a2344",
        "#1a76e4"
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
        "#56704b",
        "#5d9e7e",
        "#78b3a4"
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

