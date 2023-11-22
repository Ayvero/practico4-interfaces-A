// Obtén el contenedor de la imagen y la posición donde debería aparecer
let logo = document.getElementById("logo");
let triggerHeight = 150; // Ajusto este valor para que aparezca el logo chiquito cuando yo quiero

// Agrega un evento de scroll
window.addEventListener("scroll", function () {
  // Obtengo la posición actual de desplazamiento vertical
  let scrollPosition = window.scrollY || window.pageYOffset;

  // Verifica si la posición de desplazamiento alcanza el punto de activación
  if (scrollPosition > triggerHeight) {
    // Agrega la clase 'visible' para hacer visible la imagen
    logo.classList.add("pequeño");
  } else {
    // Remueve la clase 'visible' si la posición de desplazamiento está por debajo del punto de activación
    logo.classList.remove("pequeño");
  }
});

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".layer-1");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".layer-2");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".layer-3");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

