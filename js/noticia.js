function formatearTextoNoticia(texto = "") {
  return texto.trim().replace(/\n/g, "<br>");
}

function obtenerParametroUrl(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

function buscarNoticiaPorId(id) {
  return noticias.find((noticia) => noticia.id === id);
}

function renderNoticiaActual(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const id = obtenerParametroUrl("id");
  const noticia = buscarNoticiaPorId(id);

  if (!noticia) {
    contenedor.innerHTML = `
      <div class="mb-5">
        <h1 class="mb-4">Noticia no encontrada</h1>
        <p>La noticia que buscas no existe o fue movida.</p>
        <a href="../blog.html" class="btn btn-primary">Volver a noticias</a>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = `
    <div class="mb-5">
      <h1 class="mb-4">${noticia.titulo}</h1>

      <div class="d-flex mb-3">
        <small>
          <i class="far fa-calendar-alt text-primary me-2"></i>${noticia.fecha}
        </small>
      </div>

      <div style="text-align: justify">
        <p>${formatearTextoNoticia(noticia.contenido || noticia.resumen || "")}</p>
      </div>

      <img
        class="img-fluid w-100 rounded mb-5"
        src="../${noticia.imagen}"
        alt="${noticia.titulo}"
        loading="lazy"
      />
    </div>
  `;

  document.title = `${noticia.titulo} | SINASSASS`;
}

function renderPublicacionesRecientesDetalle(
  contenedorId,
  items = [],
  limite = 3,
) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const idActual = obtenerParametroUrl("id");

  contenedor.innerHTML = items
    .filter((noticia) => noticia.id !== idActual)
    .slice(0, limite)
    .map(
      (noticia) => `
        <div class="d-flex rounded overflow-hidden mb-3">
          <img
            class="img-fluid"
            src="../${noticia.imagen}"
            style="width: 100px; height: 100px; object-fit: cover"
            alt="${noticia.titulo}"
            loading="lazy"
          />
          <a
            href="../${noticia.enlace}"
            class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
          >
            ${noticia.tituloSidebar || noticia.titulo}
          </a>
        </div>
      `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderNoticiaActual("detalle-noticia");
  renderPublicacionesRecientesDetalle(
    "contenedor-publicaciones-recientes",
    noticias,
    3,
  );
});
