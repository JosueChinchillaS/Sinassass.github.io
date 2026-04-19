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

function obtenerMediaNoticia(noticia = {}) {
  const url = noticia.imagen || "";
  const esPdf = /\.pdf(?:[?#].*)?$/i.test(url);

  return { url, esPdf };
}

function obtenerDocumentosNoticia(noticia = {}) {
  const documentos = Array.isArray(noticia.documentos)
    ? noticia.documentos
    : [noticia.pdf, noticia.archivoPdf, noticia.documento];

  return [...new Set(documentos.filter(Boolean))].map((url) => ({
    url,
    esPdf: /\.pdf(?:[?#].*)?$/i.test(url),
    esWord: /\.docx?(?:[?#].*)?$/i.test(url),
  }));
}

function resolverRutaMedia(url = "", prefijo = "") {
  if (/^(?:https?:)?\/\//i.test(url) || url.startsWith("/")) return url;

  return `${prefijo}${url}`;
}

function renderMediaDetalle(noticia = {}) {
  const media = obtenerMediaNoticia(noticia);
  const url = resolverRutaMedia(media.url, "../");

  if (!media.url) return "";

  if (media.esPdf) {
    return `
      <div class="rounded mb-5 overflow-hidden border">
        <object
          data="${url}"
          type="application/pdf"
          class="w-100"
          style="height: 760px"
          aria-label="${noticia.titulo}"
        >
          <div class="bg-light text-center p-5">
            <p>Tu navegador no puede mostrar este PDF aquí.</p>
            <a class="btn btn-primary" href="${url}" target="_blank" rel="noopener">
              Abrir PDF
            </a>
          </div>
        </object>
      </div>
    `;
  }

  return `
    <img
      class="img-fluid w-100 rounded mb-5"
      src="${url}"
      alt="${noticia.titulo}"
      loading="lazy"
    />
  `;
}

function renderDocumentosAdjuntos(noticia = {}) {
  const documentos = obtenerDocumentosNoticia(noticia);

  if (!documentos.length) return "";

  return documentos
    .map((documento, index) => {
      const url = resolverRutaMedia(documento.url, "../");
      const titulo =
        documentos.length > 1
          ? `Documento adjunto ${index + 1}`
          : "Documento adjunto";

      if (documento.esPdf) {
        return `
          <div class="mb-5">
            <h4 class="mb-3">${titulo}</h4>
            <div class="rounded overflow-hidden border">
              <object
                data="${url}"
                type="application/pdf"
                class="w-100"
                style="height: 760px"
                aria-label="${titulo}: ${noticia.titulo}"
              >
                <div class="bg-light text-center p-5">
                  <p>Tu navegador no puede mostrar este PDF aquí.</p>
                  <a class="btn btn-primary" href="${url}" target="_blank" rel="noopener">
                    Abrir PDF
                  </a>
                </div>
              </object>
            </div>
          </div>
        `;
      }

      const icono = documento.esWord ? "far fa-file-word" : "far fa-file";
      const texto = documento.esWord
        ? "Abrir documento Word"
        : "Abrir documento";

      return `
        <div class="bg-light rounded p-4 mb-5">
          <h4 class="mb-3">${titulo}</h4>
          <a class="btn btn-primary" href="${url}" target="_blank" rel="noopener">
            <i class="${icono} me-2"></i>${texto}
          </a>
        </div>
      `;
    })
    .join("");
}

function renderMiniaturaNoticia(noticia = {}) {
  const media = obtenerMediaNoticia(noticia);
  const url = resolverRutaMedia(media.url, "../");

  if (!media.url) return "";

  if (media.esPdf) {
    return `
      <a
        href="../${noticia.enlace}"
        class="d-flex align-items-center justify-content-center bg-primary text-white"
        style="width: 100px; height: 100px; flex: 0 0 100px"
        aria-label="Abrir PDF: ${noticia.titulo}"
      >
        <i class="far fa-file-pdf" style="font-size: 2rem"></i>
      </a>
    `;
  }

  return `
    <img
      class="img-fluid"
      src="${url}"
      style="width: 100px; height: 100px; object-fit: cover"
      alt="${noticia.titulo}"
      loading="lazy"
    />
  `;
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

      ${renderMediaDetalle(noticia)}
      ${renderDocumentosAdjuntos(noticia)}
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
          ${renderMiniaturaNoticia(noticia)}
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
