function addItem() {
    // Obtenemos los valores de los campos de entrada
    var url = document.getElementById('image_URL').value;
    var description = document.getElementById('description').value;
    
    // Identificamos el div general de la galería
    var gallery = document.getElementById('image_gallery');
    
    // Creamos el div que contendrá la nueva imagen y la descripción
    var new_div = document.createElement('div');
    
    // Creamos el elemento de imagen
    var new_img = document.createElement('img');

    // Seteamos todo a la altura de el tamaño de las imagenes
    new_img.width=300;
    new_img.height=250;


    // Asignamos la URL de la imagen al elemento de imagen creado
    new_img.src = url;
    new_img.alt = description; // Siempre es bueno agregar una descripción alternativa
    
    // Creamos el elemento de párrafo
    var new_p = document.createElement('p');
    // Asignamos el valor de la descripción al nuevo párrafo creado
    new_p.textContent = description;

    // Añadimos la nueva imagen y la nueva descripción al nuevo div
    new_div.appendChild(new_img);
    new_div.appendChild(new_p);

    // Añadimos el nuevo div a la galería
    gallery.appendChild(new_div);

    // Limpiamos los campos de entrada después de agregar el nuevo ítem
    document.getElementById('image_URL').value = '';
    document.getElementById('description').value = '';
}
