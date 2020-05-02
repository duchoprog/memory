document.addEventListener("DOMContentLoaded", () => {
  //cartas
  const cartasArray = [
    {
      name: "ck",
      img: "images/ck.jpg",
    },
    {
      name: "ck",
      img: "images/ck.jpg",
    },
    {
      name: "carr",
      img: "images/carr.jpg",
    },
    {
      name: "carr",
      img: "images/carr.jpg",
    },
    {
      name: "coco",
      img: "images/coco.jpg",
    },
    {
      name: "coco",
      img: "images/coco.jpg",
    },
    {
      name: "ing",
      img: "images/ing.jpg",
    },
    {
      name: "ing",
      img: "images/ing.jpg",
    },
    {
      name: "logi",
      img: "images/logi.jpg",
    },
    {
      name: "logi",
      img: "images/logi.jpg",
    },
    {
      name: "tex",
      img: "images/tex.jpg",
    },
    {
      name: "tex",
      img: "images/tex.jpg",
    },
  ];

  const grilla = document.querySelector(".grilla");
  var elegidasId = [];
  var elegidas = [];
  var contador = 0;
  var puntos = document.querySelector("#puntos");
  var aciertos = 0;
  //armo tablero
  function armarTablero() {
    for (i = 0; i < cartasArray.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/back.jpg");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearcarta);
      grilla.appendChild(carta);
    }
  }

  function mezclarCartas() {
    for (i = 0; i < cartasArray.length * 5; i++) {
      boleta = Math.floor(Math.random() * cartasArray.length);
      cartasArray.push(cartasArray.splice(boleta, 1)[0]);
    }
  }

  function comparar() {
    contador++;
    puntos.innerHTML = contador;

    var cartas = document.querySelectorAll("img");
    console.log(elegidasId);
    const primera = elegidas[0];
    const segunda = elegidas[1];

    if (primera.name == segunda.name) {
      aciertos++;
      cartas[elegidasId[0]].setAttribute("src", "images/fondo.jpg");
      cartas[elegidasId[1]].setAttribute("src", "images/fondo.jpg");
      cartas[elegidasId[0]].removeEventListener("click", voltearcarta);
      cartas[elegidasId[1]].removeEventListener("click", voltearcarta);
      elegidasId = [];
      elegidas = [];
      if (aciertos == cartasArray.length / 2) {
        setTimeout(final, 500);
      }
    } else {
      cartas[elegidasId[0]].setAttribute("src", "images/back.jpg");
      cartas[elegidasId[1]].setAttribute("src", "images/back.jpg");
      elegidasId = [];
      elegidas = [];
    }
  }
  function final() {
    document.querySelector(
      ".fin>h1"
    ).innerHTML = `Bue, por fin, te llevó ${contador} turnos.`;
    document.querySelector(".fin").classList.remove("invisible");
  }

  function voltearcarta() {
    cartaId = this.getAttribute("data-id");
    console.log(elegidasId, cartaId);
    if (!elegidasId[0] || (elegidasId[0] && elegidasId[0] != cartaId)) {
      elegidasId.push(cartaId);
      elegidas.push(cartasArray[cartaId]);
      this.setAttribute("src", cartasArray[cartaId].img);
      if (elegidas.length === 2) {
        setTimeout(comparar, 500);
      }
    }
  }

  armarTablero();
  mezclarCartas();
});
