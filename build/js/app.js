//Datos modales
const services = [

    {
        id: 'vinculacion',
        titulo: 'Vinculación Nicolaita',
        texto: 'Enlace estratégico que intermediará entre nicolaita.com y las alianzas, actores, sinergias y tendencias externas de orden global y local.',
        imagen: 'build/img/logoVinculacion.png'
    },

    {
        id: 'startup',
        titulo: 'Startup Nicolaita',
        texto: 'Emprendimiento social y tecnológico, respaldado por organizaciones como el Laboratorio de Emprendimiento iLab al ser Challengers y embajadores, Ashoka internacional al ser embajadores y enlaces oficiales, beekab copn alianza estratégica, Haz Tu Lucha con sinergias comunes, YLAI de la embajada de Estados Unidos en México coparticipando con visión unificada, entre otras.',
        imagen: 'build/img/logoStartupNicolaita.png'
    },

    {
        id: 'oan',
        titulo: 'Oferta Académica Nicolaita',
        texto: 'Plataforma de exhibición virtual de las diversas carreras que en la universidad se ofertan, en un entorno de amigabilidad, usabilidad y con todas las técnicas de Experiencia de Usuario que mitiguen la fricción con las plataformas digitales y permitan embudar a futuros estudiantes de la universidad.',
        imagen: 'build/img/logoOAN.png'
    },

    {
        id: 'endd',
        titulo: 'Escuela Nicolaita de Docencia y Cultura Digital',
        texto: 'Plataforma de educación digital, para el aprovechamiento de las últimas tecnologías con el propósito de mejorar la inteacción en las aulas y en los procesos administrativos de personal al servicio de la universidad, generación de competencias digitales, certificaciones y cursos en línea.',
        imagen: 'build/img/logoENDD.png'
    },

    {
        id: 'a1-block',
        titulo: 'A1 Blockchain',
        texto: 'Abordaje del paradigma tecnológico detrás de la automatización a gran escala en base al Protocolo de Confianza intrínseco a Blockchain, desde el aspecto económico, la Criptoeconomía, enseñanza de la tecnología, desarrollo de proyuectos, aplicaciones Descentralizadas (dApps) y plataformas ecosistémicas, contratos inteligentes y la acuñación de nuestra propia Crypto: CRISOL, a través de una ICO de próximo lanzamiento.',
        imagen: 'build/img/logoa1BlockChain.jpg'
    },

    {
        id: 'distrito',
        titulo: 'Distrito Nicolaita',
        texto: 'Plataforma unificada de eventos nicolaitas, con una visión integral y de seguimiento digital con alta interacción para generar nuevas sinergias entre los participantes y los eventos mismos.',
        imagen: 'build/img/logoDistritoUMICH.png'
    },

    {
        id: 'fondeo',
        titulo: 'Crowdfunding Nicolaita',
        texto: 'Desarrollo de una plataforma reconocida por la Comisión Nacional Bancaria y de Valores, SHCP y el comité consultivo del Gobierno Federal para la industria Fintech, con apoto de la asociación de Plataformas de Fondeo Colectivo (AFICO) que nos permita apoyar las iniciativas de jóvenes y docentes nicolaitas para lograr un modelo económico, sinérgico, sistémico y sustentable que permita generar prosperidad.',
        imagen: 'build/img/logoFondeo.png'
    },

    {
        id: 'innova',
        titulo: 'Innovatech Nicolaita',
        texto: 'Desarrollo, administración y gestión de un magno evento de colaboración, emprendimiento y exposición, conferencias, mesas de debate, café técnico, zonas de gaming y e-sports, cons esquemas de Hackatón y Cienciatón, con participación de jóvenes y docentes nicolaitas, con premios en bolsas aseguradas gracias al planeamiento de un modelo económico sustentable, cuyos ganadores se verán impulsados y respaldados por el ecosistema nicolaita.com.',
        imagen: 'build/img/logoInnovaTech.png'
    },

    {
        id: 'a1-beca',
        titulo: 'A1beca Nicolaita',
        texto: 'Proyecto de Beca y préstamo a futuro para desarrollo de carreras profesionales.',
        imagen: 'build/img/logoA1beca.png'
    },

    {
        id: 'csoftn',
        titulo: 'Consejo de Software Nicolaita',
        texto: 'El Consejo de Software Nicoliata, desarrolla aplicaciones, plataformas digitales, portales web, aplicaciones descentralizadas y embudos digitales que permitan agilizar las tareas que clásicamente se abordan por paradigmas análogos o con visión de infraestructura local obsoleta. Se convierte así en un consejo consultivo a la orden de las instancias y las distintas unidades responsables que requieran una vision innovadora para solucionar, con una perspectiva abierta, trazable y virtual. Además, el consejo funciona como una agencia de marketing digital para el desarrollo de todo tipo de sinergias mercadológicas que permitan potenciar a aquellas organizaciones que soliciten el servicio y acceso a los nuevos paradigmas que las plataformas digitales, la venta online, los servicios en la nube y las redes sociales implican.',
        imagen: 'build/img/logoCsoftN.png'
    },

    {
        id: 'mentoria',
        titulo: 'Mentoría y Desarrollo de Talento Nicolaita',
        texto: 'Gestión de la carrera de Mentor para los docentes interesados en esta actividad mainstream anible global, para apoyar a los jóvenes que necesiten entrar en sinergias de apoyo mentoral profesional, a través de sesiones presenciales, experimentales, virtuales y a través de nuestro esquema de MASTERCLASS NICOLAITA.',
        imagen: 'build/img/logoMentoria.png'
    }


];

//Selecciones
const nav = document.querySelector('.navegacion');
const hero = document.querySelector('.hero');
const btnUp = document.querySelector('.up-button');

//Enlaces de menu principal
const links = document.querySelectorAll('#unum .nav-link');

//Enlaces disparadores modales
const linksModales = document.querySelectorAll('.modal-link');

//Modal
const modal = document.querySelector('#modal-servicios');


//Evento en scroll para nav (No necesario, se puede modificar con un nav con position fixed desde el principio y sólo modificarle el color de fondo en scroll)
window.addEventListener( 'scroll', blockedNav );


//Evento Scroll modificación de color de links cuando respectiva sección está visible
window.addEventListener('scroll', e => {

    highlightedLink();

});


//Iniciar en 0,0
window.addEventListener('DOMContentLoaded', () => {

    window.scroll( 0,0 );

} );

//Evento show up button
window.addEventListener( 'scroll', showButton );



//Evento Scroll up boton
btnUp.addEventListener( 'click', moveUp );


//Adding Smooth Scroll to all nav links
const scroll = new SmoothScroll('.navbar-nav a[href*="#"]', {
    easing: 'linear',
    speed: 125
});

//Eventos smooth scroll menu principal, NO SIRVE PARA SAFARI
// links.forEach( link => {

//     link.addEventListener( 'click', e => {
//         e.preventDefault(); //para que el link no mueva directamente al elemento al cual está anclado, quitando el comportamiento default
        
//         const enlazado = document.querySelector( `${link.getAttribute('href')}` ); //seleccionando elemento al que se moverá la pantalla a partir del href del link        

//         goToPosition(enlazado);

//     } );

// });

//Eventos Modal
// linksModales.forEach( linkModal => { //NO NECESARIO
    
//     linkModal.addEventListener( 'click' , (e) => {

//         e.preventDefault();

//         console.log('impresión modal');

//     } );

// } );

modal.addEventListener('show.bs.modal', (e) => {

    const vinculo = e.relatedTarget;

    // linksModales.forEach( (link) => {

    //     console.log('unum');

    //     if( vinculo.getAttribute('id') == link.id ){
    //         console.log( link );
    //         return;

    //     }

    // } );


    for(let i= 0; i < services.length; i++ ){ //we use this version to iterate through the array and be able to stop its execution once we find the concurrence since the execution cannot be stopped in the forEach iterator

        if( vinculo.getAttribute('id') === services[i].id ){
            
            let cuerpo = modal.querySelector( '.modal-body' );
            let row = document.createElement( 'DIV' );
            let col = document.createElement( 'DIV' );
            let titulo = document.createElement( 'H4' );
            let parrafo = document.createElement( 'P' );
            let imagen = document.createElement( 'IMG' );
            let separador = document.createElement( 'DIV' );
            let separadorLinea1 = document.createElement( 'DIV' );
            let separadorLinea2 = document.createElement( 'DIV' );
            let separadorIcono = document.createElement( 'DIV' );
            let icono = document.createElement( 'I' );

            row.classList.add( 'row' );
            row.classList.add( 'justify-content-center' );
            col.classList.add( 'col-10' );

            titulo.textContent = services[i].titulo;
            titulo.classList.add('titulo');
            separador.classList.add( 'separador' );
            separador.classList.add( 'mb-3' );
            separadorLinea1.classList.add( 'separador-linea' );
            separadorLinea2.classList.add( 'separador-linea' );
            separadorIcono.classList.add( 'separador-icono' );
            icono.classList.add( 'bi' );
            icono.classList.add( 'bi-star-fill' );
            icono.classList.add( 'fs-5' );
            icono.classList.add( 'px-3' );
            separador.appendChild(separadorLinea1);
            separadorIcono.appendChild(icono);
            separador.appendChild(separadorIcono);
            separador.appendChild(separadorLinea2);
    

            parrafo.textContent = services[i].texto;
            parrafo.classList.add( 'text-justify' );
            imagen.classList.add( 'imagen-modal' );
            imagen.classList.add( 'mb-3' );
            imagen.setAttribute( 'src', `${services[i].imagen}` );

            col.appendChild( titulo );
            col.appendChild( separador );
            col.appendChild( imagen );
            col.appendChild( parrafo );
            row.appendChild( col );
            cuerpo.appendChild( row );



            return;

        }

    }


});


//Limpiando el contenido del modal una vez que está cerrado
modal.addEventListener('hidden.bs.modal', () => {

    // let titulo = modal.querySelector('.modal-tittle'); //en caso de que hubiera un titulo
    let cuerpo = modal.querySelector('.modal-body');

    // titulo.innerHTML = '';
    cuerpo.innerHTML = '';

} );





//Funciones
function blockedNav() {
    
    // if( window.innerWidth < 768  ) { //&& nav.classList.contains('bloque') no se agrega porque significaría la continua ejecución de la función ya que el scroll se hace por múltiples saltos a la vez, lo que indicaría que sólo en el movimiento del primer pixel se ejecutaría la función de forma esperada y en las demás ejecuciones no se detendría la misma porque no se cumpliría con la condición
    //     nav.classList.remove('bloque');

    //     return;
    
    // }   //SENTENCIA SÓLO NECESARIA PARA EL CASO EN QUE NO SE QUISIERAN AGREGAR LOS ESTILOS EN PANTALLAS PEQUEÑAS

    // console.log('no impresión en pantallas pequeñas');

    if( window.scrollY >= 30 ) { //No necesario establecer el tamaño esperado de pantalla (>= 768) ya que la sentencia anterior detentrá la ejecución de esta en pantallas pequeñas
        nav.classList.add('bloque');
        // hero.classList.add('distSuperior'); //No necesario para menu flotante
    } else if( window.scrollY < 50 ) {
        nav.classList.remove('bloque');
        // hero.classList.remove('distSuperior'); //No necesario para menu flotante
    }

}

//Funciones de Smooth Scroll propias, no sirven para safari
// function getDistance(element) {
//     const logoD = window.scrollY + element.getBoundingClientRect().top; //Obtener a qué distancia está un elemento de la parte superior, tomando el valor de cuántos pixeles se ha hecho scroll y a qué distancia de la posicion original top (de la parte superior de la ventana) se encuentra el elemento, |||| se suman porque cuando se hace scroll la distancia del top disminuye, y se vulve negativa una vez que el scroll hace que empiece a no ser visible, por lo tanto al hacerse la suma se asegura que el valor siempre será positivo, y será la distancia real del elemento en relación al límite superior del sitio

//     //console.log(logoD); //USAR distancia original y scrollY |||| si la cantidad de scroll es igual a la distancia del elemento con la parte superior + 20 pixeles, cambiar el color de fondo del elemento

//     return logoD;

// }


//Funciones de Smooth Scroll propias, no sirven para safari
// function goToPosition(element) {

//     const distance = getDistance(element) - 50 ; //getDistance nos da la distancia del elemento en relación con la parte superior del documento, por lo tanto, se le restan 50 pixeles para que en el movimiento sea fácilmente visible el título de la sección a la que se está haciendo el movimiento. Esto se hace así para que en la esquina superior izquierda se sitúe el elemento que se encuentra a 907 pixeles de la parte superior, porque si se hiciera sin la resta de 50px se pondría en la parte superior izquierda el elemento que se encuentra a 957px de la parte superior del documento, lo que haría que el título de la sección se viera a medias (Tomando en cuenta que 0 o el origen es en la parte superior izquierda de la ventana). Se consideran los 50px por el alto de la barra de navegación que se encuentra fija

//     window.scroll({
//         top: distance,
//         left: 0,
//         behavior: 'smooth'
//     });

// }

function highlightedLink() {

    links.forEach( link => {

        const enlazado = document.querySelector(`${ link.getAttribute('href')}`);

        const posicionEnlazado = enlazado.getBoundingClientRect();
        if( posicionEnlazado.top - 55 <= 0 && posicionEnlazado.bottom >= 55 ) { //bottom debe ser mayor a 50 para aquellos casos en los que la sección siga visible pero se encuentre su parte final cubierta por la barra de navegación
            link.classList.add('bg-change');
        } else {
            link.classList.remove('bg-change');
        }

    } );


}



// top >= 0
//bottom >= ventana
//top < ventana
//bottom >= 0


//Revisar que elemento está completamente en la pantalla
// top >= 0
// bottom <= window.innerHeight

//Siendo el origen la esquina superior izquierda de la pantalla siempre. Los valores hacia abajo del origen son positivos y los que van por encima del origen (que ya salieron de la vista actual en scroll hacia abajo) son negativos

//Para links son necesarios los
// Distancia de top >= 0, top< 0 y bottom sea mayor o igual que 0

// top < window.innerHeight y bottom >=0 para los casos en los que se quiere notificar cuando el elemento empieza a ser visible desde la parte inferior de la pantalla, no útil en este caso porque esto haría que el elemento se marcara como visible en el momento en que entre a la pantalla desde la parte inferior y se lo que se busca para este script es que el elemento se considere que está visible desde que su top es positivo, cuando se vuelve negativo y siempre que su bottom sea mayor o igual que 0; si se usara el otro comportamiento cada que un elemento entrara en pantalla se marcaría como visible y haría que el elemento superior del cual todavía se tiene secciones visibles


function moveUp() {

    window.scroll({

        top: 0,
        left: 0,
        behavior: 'smooth'

    });

}

function showButton()  {

    const main = document.querySelector('main');
    const topMain = main.getBoundingClientRect().top; //Si la distancia del elemento main con la parte superior del viewport actual es 50px o menos

    if( topMain <= 50 ) {
        btnUp.classList.add('up-btnToggle');
    } else {
        btnUp.classList.remove('up-btnToggle');
    }

}
