function moviesTotal(movieData) {
    const descriptionElement = document.createElement('div');
    descriptionElement.classList = "descripcion";
    descriptionElement.textContent = movieData.description;

    const titleElement = document.createElement('div');
    titleElement.classList = "titulo";
    titleElement.textContent = movieData.title;

    const imagenElement = document.createElement('div');
    imagenElement.classList = "imagen";
    imagenElement.textContent = movieData.imagen;

    const contenedorElement = document.createElement('div');
    contenedorElement.classList = "contenedor-movie";

    const gridElement = document.createElement('div');
    gridElement.classList = "grid-movie";
    
    contenedorElement.appendChild(imagenElement);
    contenedorElement.appendChild(titleElement);
    contenedorElement.appendChild(descriptionElement);
    gridElement.appendChild(contenedorElement);

    return gridElement
}

const movie = {
    title: "Oso",
    description: "jlkdsjfladjflakjdflkajdflkafdklja",
    imagen: "",
}

const app = document.getElementById("app");

const newElement = moviesTotal(movie);
app.appendChild(newElement)