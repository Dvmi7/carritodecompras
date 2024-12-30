
const productos = [
    {
            nombre:"Pomberito",
            descripcion:"Un jugador | Supervivencia | Puzles | Terror",
            imagen:"/imagenes de productos/pomberito.png",
            Precio: 10000
        },
    
        {
            nombre:"S.T.A.L.K.E.R 2 Heart Of Chornobyl",
            descripcion:"Un Jugador | Mundo Abierto | Postapocalípticos | FPS | Disparos",
            imagen:"/imagenes de productos/stalker2.png",
            Precio: 30000
        },
    
        {
            nombre:"Forza Motorsport",
            descripcion:"Carreras | Multijugador | Simulación | Simulador de carreras",
            imagen:"/imagenes de productos/froza_motorsport.png",
            Precio: 20000
        },

        {
            nombre:"Fifa 2025",
            descripcion:"Deportes | Simulación | Fútbol | Para Mando | JcJ",
            imagen:"/imagenes de productos/fifa25.png",
            Precio: 50000
        },

        {
            nombre:"Mortal Kombat 1",
            descripcion:"Acción | Lucha | Sangriento | Multijugador | PvP",
            imagen:"/imagenes de productos/mortalkombat1.png",
            Precio: 40000
        },

        {
            nombre:"Ableton 11",
            descripcion:"Software de producción musical",
            imagen:"/imagenes de productos/ableton.png",
            Precio: 50000
        },

        {
            nombre:"McAfee LiveSafe 1 Dev Lifetime for Windows/MAC Global Software License",
            descripcion:"Software de protección antivirus",
            imagen:"/imagenes de productos/mcafee.png",
            Precio: 30000
            },

            {
            nombre:"MS SQL Server 2022 Standard - 16 Core Global MS Products",
            descripcion:"Sistemas de gestión de bases de datos",
            imagen:"/imagenes de productos/sqlserver.png",
            Precio: 40000
            }
]


let juegosYsoftwares = `
    <section>
        <div id=juegos>
        <a href="/catalogo de juegos/pomperito.html"> <img src= ${productos[1].imagen} width="290" height="150" alt="Juego Pomberito"></a>
        <h3><a href="/catalogo de juegos/pomperito.html">${productos[1].nombre}</a></h3>
        <p class="generos"> ${productos[1].descripcion}</p>
        <h3>Precio $${productos[1].Precio}</h3>
        <input id="boton-agregar-carrito" type="button" value="Agregar al carrito">
        </div>
    </section>
`; 

console.log(juegosYsoftwares);

const juegos = document.getElementById("juegos");
juegos.innerHTML = juegosYsoftwares;