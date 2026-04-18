function formatearResumen(texto = "") {
  return texto.replace(/\n/g, "<br>");
}

function obtenerMediaNoticia(noticia = {}) {
  const url = noticia.imagen || noticia.pdf || noticia.archivoPdf || noticia.documento || "";
  const esPdf = /\.pdf(?:[?#].*)?$/i.test(url);
  const esWord = /\.docx?(?:[?#].*)?$/i.test(url);

  return { url, esPdf, esWord };
}

function renderMediaNoticia(noticia = {}) {
  const media = obtenerMediaNoticia(noticia);

  if (!media.url) return "";

  if (media.esPdf) {
    return `
      <object
        data="${media.url}#toolbar=0&navpanes=0&scrollbar=0"
        type="application/pdf"
        class="w-100"
        style="height: 260px"
        aria-label="${noticia.titulo}"
      >
        <div class="d-flex align-items-center justify-content-center bg-white text-center p-4" style="height: 260px">
          <a class="btn btn-primary" href="${media.url}" target="_blank" rel="noopener">
            Ver PDF
          </a>
        </div>
      </object>
    `;
  }

  if (media.esWord) {
    return `
      <a
        href="${media.url}"
        target="_blank"
        rel="noopener"
        class="d-flex flex-column align-items-center justify-content-center bg-white text-primary text-center p-4"
        style="height: 260px"
        aria-label="Abrir documento: ${noticia.titulo}"
      >
        <i class="far fa-file-word mb-3" style="font-size: 3rem"></i>
        <span class="fw-bold">Abrir documento</span>
      </a>
    `;
  }

  return `
    <img
      class="img-fluid"
      src="${media.url}"
      alt="${noticia.titulo}"
      loading="lazy"
    />
  `;
}

function renderMiniaturaNoticia(noticia = {}) {
  const media = obtenerMediaNoticia(noticia);

  if (!media.url) return "";

  if (media.esPdf) {
    return `
      <a
        href="${noticia.enlace}"
        class="d-flex align-items-center justify-content-center bg-primary text-white"
        style="width: 100px; height: 100px; flex: 0 0 100px"
        aria-label="Abrir PDF: ${noticia.titulo}"
      >
        <i class="far fa-file-pdf" style="font-size: 2rem"></i>
      </a>
    `;
  }

  if (media.esWord) {
    return `
      <a
        href="${noticia.enlace}"
        class="d-flex align-items-center justify-content-center bg-primary text-white"
        style="width: 100px; height: 100px; flex: 0 0 100px"
        aria-label="Abrir documento: ${noticia.titulo}"
      >
        <i class="far fa-file-word" style="font-size: 2rem"></i>
      </a>
    `;
  }

  return `
    <img
      class="img-fluid"
      src="${media.url}"
      style="width: 100px; height: 100px; object-fit: cover"
      alt="${noticia.titulo}"
      loading="lazy"
    />
  `;
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
              ${renderMediaNoticia(noticia)}
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
          ${renderMiniaturaNoticia(noticia)}
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
