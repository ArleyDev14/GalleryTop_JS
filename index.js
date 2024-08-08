function añadir_img() {
    const contenedordiv = document.getElementById("container_img")
    const titulos = document.getElementById("entrada_titulo")
    const enlaces = document.getElementById("entrada_enlace")

    const titulo = titulos.value.trim();
    const enlace = enlaces.value.trim();

    if (titulo === '' || enlaces === '') {
        alert('Por favor, ingresa un título y un enlace de la imagen.');
        return;
    }

    //CREA CADA CAJA CON SUS SECCIONES
    const card = document.createElement('div');
    card.className = 'cards';
    const section_img =  document.createElement("section")
    section_img.className = "sectionimg"

    const section_btn =  document.createElement("section")
    section_btn.className = "sectionbtn"

    //CONTIENE CADA CAJA
    const tituloimg = document.createElement('h3');
    tituloimg.className = "titulo_card";
    tituloimg.textContent = titulo;

    const imagenes = document.createElement('img');
    imagenes.className = "img_card";
    imagenes.src = enlace;
    imagenes.alt = titulo;

    //CREA 3 BOTONES --> Eliminar, editar y detalles
    const btneliminar = document.createElement('button');
    btneliminar.className ='btncards btneliminar';
    btneliminar.textContent = "Eliminar";
    btneliminar.onclick = ()=>{
        eliminar_img(card);
    }

    const btndetalles = document.createElement('button');
    btndetalles.className ='btncards btndetalles';
    btndetalles.textContent = "Detalles";
    btndetalles.onclick = ()=>{
        ver_detalles(titulo,enlace)
    }
    
    const btneditar = document.createElement("button")
    btneditar.className = 'btncards btneditar'
    btneditar.textContent = 'Editar'
    btneditar.onclick = ()=>{
        editar_detalles(card)
    }

    section_img.appendChild(imagenes);
    section_btn.appendChild(btndetalles);
    section_btn.appendChild(btneditar)
    section_btn.appendChild(btneliminar);
    card.appendChild(tituloimg);
    card.appendChild(section_img);
    card.appendChild(section_btn);
    contenedordiv.appendChild(card);

    titulo.value = '';
    enlace.value = '';
    titulos.value = '';
    enlaces.value = '';
}

function eliminar_img(card) {
    card.classList.add('salida');
    card.addEventListener('animationend', () => {
        card.remove();
    });
}

function ver_detalles(titulo, enlace) {
    const detalles = document.getElementById('card_detalles');
    const titulo_detalles = document.getElementById('titulo_detalles');
    const img_detalles = document.getElementById('img_detalles');

    titulo_detalles.textContent = titulo;
    img_detalles.src = enlace;
    img_detalles.alt = titulo;
    detalles.classList.add('visible');
}

function cerrar_detalles() {
    const detalles = document.getElementById('card_detalles');
    detalles.classList.remove('visible');
}

function editar_detalles(card) {
    const editar_formulario = document.getElementById('editar_formulario');
    const guardar_datos = document.getElementById('guardar_edicion');
    editar_formulario.classList.add('visible');
    guardar_datos.onclick = () => {
        guardar_ediciones(card);
    }
}

function cerrar_edicion() {
    const editar_formulario = document.getElementById('editar_formulario');
    editar_formulario.classList.remove('visible');
}

function guardar_ediciones(card) {
    const editar_titulo = document.getElementById('editar_titulo').value.trim();
    const editar_enlace = document.getElementById('editar_enlace').value.trim();

    if (editar_titulo === '' || editar_enlace === '') {
        alert('Por favor, ingresa un título y un enlace de la imagen.');
        return;
    }

    const tituloimg = card.querySelector('.titulo_card');
    const imagenes = card.querySelector('.img_card');

    tituloimg.textContent = editar_titulo;
    imagenes.src = editar_enlace;
    imagenes.alt = editar_titulo;
    cerrar_edicion();
}
