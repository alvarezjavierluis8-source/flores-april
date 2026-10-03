const inicio = document.querySelector(".inicio");
const boton = document.getElementById("btnFlores");

boton.addEventListener("click", mostrarSegundaPantalla);


/* =====================================
   SEGUNDA PANTALLA
===================================== */

function mostrarSegundaPantalla() {

    inicio.innerHTML = `
        <section class="universo">

            <h1 class="nombre-segunda">
                April Melanny 💛
            </h1>

            <p class="subtitulo-segunda">
                Flores amarillas para ti 🌻
            </p>

            <p class="frase frase1">Para ti 🌻</p>
            <p class="frase frase2">Eres especial 💛</p>
            <p class="frase frase3">Siempre sonríe ✨</p>

            <p class="frase frase4">Un detalle para ti 🌼</p>
            <p class="frase frase5">Con mucho cariño 💛</p>
            <p class="frase frase6">April Melanny 🌻</p>

            <div class="centro-amor">

                <div class="resplandor"></div>

                <img
                    src="img/a2.jpeg"
                    class="foto-centro"
                    alt="April Melanny"
                >

            </div>

            <div id="campoFlores"></div>
            <div id="particulas"></div>

            <button id="btnFinal">
                Siguiente ✨
            </button>

        </section>
    `;

    crearFlores();
    crearParticulas();

    document
        .getElementById("btnFinal")
        .addEventListener("click", mostrarFinal);
}


/* =====================================
   FLORES SEGUNDA PANTALLA
===================================== */

function crearFlores() {

    const campo =
        document.getElementById("campoFlores");

    for (let i = 0; i < 85; i++) {

        const flor =
            document.createElement("span");

        flor.className =
            "girasol-campo";

        flor.textContent = "🌻";

        flor.style.left =
            Math.random() * 100 + "%";

        flor.style.top =
            (48 + Math.random() * 46) + "%";

        flor.style.fontSize =
            (13 + Math.random() * 24) + "px";

        flor.style.animationDelay =
            Math.random() * 3 + "s";

        campo.appendChild(flor);
    }
}


/* =====================================
   PARTÍCULAS
===================================== */

function crearParticulas() {

    const contenedor =
        document.getElementById("particulas");

    for (let i = 0; i < 100; i++) {

        const punto =
            document.createElement("span");

        punto.className = "particula";

        punto.style.left =
            Math.random() * 100 + "%";

        punto.style.top =
            Math.random() * 100 + "%";

        const tamano =
            2 + Math.random() * 5;

        punto.style.width =
            tamano + "px";

        punto.style.height =
            tamano + "px";

        punto.style.animationDelay =
            Math.random() * 4 + "s";

        contenedor.appendChild(punto);
    }
}


/* =====================================
   PANTALLA FINAL
===================================== */

function mostrarFinal() {

    inicio.innerHTML = `
        <section class="pantalla-final">

            <!-- LÍNEAS DORADAS -->

            <div class="corazon-luz corazon-luz-izq"></div>
            <div class="corazon-luz corazon-luz-der"></div>


            <!-- RAMO PNG -->

            <div class="ramo-contenedor">

                <div class="aura-ramo"></div>

                <img
                    src="img/ramo.png"
                    class="ramo-png"
                    alt="Ramo de flores amarillas"
                >

            </div>


            <!-- MARIPOSAS -->

            <span class="mariposa m1">🦋</span>
            <span class="mariposa m2">🦋</span>
            <span class="mariposa m3">🦋</span>
            <span class="mariposa m4">🦋</span>
            <span class="mariposa m5">🦋</span>
            <span class="mariposa m6">🦋</span>


            <!-- CORAZONES -->

            <span class="corazon c1">💛</span>
            <span class="corazon c2">💛</span>
            <span class="corazon c3">💛</span>
            <span class="corazon c4">💛</span>
            <span class="corazon c5">💛</span>
            <span class="corazon c6">💛</span>


            <!-- CONTENIDO -->

            <div class="contenido-final">

                <p class="love-final">
                    ∞ LOVE YOU ♡
                </p>

                <h1>
                    April Melanny 💛
                </h1>

                <h2>
                    Flores amarillas para ti 🌻
                </h2>

                <img
                    src="img/a3.jpeg"
                    class="imagen-final"
                    alt="April Melanny"
                >

                <p class="texto-final">

                    Un pequeño detalle hecho especialmente para ti.
                    Espero que estas flores amarillas puedan sacarte
                    una bonita sonrisa. 🌻✨

                </p>

                <div class="separador">
                    ─── 💛 ───
                </div>

                <button id="btnVolver">
                    Volver 🌻
                </button>

            </div>


            <!-- FLORES DE LAS ESQUINAS -->

            <div class="jardin jardin-izquierdo">
                🌻 🌻 🌻 🌻
            </div>

            <div class="jardin jardin-derecho">
                🌻 🌻 🌻 🌻
            </div>


            <!-- EFECTOS -->

            <div id="efectosFinales"></div>

        </section>
    `;

    crearEfectosFinales();

    document
        .getElementById("btnVolver")
        .addEventListener("click", function () {

            location.reload();

        });
}


/* =====================================
   EFECTOS FINALES
===================================== */

function crearEfectosFinales() {

    const contenedor =
        document.getElementById("efectosFinales");


    /* DESTELLOS */

    for (let i = 0; i < 120; i++) {

        const brillo =
            document.createElement("span");

        brillo.className =
            "brillo-final";

        brillo.style.left =
            Math.random() * 100 + "%";

        brillo.style.top =
            Math.random() * 100 + "%";

        const tamano =
            2 + Math.random() * 5;

        brillo.style.width =
            tamano + "px";

        brillo.style.height =
            tamano + "px";

        brillo.style.animationDelay =
            Math.random() * 4 + "s";

        contenedor.appendChild(brillo);
    }


    /* PÉTALOS */

    for (let i = 0; i < 20; i++) {

        const petalo =
            document.createElement("span");

        petalo.className = "petalo";

        petalo.textContent = "🍂";

        petalo.style.left =
            Math.random() * 100 + "%";

        petalo.style.animationDelay =
            Math.random() * 7 + "s";

        petalo.style.animationDuration =
            (7 + Math.random() * 6) + "s";

        contenedor.appendChild(petalo);
    }
}