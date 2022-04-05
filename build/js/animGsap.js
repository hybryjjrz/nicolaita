//Selección de elementos
//imagen logo
const logo = document.querySelector( '.logo' );
//navegación
const navBar = document.querySelector( '.navegacion' );
//separador
const estrella = document.querySelector( '.hero .separador-icono' );
const lineaL = document.querySelector( '.hero .separador-linea:nth-child(1)' );
const lineaR = document.querySelector( '.hero .separador-linea:nth-child(3)' ); //seleccionando al tercer elemento del grupo de hermanos (que son hijos del mismo padre)
const titulo = document.querySelector( '.hero .texto-hero' );
//servicios
const servicios = document.querySelectorAll( '.contenido-principal .servicio' );
//contenido principal, trigger para servicios
const principal = document.querySelector( '.contenido-principal' );


// gsap.from( navBar, {
//     autoAlpha: 0,
//     y: "-400%",
//     duration: 3,
//     ease: "power4"
// } );

//Animación Hero
const TLHero = gsap.timeline( {

    defaults: {
        duration: 1,
        ease: "circ.out"
    }

} );

TLHero
.from( logo, { autoAlpha: 0, y: 200 } )
.from( estrella, { autoAlpha: 0, y: 100, delay: 0.25 } )
.from( lineaL, { autoAlpha: 0, x: -100, delay: 0.3 } )
.from( lineaR, { autoAlpha: 0, x: 100 }, '-=1' )
.from( titulo, { autoAlpha: 0, y: 50, delay: 0.25 } )
.from( navBar, { autoAlpha: 0, y: "-250%", duration: 1.5, ease: "power4" }, '-=1' );


//Animación sección servicios
gsap.from( servicios, {
    autoAlpha: 0,
    duration: 1,
    x: 50,
    y: 50,
    stagger: 0.25,
    delay: 1.25,
    scrollTrigger: {
        trigger: principal,
        start: "top 70%",
        // toggleActions: "play pause reverse reset"
    }
} );