function formatearResumenInicio(texto = "") {
  return texto.replace(/\n/g, "<br>");
}

function obtenerMediaInicio(noticia = {}) {
  const url = noticia.imagen || noticia.pdf || noticia.archivoPdf || noticia.documento || "";
  const esPdf = /\.pdf(?:[?#].*)?$/i.test(url);
  const esWord = /\.docx?(?:[?#].*)?$/i.test(url);

  return { url, esPdf, esWord };
}

function renderMediaInicio(noticia = {}) {
  const media = obtenerMediaInicio(noticia);

  if (!media.url) return "";

  if (media.esPdf || media.esWord) {
    const icono = media.esPdf ? "far fa-file-pdf" : "far fa-file-word";
    const texto = media.esPdf ? "Ver PDF" : "Abrir documento";

    return `
      <a
        href="${noticia.enlace}"
        class="d-flex flex-column align-items-center justify-content-center bg-white text-primary text-center p-4"
        style="height: 260px"
        aria-label="${texto}: ${noticia.titulo}"
      >
        <i class="${icono} mb-3" style="font-size: 3rem"></i>
        <span class="fw-bold">${texto}</span>
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

function renderUltimasNoticiasInicio(contenedorId, items = [], limite = 3) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.innerHTML = items
    .slice(0, limite)
    .map(
      (noticia) => `
        <div class="col-lg-4">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              ${renderMediaInicio(noticia)}
              <a
                class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="${noticia.enlace}"
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
              <p>${formatearResumenInicio(noticia.resumen || "")}</p>
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

document.addEventListener("DOMContentLoaded", () => {
  renderUltimasNoticiasInicio("contenedor-ultimas-noticias", noticias, 3);
});
