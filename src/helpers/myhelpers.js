// Función para truncar un texto
const truncateString = (string, number) => {
  if (string?.length > number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
};
// Formula para coger 1 pelicula cada vez que hacemos la llamada
const movie = movies[Math.floor(Math.random() * movies.length)];
