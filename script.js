/* =====================================================
   ELEMENTOS PRINCIPALES
===================================================== */

const inicio = document.querySelector(".inicio");
const boton = document.getElementById("btnFlores");


/* =====================================================
   PRECARGAR IMÁGENES
   Se cargan desde el inicio para evitar demora después.
===================================================== */

const precargarA2 = new Image();
precargarA2.src = "img/a2.jpeg";

const precargarA3 = new Image();
precargarA3.src = "img/a3.jpeg";

const precargarRamo = new Image();
precargarRamo.src = "img/ramo.png";


/* =====================================================
   BOTÓN DE LA PRIMERA PANTALLA
===================================================== */

boton.addEventListener("click", mostrarSegundaPantalla);


/* =====================================================
   SEGUNDA PANTALLA
===================================================== */

function mostrarSegundaPantalla() {

    inicio.innerHTML = `
        <section class="universo">

            <h1 class="nombre-segunda">
                April Melanny 💛
            </h1>

            <p class="subtitulo-segunda">
                Flores amarillas para ti 🌻
            </p>


            <p class="frase frase1">
                Para ti 🌻
            </p>

            <p class="frase frase2">
                Eres especial 💛
            </p>

            <p class="frase frase3">
                Siempre sonríe ✨
            </p>


            <p class="frase frase4">
                Un detalle para ti 🌼
            </p>

            <p class="frase frase5">
                Con mucho cariño 💛
            </p>

            <p class="frase frase6">
                April Melanny 🌻
            </p>


            <div class="centro-amor">

                <div class="resplandor"></div>

                <img
                    src="img/a2.jpeg"
                    class="foto-centro"
                    alt="Foto"
                >

            </div>


            <div id="campoFlores"></div>

            <div id="particulas"></div>


            <button id="btnFinal">
                Siguiente ✨
            </button>

        </section>
    `;


    /* Crear efectos ligeros */

    crearFlores();
    crearParticulas();


    /* Botón siguiente */

    const btnFinal =
        document.getElementById("btnFinal");

    btnFinal.addEventListener(
        "click",
        mostrarFinal
    );
}


/* =====================================================
   FLORES DE LA SEGUNDA PANTALLA
===================================================== */

function crearFlores() {

    const campo =
        document.getElementById("campoFlores");


    if (!campo) {
        return;
    }


    /* Menos flores = mejor rendimiento en celular */

    for (let i = 0; i < 35; i++) {

        const flor =
            document.createElement("span");


        flor.className =
            "girasol-campo";


        flor.textContent =
            "🌻";


        flor.style.left =
            Math.random() * 100 + "%";


        flor.style.top =
            (48 + Math.random() * 45) + "%";


        flor.style.fontSize =
            (13 + Math.random() * 18) + "px";


        flor.style.animationDelay =
            Math.random() * 3 + "s";


        campo.appendChild(flor);
    }
}


/* =====================================================
   PARTÍCULAS DE LA SEGUNDA PANTALLA
===================================================== */

function crearParticulas() {

    const contenedor =
        document.getElementById("particulas");


    if (!contenedor) {
        return;
    }


    /* Reducidas para mejorar velocidad */

    for (let i = 0; i < 30; i++) {

        const punto =
            document.createElement("span");


        punto.className =
            "particula";


        punto.style.left =
            Math.random() * 100 + "%";


        punto.style.top =
            Math.random() * 100 + "%";


        const tamano =
            2 + Math.random() * 3;


        punto.style.width =
            tamano + "px";


        punto.style.height =
            tamano + "px";


        punto.style.animationDelay =
            Math.random() * 4 + "s";


        contenedor.appendChild(punto);
    }
}


/* =====================================================
   TERCERA PANTALLA
===================================================== */

function mostrarFinal() {

    /*
       Evita que se pueda presionar
       varias veces rápidamente.
    */

    const btnFinal =
        document.getElementById("btnFinal");


    if (btnFinal) {

        btnFinal.disabled = true;

    }


    /*
       Cambiamos inmediatamente el contenido.
       No esperamos a crear partículas.
    */

    inicio.innerHTML = `
        <section class="pantalla-final">


            <!-- CORAZÓN DORADO -->

            <div
                class="corazon-luz corazon-luz-izq">
            </div>

            <div
                class="corazon-luz corazon-luz-der">
            </div>


            <!-- RAMO -->

            <div class="ramo-contenedor">

                <div class="aura-ramo"></div>

                <img
                    src="img/ramo.png"
                    class="ramo-png"
                    alt="Ramo de flores amarillas"
                >

            </div>


            <!-- MARIPOSAS -->

            <span class="mariposa m1">
                🦋
            </span>

            <span class="mariposa m2">
                🦋
            </span>

            <span class="mariposa m3">
                🦋
            </span>

            <span class="mariposa m4">
                🦋
            </span>


            <!-- CORAZONES -->

            <span class="corazon c1">
                💛
            </span>

            <span class="corazon c2">
                💛
            </span>

            <span class="corazon c3">
                💛
            </span>

            <span class="corazon c4">
                💛
            </span>


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
                    alt="Foto"
                >


                <p class="texto-final">

                    Un pequeño detalle hecho especialmente
                    para ti.

                    Espero que estas flores amarillas
                    puedan sacarte una bonita sonrisa.

                    🌻✨

                </p>


                <div class="separador">

                    ─── 💛 ───

                </div>


                <button id="btnVolver">

                    Volver 🌻

                </button>


            </div>


            <!-- GIRASOLES INFERIORES -->

            <div
                class="jardin jardin-izquierdo">

                🌻 🌻 🌻

            </div>


            <div
                class="jardin jardin-derecho">

                🌻 🌻 🌻

            </div>


            <!-- EFECTOS -->

            <div id="efectosFinales"></div>


        </section>
    `;


    /* =================================================
       BOTÓN VOLVER
    ================================================= */

    const btnVolver =
        document.getElementById("btnVolver");


    btnVolver.addEventListener(
        "click",
        volverInicio
    );


    /*
       IMPORTANTE:

       Primero dejamos que el navegador dibuje
       la tercera pantalla.

       Los efectos aparecen después.
    */

    requestAnimationFrame(function () {

        requestAnimationFrame(function () {

            setTimeout(function () {

                crearEfectosFinales();

            }, 350);

        });

    });
}


/* =====================================================
   EFECTOS DE LA TERCERA PANTALLA
===================================================== */

function crearEfectosFinales() {

    const contenedor =
        document.getElementById(
            "efectosFinales"
        );


    if (!contenedor) {

        return;

    }


    /* =================================================
       DESTELLOS
       Solo 25 para que cargue rápido.
    ================================================= */

    for (let i = 0; i < 25; i++) {

        const brillo =
            document.createElement("span");


        brillo.className =
            "brillo-final";


        brillo.style.left =
            Math.random() * 100 + "%";


        brillo.style.top =
            Math.random() * 100 + "%";


        const tamano =
            2 + Math.random() * 3;


        brillo.style.width =
            tamano + "px";


        brillo.style.height =
            tamano + "px";


        brillo.style.animationDelay =
            Math.random() * 3 + "s";


        contenedor.appendChild(brillo);
    }


    /* =================================================
       PÉTALOS
       Solo 5 para celular.
    ================================================= */

    for (let i = 0; i < 5; i++) {

        const petalo =
            document.createElement("span");


        petalo.className =
            "petalo";


        petalo.textContent =
            "🍂";


        petalo.style.left =
            Math.random() * 100 + "%";


        petalo.style.animationDelay =
            Math.random() * 5 + "s";


        petalo.style.animationDuration =
            (7 + Math.random() * 4) + "s";


        contenedor.appendChild(petalo);
    }
}


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function volverInicio() {

    location.reload();

}
