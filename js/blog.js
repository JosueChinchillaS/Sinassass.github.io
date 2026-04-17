function formatearResumen(texto = "") {
  return texto.replace(/\n/g, "<br>");
}

function renderNoticias(contenedorId, items = []) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = items
    .map(
      (noticia) => `
        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              <img
                class="img-fluid"
                src="${noticia.imagen}"
                alt="${noticia.titulo}"
                loading="lazy"
              />
              <a
                class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="#"
              >
                Noticias
              </a>
            </div>
            <div class="p-4">
              <div class="d-flex mb-3">
                <small>
                  <i class="far fa-calendar-alt text-primary me-2"></i>${noticia.fecha}
                </small>
              </div>
              <h4 class="mb-3">${noticia.titulo}</h4>
              <p>${formatearResumen(noticia.resumen || "")}</p>
              <a class="text-uppercase" href="${noticia.enlace}">
                Leer más <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderPublicacionesRecientes(contenedorId, items = [], limite = 3) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = items
    .slice(0, limite)
    .map(
      (noticia) => `
        <div class="d-flex rounded overflow-hidden mb-3">
          <img
            class="img-fluid"
            src="${noticia.imagen}"
            style="width: 100px; height: 100px; object-fit: cover"
            alt="${noticia.titulo}"
            loading="lazy"
          />
          <a
            href="${noticia.enlace}"
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
  renderNoticias("contenedor-noticias", noticias);
  renderPublicacionesRecientes(
    "contenedor-publicaciones-recientes",
    noticias,
    3,
  );
});
