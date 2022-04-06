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
//formulario
const form = document.querySelector( '.form-info' );
//boton enviar
const enviar = document.querySelector( '.boton-enviar' );
//input
const entrada = document.querySelector( '.input-correo' );




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

//efecto boton enviar
enviar.addEventListener( 'click', () => {
    
    setTimeout( () => { //to make the verification 1 millisecond after we clicked, so the bootstrap validation classes have been added to the form when we verify wether or not to move the form in a negative manner


        let validated = form.classList.contains( 'was-validated' ) ;
        let backgroundNot = window.getComputedStyle( entrada ).background;
        let background = backgroundNot.slice( 0, 104 ); //getting the first 103 characters of the element to match

        let warningSVG = `rgb(255, 255, 255) url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'`;

        // // debugger;

        if( validated && background === warningSVG ) {

            animationVibrate();

        }

    } , 1);
   
    
} );


function animationVibrate(){ //animación, hacer que elemento se mueve de izquierda a derecha en una sucesión (una animación tras otra) cuando el campo no se llene correctamente

    gsap.to( form, {

        keyframes: [

            { x: -7, duration: 0.2 },
            { x: 7, duration: 0.2 },
            { x: -7, duration: 0.2 },
            { x: 7, duration: 0.2 },
            { x: 0, duration: 0.2 }


        ]

    } );

}