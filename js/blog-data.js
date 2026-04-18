// Para publicar una noticia con documento adjunto:
// imagen: "ruta/imagen.jpg", documento: "ruta/archivo.pdf" o "ruta/archivo.docx".
// Si no hay imagen, tambien puede usarse imagen: "ruta/documento.pdf".
const noticias = [
  {
    id: "news-68",
    imagen: "img/news/WhatsApp Image 2026-04-17 at 14.41.26.jpeg",
    documento: "img/news/CR 0222026 Agencia de Viajes Anticipate Abr 2026.docx",
    titulo: "OFERTAS hoteles DECAMERON",
    tituloSidebar: "OFERTAS hoteles DECAMERON",
    fecha: "17 Abril, 2026",
    resumen:
      "¡Abril se vive mejor con Decameron Days y beneficios exclusivos para afiliados SINASSASS!",
    contenido: `
OFERTAS hoteles DECAMERON 🏖️ ☀️
¡Abril se vive mejor con Decameron Days y beneficios exclusivos para afiliados SINASSASS!

Llama ya: Raquel Chacón Conejo
Gerente de Ventas
Correo: raquel.chacon@decameron.com
Celular: 8432 5178
Línea Gratuita – Call Center Costa Rica : 0800- 5030012
WhatSapp – Clientes directos: 6490 0013
WhatSapp - Agencias de viajes: 6472 3677
    `,
    enlace: "news/noticia.html?id=news-68",
  },

  {
    id: "news-65",
    imagen: "img/news/news-65.jpeg",
    titulo: "📌¡Inscripción abierta!",
    tituloSidebar: "📌¡Inscripción abierta!",
    fecha: "08 Abril, 2026",
    resumen: "",
    contenido: `
La Junta Directiva de SINASSASS te invita a nuestra Asamblea General:
📅 Viernes 30 de octubre 2026 📍 Fiesta Resort, Puntarenas 🏨 Hospedaje: jueves 29 a sábado 31 de octubre 💰 Cuota afiliado: ₡70.000 (pago máximo 31 de agosto) 📝 Inscripción disponible hasta: 31 de mayo ✅ Completá el formulario y reservá tu espacio.
¡Será un gusto contar con tu presencia!
Opcional: 1 acompañante por afiliado (según disponibilidad). Costo: $240.

🔴 Enlace inscripción 👉🏻 Formulario de inscripción
    `,
    enlace: "news/noticia.html?id=news-65",
  },

  {
    id: "news-67",
    imagen: "img/news/news-67.jpeg",
    titulo: "SINASSASS CONVOCA",
    tituloSidebar: "SINASSASS CONVOCA",
    fecha: "25 Marzo, 2026",
    resumen: "",
    contenido: `
🚨🚨Este 25 de marzo vamos a huelga

🔴👉🏻GRAN CONCENTRACIÓN FRENTE A OFICINAS CENTRALES CCSS EN AVENIDA SEGUNDA
🗓️ Mañana miércoles 25 de marzo de 2026
⏰ 9:00 a. m.
No aceptamos migajas.
No aceptamos retrocesos.
La dignidad se defiende en unidad. 💪🏼
    `,
    enlace: "news/noticia.html?id=news-67",
  },

  {
    id: "news-66",
    imagen: "img/news/news-66.jpeg",
    titulo: "8 de marzo – Día Internacional de la Mujer",
    tituloSidebar: "8 de marzo – Día Internacional de la Mujer",
    fecha: "08 Marzo, 2026",
    resumen: "",
    contenido: `
“Respeto, dignidad y oportunidades para todas.”
Es este importante día, desde SINASSASS reafirmamos nuestro compromiso con la lucha por la dignidad, el respeto y la justicia para todas las mujeres trabajadoras de la CCSS.
    `,
    enlace: "news/noticia.html?id=news-66",
  },

  {
    id: "news-64",
    imagen: "img/news/news-64.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "30 Julio, 2025",
    resumen: "",
    contenido: `
SINASSASS expresa su más profunda solidaridad y respaldo absoluto a la labor de la señora Martha Elena Rodríguez González, representante de los trabajadores en la Junta Directiva de la Caja Costarricense de Seguro Social (CCSS).
    `,
    enlace: "news/noticia.html?id=news-64",
  },

  {
    id: "news-63",
    imagen: "img/news/news-63.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "24 Julio, 2025",
    resumen: "",
    contenido: `
SEGUIMIENTO DE SINASSASS A IMPLEMENTACIÓN DEL ERP-SAP EN LAS UNIDADES DE LA GERENCIA MÉDICA.
    `,
    enlace: "news/noticia.html?id=news-63",
  },

  {
    id: "news-62",
    imagen: "img/news/news-62.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "21 Julio, 2025",
    resumen: "",
    contenido: `
“SINASSASS emprenderá acción legal colectiva contra el injusto rebajo de vacaciones por incapacidad”.
    `,
    enlace: "news/noticia.html?id=news-62",
  },

  {
    id: "news-61",
    imagen: "img/news/news-61.jpeg",
    titulo: "Congelamiento salarial:",
    tituloSidebar: "Congelamiento salarial:",
    fecha: "17 Julio, 2025",
    resumen: "",
    contenido: `
Congelamiento salarial: La verdad detrás del estancamiento.
    `,
    enlace: "news/noticia.html?id=news-61",
  },

  {
    id: "news-60",
    imagen: "img/news/news-60.jpeg",
    titulo: "SINASSASS INFORMA:",
    tituloSidebar: "SINASSASS INFORMA:",
    fecha: "11 Julio, 2025",
    resumen: "",
    contenido: `
SINASSASS reafirma su compromiso con el fortalecimiento de la gestión administrativa en hospitales y áreas de salud.
    `,
    enlace: "news/noticia.html?id=news-60",
  },

  {
    id: "news-59",
    imagen: "img/news/news-59.jpeg",
    titulo: "SINASSASS INFORMA:",
    tituloSidebar: "SINASSASS INFORMA:",
    fecha: "19 Junio, 2025",
    resumen: "",
    contenido: `
Fallos en la implementación del sistema ERP-SAP paralizan áreas críticas de la CCSS.
    `,
    enlace: "news/noticia.html?id=news-59",
  },

  {
    id: "news-58",
    imagen: "img/news/news-58.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "2 Junio, 2025",
    resumen: "",
    contenido: `
ERP-SAP entra en funcionamiento y confirma advertencias: Unidades con inconvenientes, retrasos y afectación general.
    `,
    enlace: "news/noticia.html?id=news-58",
  },

  {
    id: "news-57",
    imagen: "img/news/news-57.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "2 Junio, 2025",
    resumen: "",
    contenido: `
SINASASS exige claridad, responsabilidad y garantías antes de la implementación del sistema ERP-SAP en la CCSS
    `,
    enlace: "news/noticia.html?id=news-57",
  },

  {
    id: "news-56",
    imagen: "img/news/news-56.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "26 Marzo, 2025",
    resumen: "",
    contenido: `
🚨 ATENCIÓN COMPAÑEROS. Convocatoria Asamblea Extraordinaria y Jornada de Reflexión.

✍️Inscríbase y participe. Su presencia es de suma importancia para seguir creciendo y fortaleciendo a nuestra gran Organización.

📍Enlace de inscripción:
👉🏻 https://forms.office.com/r/Hvw33LE2zv

☝🏼Importante:
📝 No olvide llenar también la boleta de compromiso de pago que se les hará llegar a sus correos y hacérnosla llegar a:
📮 info@sinassasscr.org
    `,
    enlace: "news/noticia.html?id=news-56",
  },

  {
    id: "news-55",
    imagen: "img/news/news-55.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "10 Marzo, 2025",
    resumen: "",
    contenido: `
Mensaje Secretaría de la Mujer, SINASSASS.

Conmemoración Día Internacional de la Mujer.

8 de Marzo, 2025.
    `,
    enlace: "news/noticia.html?id=news-55",
  },

  {
    id: "news-54",
    imagen: "img/news/news-54.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "11 Febrero, 2025",
    resumen: "",
    contenido: `
Importantes acuerdos en el Área de Salud de Buenos Aires de Puntarenas.
    `,
    enlace: "news/noticia.html?id=news-54",
  },

  {
    id: "news-53",
    imagen: "img/news/news-53.jpeg",
    titulo: "SINASSASS INFROMA",
    tituloSidebar: "SINASSASS INFROMA",
    fecha: "22 Enero, 2025",
    resumen: "",
    contenido: `
SINASSASS se reúne con Auditoría Interna de la CCSS para abordar abusos en medidas cautelares.
    `,
    enlace: "news/noticia.html?id=news-53",
  },

  {
    id: "news-52",
    imagen: "img/news/news-52.jpeg",
    titulo: "CONVENIO SINASSASS-UACA",
    tituloSidebar: "CONVENIO SINASSASS-UACA",
    fecha: "24 Octubre, 2024",
    resumen: "",
    contenido: `
¡Excelentes noticias!
Ahora es más fácil estudiar.
Aprovecha esta Beca del 50%.
Válido para familiares y afiliados.
    `,
    enlace: "news/noticia.html?id=news-52",
  },

  {
    id: "news-51",
    imagen: "img/news/news-51.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "27 Setiembre, 2024",
    resumen: "",
    contenido: `
COMUNIDADO ASAMBLEA GENERAL 2024, les solicitamos considerar la información adjunta
    `,
    enlace: "news/noticia.html?id=news-51",
  },

  {
    id: "news-50",
    imagen: "img/news/news-50.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "25 Setiembre, 2024",
    resumen: "",
    contenido: `
SINASSASS externa su respaldo absoluto a denuncias que propiciaron investigación y medidas cautelares contra Marta Esquivel y 7 personas más.
    `,
    enlace: "news/noticia.html?id=news-50",
  },

  {
    id: "news-49",
    imagen: "img/news/news-49.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "24 Setiembre, 2024",
    resumen: "",
    contenido: `
SINASSASS participó en resolución de controversias para el reconocimiento de pago de viáticos y asignación de transporte en zona de Los Santos.
    `,
    enlace: "news/noticia.html?id=news-49",
  },

  {
    id: "news-48",
    imagen: "img/news/news-48.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "24 Setiembre, 2024",
    resumen: "",
    contenido: `
SINASSASS acompaña y respalda incorporación de compañera afiliada a su servicio, en el Área de Salud de La Cruz, en Guanacaste.
    `,
    enlace: "news/noticia.html?id=news-48",
  },

  {
    id: "news-47",
    imagen: "img/news/news-47.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "19 Agosto, 2024",
    resumen: "",
    contenido: `
Basta ya de persecución política contra la compañera Martha Rodríguez G.
    `,
    enlace: "news/noticia.html?id=news-47",
  },

  {
    id: "news-46",
    imagen: "img/news/news-46.jpeg",
    titulo: "INDIGNANTE:",
    tituloSidebar: "INDIGNANTE:",
    fecha: "7 Agosto, 2024",
    resumen: "",
    contenido: `
Junta Directiva de la CCSS adjudicó administración de 10 Áreas de Salud a Cooperativas pese a ofertas con precios excesivos.
    `,
    enlace: "news/noticia.html?id=news-46",
  },

  {
    id: "news-45",
    imagen: "img/news/news-45.jpeg",
    titulo: "SINASSASS INFORMA:",
    tituloSidebar: "SINASSASS INFORMA:",
    fecha: "7 Agosto, 2024",
    resumen: "",
    contenido: `
SINASSASS RECORDATORIO ASAMBLEA GENERAL 2024
    `,
    enlace: "news/noticia.html?id=news-45",
  },

  {
    id: "news-44",
    imagen: "img/news/news-44.jpeg",
    titulo: "SINASSASS INFORMA:",
    tituloSidebar: "SINASSASS INFORMA:",
    fecha: "4 Julio, 2024",
    resumen: "",
    contenido: `
SINASSASS, UNDECA, ACODIMED y SIACCSS presentan demanda contra la CCSS ante el Tribunal Contencioso Administrativo.
    `,
    enlace: "news/noticia.html?id=news-44",
  },

  {
    id: "news-43",
    imagen: "img/news/news-43.jpeg",
    titulo: "SINASSASS INFORMA:",
    tituloSidebar: "SINASSASS INFORMA:",
    fecha: "27 Junio, 2024",
    resumen: "",
    contenido: `
IMPORTANTE: Unión Sindical CCSS Exige Transparencia en el proceso de Valoración del punto para el cálculo del Salario Global para Funcionarios de la institución.
    `,
    enlace: "news/noticia.html?id=news-43",
  },

  {
    id: "news-42",
    imagen: "img/news/news-42.jpeg",
    titulo: "COMUNICADO SINASSASS:",
    tituloSidebar: "COMUNICADO SINASSASS:",
    fecha: "24 Junio, 2024",
    resumen: "",
    contenido: `
🔘SINASSASS realiza gestiones de alto nivel: propone oportunidades de mejora para la gestión administrativa en los establecimientos de salud.
    `,
    enlace: "news/noticia.html?id=news-42",
  },

  {
    id: "news-41",
    imagen: "img/news/news-41.jpeg",
    titulo: "SINASSASS: convocatoria a la Asamblea General,",
    tituloSidebar: "SINASSASS: convocatoria a la Asamblea General,",
    fecha: "30 Mayo, 2024",
    resumen: "",
    contenido: `
SINASSASS: convocatoria a la Asamblea General, recordando que el proceso de preinscripción para hospedaje ya pasó, En caso de querer asistir ese día solamente a la Asamblea, favor remitir correo a las tardar mañana viernes 31 de julio 2024, info@sinassasscr.org
    `,
    enlace: "news/noticia.html?id=news-41",
  },

  {
    id: "news-40",
    imagen: "img/news/news-40.jpeg",
    titulo:
      "DECLARATORIA DE EXCLUSIVOS Y EXCLUYENTES DEBE SER PARA TODOS LOS TRABAJADORES DE LA CCSS",
    tituloSidebar:
      "DECLARATORIA DE EXCLUSIVOS Y EXCLUYENTES DEBE SER PARA TODOS LOS TRABAJADORES DE LA CCSS",
    fecha: "26 Febrero, 2024",
    resumen: "",
    contenido: `
--- Preparamos Acción Contencioso Administrativa ---

En SINASSASS demostramos que seguimos firmes en la lucha y defensa de los y las trabajadoras de la CCSS y Autonomía de la Institución.
    `,
    enlace: "news/noticia.html?id=news-40",
  },

  {
    id: "news-39",
    imagen: "img/news/news-39.jpeg",
    titulo: "Terquedades de Marta Esquivel la hunden…",
    tituloSidebar: "Terquedades de Marta Esquivel la hunden…",
    fecha: "18 Enero, 2024",
    resumen: "",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-39",
  },

  {
    id: "news-38",
    imagen: "img/news/news-38.jpeg",
    titulo: "🔴Posición de SINASSASS:",
    tituloSidebar: "🔴Posición de SINASSASS:",
    fecha: "10 Noviembre, 2023",
    resumen: "Ruta de la Salud un burdo engaño:",
    contenido: `
Ruta de la Salud un burdo engaño:

Ruta de la salud, una estrategia de privatización disfrazada de humanismo y buenas intenciones.
    `,
    enlace: "news/noticia.html?id=news-38",
  },

  {
    id: "news-37",
    imagen: "img/news/news-37.jpeg",
    titulo:
      "Hoy 1 de noviembre de 2023, SINASSASS celebra el 82 Aniversario de nuestra querida CCSS. 🥳",
    tituloSidebar:
      "Hoy 1 de noviembre de 2023, SINASSASS celebra el 82 Aniversario de nuestra querida CCSS. 🥳",
    fecha: "01 Noviembre, 2023",
    resumen: "1 de nov 1941-1 de nov 2023.",
    contenido: `
1 de nov 1941-1 de nov 2023.
    `,
    enlace: "news/noticia.html?id=news-37",
  },

  {
    id: "news-36",
    imagen: "img/news/news-36.jpeg",
    titulo:
      "SINASSASS solicita aclaración a la DAGP para todas las oficinas de recursos humanos.",
    tituloSidebar:
      "SINASSASS solicita aclaración a la DAGP para todas las oficinas de recursos humanos.",
    fecha: "10 Octubre, 2023",
    resumen: "",
    contenido: `
Dedicación Exclusiva se debe pagar con base al título que ostente el funcionario y no sobre el requisito mínimo que solicita el puesto que se ocupan, según PGR.

10 de Octubre, 2023.
    `,
    enlace: "news/noticia.html?id=news-36",
  },

  {
    id: "news-35",
    imagen: "img/news/news-35.jpeg",
    titulo:
      "SINASSASS SERÁ PARTE: Convocatoria y conformación del nuevo Frente de Lucha por la Defensa del Estado Social.",
    tituloSidebar:
      "SINASSASS SERÁ PARTE: Convocatoria y conformación del nuevo Frente de Lucha por la Defensa del Estado Social.",
    fecha: "12 Setiembre, 2023",
    resumen: "",
    contenido: `
🗓 Miércoles 13 de setiembre de 2023.

🕒 3:00 p.m.

🏛 Auditorio Facultad de Agronomía, UCR Facultad de Ciencias Agroalimentarias (FCA), UCR.
Ciudad Universitaria Rodrigo Facio, San José, San Pedro de Montes de Oca.

12 de Setiemnbre, 2023.
    `,
    enlace: "news/noticia.html?id=news-35",
  },

  {
    id: "news-34",
    imagen: "img/news/news-34.jpeg",
    titulo:
      "Taller de Salud Mental SINASSASS. Lo mejor de hoy, nuestros afiliados y su bienestar.",
    tituloSidebar:
      "Taller de Salud Mental SINASSASS. Lo mejor de hoy, nuestros afiliados y su bienestar.",
    fecha: "25 Agosto, 2023",
    resumen: "",
    contenido: `
25 de Agosto, 2023.
    `,
    enlace: "news/noticia.html?id=news-34",
  },

  {
    id: "news-33",
    imagen: "img/news/news-33.jpeg",
    titulo:
      "SINASSASS y organizaciones de la Unión Sindical de la CCSS en reunión con autoridades de la Caja.",
    tituloSidebar:
      "SINASSASS y organizaciones de la Unión Sindical de la CCSS en reunión con autoridades de la Caja.",
    fecha: "24 Agosto, 2023",
    resumen: "",
    contenido: `
24 de Agosto, 2023.
    `,
    enlace: "news/noticia.html?id=news-33",
  },

  {
    id: "news-32",
    imagen: "img/news/news-32.jpeg",
    titulo: "SINASSASS UNIDOS POR LA CCSS Y SU AUTONOMÍA.",
    tituloSidebar: "SINASSASS UNIDOS POR LA CCSS Y SU AUTONOMÍA.",
    fecha: "17 Julio, 2023",
    resumen: "",
    contenido: `
SINASSASS firme y decidido ha mostrado su apoyo a los y las trabajadoras de la CCSS en defensa de sus derechos y de la declaratoria de exclusivos y excluyentes para todos los grupos ocupacionales. Así mismo ha convocado junto a la Unión Sindical de la CCSS, a los diferentes llamados de huelga de los últimos meses, como las del pasado jueves 8 de junio, jueves 13 de julio y sábado 15 de julio a la gran Marcha Unidos por la CCSS, entre otras acciones. Creemos en la unidad y creemos en la lucha. Por eso seguiremos firmes y beligerantes contra toda injerencia y política privatizadora en la CCSS y contra las irregulares e ilegales acciones del Gobierno y de la Junta Directiva de la CCSS, que desprestigian a la Institución y a los trabajadores. Hacemos un llamado a los trabajadores a no desfallecer y por el contrario seguir unidos. No claudicaremos en nuestra lucha. Estas últimas luchas han demostrado que los trabajadores somos aguerridos y estamos dispuestos a defender lo que nos pertenece. Miles hemos salido a las calles. Por eso, sigamos unidos y cada vez más fuertes. A la Caja la queremos a la Caja la defendemos.

17 de julio, 2023.

Junta Directiva SINASSASS.

LIC. FERMAN SANCHO HERRERA

Secretaría Organización y Comunicación.
    `,
    enlace: "news/noticia.html?id=news-32",
  },

  {
    id: "news-31",
    imagen: "img/news/news-31.jpeg",
    titulo:
      "SINASSASS unidos por la CCSS y su autonomía, y el respeto a los derechos de los trabajadores",
    tituloSidebar:
      "SINASSASS unidos por la CCSS y su autonomía, y el respeto a los derechos de los trabajadores",
    fecha: "17 Julio, 2023",
    resumen: "",
    contenido: `
SINASSASS firme y decidido ha mostrado su apoyo a los y las trabajadoras de la CCSS en defensa de sus derechos y de la declaratoria de exclusivos y excluyentes para todos los grupos ocupacionales. Así mismo ha convocado junto a la Unión Sindical de la CCSS, a los diferentes llamados de huelga de los últimos meses, como las del pasado jueves 8 de junio, jueves 13 de julio y sábado 15 de julio a la gran Marcha Unidos por la CCSS, entre otras acciones. Creemos en la unidad y creemos en la lucha. Por eso seguiremos firmes y beligerantes contra toda injerencia y política privatizadora en la CCSS y contra las irregulares e ilegales acciones del Gobierno y de la Junta Directiva de la CCSS, que desprestigian a la Institución y a los trabajadores. Hacemos un llamado a los trabajadores a no desfallecer y por el contrario seguir unidos. No claudicaremos en nuestra lucha. Estas últimas luchas han demostrado que los trabajadores somos aguerridos y estamos dispuestos a defender lo que nos pertenece. Miles hemos salido a las calles. Por eso, sigamos unidos y cada vez más fuertes. A la Caja la queremos a la Caja la defendemos.

17 de julio, 2023.

Junta Directiva SINASSASS.

LIC. FERMAN SANCHO HERRERA

Secretaría Organización y Comunicación.
    `,
    enlace: "news/noticia.html?id=news-31",
  },

  {
    id: "news-30",
    imagen: "img/news/news-30.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "11 Julio, 2023",
    resumen: "",
    contenido: `
SINASSASS sobre acuerdo de Junta Directiva que deja bajo rectoría de Mideplan a más de 19 mil trabajadores.
    `,
    enlace: "news/noticia.html?id=news-30",
  },

  {
    id: "news-29",
    imagen: "img/news/news-29.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "07 Julio, 2023",
    resumen: "",
    contenido: `
Sobre obligatoriedad de firmar la declaratoria de compromiso Ético y respeto al deber de probidad informamos.
    `,
    enlace: "news/noticia.html?id=news-29",
  },

  {
    id: "news-28",
    imagen: "img/news/news-28.jpeg",
    titulo: "Comunicado SINASSASS:",
    tituloSidebar: "Comunicado SINASSASS:",
    fecha: "28 Junio, 2023",
    resumen: "",
    contenido: `
¡Autonomía de la CCSS se respeta!
    `,
    enlace: "news/noticia.html?id=news-28",
  },

  {
    id: "news-27",
    imagen: "img/news/news-27.jpeg",
    titulo:
      "COMUNICADO SINASSASS: Anuncio “urgente” sobre CCSS, una cortina de humo más del Gobierno.",
    tituloSidebar:
      "COMUNICADO SINASSASS: Anuncio “urgente” sobre CCSS, una cortina de humo más del Gobierno.",
    fecha: "15 Junio, 2023",
    resumen: "",
    contenido: `
La prepotencia y ofensivo autoritarismo del presidente Rodrigo Chaves y la presidente Ejecutiva de la CCSS Marta Esquivel fueron los principales protagonistas del circo montado ayer en casa presidencial.
    `,
    enlace: "news/noticia.html?id=news-27",
  },

  {
    id: "news-26",
    imagen: "img/news/news-26.jpeg",
    titulo: "UNIDAD SINDICAL CONFORMA MESA DE NEGOCIACIÓN CON LA CCSS.",
    tituloSidebar: "UNIDAD SINDICAL CONFORMA MESA DE NEGOCIACIÓN CON LA CCSS.",
    fecha: "12 Junio, 2023",
    resumen: "",
    contenido: `
El compañero Mario Cascante en representación de SINASSASS participó este lunes 12 de junio, junto a la Unidad Sindical, en reunión con la señora Marta Esquivel Rodríguez presidenta Ejecutiva, la Gerente Administrativa Vilma Campos y el Dr Marino Ramírez Gerente Médico. El punto principal de la mesa: la apertura de una mesa de negociación inmediata. Con suma satisfacción les informamos que en dicha reunión se acuerda la conformación de una mesa de negociación en cuya agenda se discutan el tema de Exclusivos y Excluyentesy otros importantes puntos. Este sábado 17 de junio inicia la primera sesión y estaremos informando. Estemos atentos pues la lucha sigue.
    `,
    enlace: "news/noticia.html?id=news-26",
  },

  {
    id: "news-25",
    imagen: "img/news/news-25.jpeg",
    titulo: "Posición Unidad Sindical CCSS y llamado a Huelga Nacional.",
    tituloSidebar: "Posición Unidad Sindical CCSS y llamado a Huelga Nacional.",
    fecha: "07 Junio, 2023",
    resumen: "",
    contenido: `
Una muestra del deterioro al que seremos sometidos. Salarios miserables, no más aumentos, tiempo extraordinario y más…
    `,
    enlace: "news/noticia.html?id=news-25",
  },

  {
    id: "news-24",
    imagen: "img/news/news-24.jpeg",
    titulo:
      "SINASSASS informa: sobre gestión de nuestro sindicato ante derogatoria del Protocolo de Declaración de Estudios de Inviabilidad.",
    tituloSidebar:
      "SINASSASS informa: sobre gestión de nuestro sindicato ante derogatoria del Protocolo de Declaración de Estudios de Inviabilidad.",
    fecha: "26 Mayo, 2023",
    resumen: "",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-24",
  },

  {
    id: "news-23",
    imagen: "img/news/news-23.jpeg",
    titulo:
      "SINASSASS sobre obligatoriedad de firmar la declaratoria de compromiso Ético y respeto al deber de probidad.",
    tituloSidebar:
      "SINASSASS sobre obligatoriedad de firmar la declaratoria de compromiso Ético y respeto al deber de probidad.",
    fecha: "19 Mayo, 2023",
    resumen: "",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-23",
  },

  {
    id: "news-22",
    imagen: "img/news/news-22.jpeg",
    titulo:
      "Todas las clases de puestos de la CCSS, son de carácter exclusiva y excluyente.",
    tituloSidebar:
      "Todas las clases de puestos de la CCSS, son de carácter exclusiva y excluyente.",
    fecha: "19 Mayo, 2023",
    resumen: "",
    contenido: `
ASÍ LO DEBE DECLARAR LA JUNTA DIRECTIVA DE LA CCSS
    `,
    enlace: "news/noticia.html?id=news-22",
  },

  {
    id: "news-21",
    imagen: "img/news/news-21.jpeg",
    titulo:
      "¿Eres afiliado y estás próximo a jubilarte? Esta información es para usted.",
    tituloSidebar:
      "¿Eres afiliado y estás próximo a jubilarte? Esta información es para usted.",
    fecha: "12 Mayo, 2023",
    resumen: "",
    contenido: `
Artículo sexto de nuestro estatuto nos permite seguir siendo afiliados posterior a nuestra jubilación.
    `,
    enlace: "news/noticia.html?id=news-21",
  },

  {
    id: "news-20",
    imagen: "img/news/news-20.jpeg",
    titulo: "SINASSASS en reunión de Comisión de Unidad Sindical CCSS.",
    tituloSidebar: "SINASSASS en reunión de Comisión de Unidad Sindical CCSS.",
    fecha: "05 Mayo, 2023",
    resumen: "",
    contenido: `
Sindicatos solicitamos mesa de negociación para abordar temas urgentes en la CCSS.
    `,
    enlace: "news/noticia.html?id=news-20",
  },

  {
    id: "news-19",
    imagen: "img/news/news-19.jpeg",
    titulo: "SOBRE INFORME PRIMER AÑO DE GESTIÓN PRESIDENTE RODRIGO CHAVES.",
    tituloSidebar:
      "SOBRE INFORME PRIMER AÑO DE GESTIÓN PRESIDENTE RODRIGO CHAVES.",
    fecha: "03 Mayo, 2023",
    resumen: "",
    contenido: `
Un informe sin resultados o logros concretos.
    `,
    enlace: "news/noticia.html?id=news-19",
  },

  {
    id: "news-18",
    imagen: "img/news/news-18.jpeg",
    titulo:
      "SINASSASS firme y en unidad en defensa de la CCSS y nuestros derechos laborales.",
    tituloSidebar:
      "SINASSASS firme y en unidad en defensa de la CCSS y nuestros derechos laborales.",
    fecha: "27 Abril, 2023",
    resumen: "",
    contenido: `
Nuestro sindicato apoya unidad de sindicatos de la Salud.
    `,
    enlace: "news/noticia.html?id=news-18",
  },

  {
    id: "news-17",
    imagen: "img/news/news-17.jpeg",
    titulo: "MANEJO POLÍTICO EN LA CCSS.",
    tituloSidebar: "MANEJO POLÍTICO EN LA CCSS.",
    fecha: "26 Abril, 2023",
    resumen: "",
    contenido: `
SINASSASS plantea a diputada Sofía Guillén su preocupación sobre manejo político injerencista en la CCSS.
    `,
    enlace: "news/noticia.html?id=news-17",
  },

  {
    id: "news-16",
    imagen: "img/news/news-16.jpeg",
    titulo: "DÍA DEL TRABAJADOR.",
    tituloSidebar: "DÍA DEL TRABAJADOR.",
    fecha: "25 Abril, 2023",
    resumen: "",
    contenido: `
Este 1 de Mayo, a marchar por nuestros derechos y los de nuestras familias. Que no sea un feriado más…
    `,
    enlace: "news/noticia.html?id=news-16",
  },

  {
    id: "news-15",
    imagen: "img/news/news-15.jpeg",
    titulo:
      "LABORES DE TRABAJADORES DE LA CCSS DEBEN SER DECLARADAS COMO EXCLUSIVOS Y EXCLUYENTES.",
    tituloSidebar:
      "LABORES DE TRABAJADORES DE LA CCSS DEBEN SER DECLARADAS COMO EXCLUSIVOS Y EXCLUYENTES.",
    fecha: "17 Abril, 2023",
    resumen: "",
    contenido: `
La Junta Directiva del Sindicato de Administradores de Servicios de Salud y Afines del Seguro Social SINASSASS, comunica que acordó en su sesión ordinaria celebrada el viernes 14 de abril de los presentes, la contratación de consultoría especial para fijar formal posición y solicitud ante Junta Directiva de la CCSS, respecto a que esta última declare como exclusivos y excluyentes todas las relaciones de empleo y los puestos de las personas trabajadoras de la CCSS.
    `,
    enlace: "news/noticia.html?id=news-15",
  },

  {
    id: "news-14",
    imagen: "img/news/news-14.jpeg",
    titulo: "COMUNICADO SINASSASS",
    tituloSidebar: "COMUNICADO SINASSASS",
    fecha: "9 Febrero, 2023",
    resumen: "",
    contenido: `
Gestiona sobre enlace (link) para consulta pública de salarios de funcionarios de la CCSS.
    `,
    enlace: "news/noticia.html?id=news-14",
  },

  {
    id: "news-13",
    imagen: "img/news/news-13.jpeg",
    titulo:
      "SINASSASS sobre reunión ante dirección de administración y dirección de personal.",
    tituloSidebar:
      "SINASSASS sobre reunión ante dirección de administración y dirección de personal.",
    fecha: "30 Enero, 2023",
    resumen: "",
    contenido: `
SINASSASS informa alcance de reunión con personeros de la DAGP. Temas de interés de todos los y las trabajadoras de la Institución.
    `,
    enlace: "news/noticia.html?id=news-13",
  },

  {
    id: "news-12",
    imagen: "img/news/news-12.jpeg",
    titulo: "SINASSASS respalda a Martha Elena Rodríguez",
    tituloSidebar: "SINASSASS respalda a Martha Elena Rodríguez",
    fecha: "30 Enero, 2023",
    resumen: "",
    contenido: `
Organizaciones sindicales del BUSSCO entre ellas SINASSASS, han manifestado su apoyo a la ratificación de la compañera Martha Rodríguez.
    `,
    enlace: "news/noticia.html?id=news-12",
  },

  {
    id: "news-1",
    imagen: "img/news/news-1.jpg",
    titulo:
      "Directivos suspendidos arbitrariamente deben ser reinstalados en sus cargos.",
    tituloSidebar:
      "Directivos suspendidos arbitrariamente deben ser reinstalados en sus cargos.",
    fecha: "17 Enero, 2023",
    resumen:
      "Directivos suspendidos arbitrariamente deben ser reinstalados en sus cargos.",
    contenido: `
La Auditoria de la CCSS objetó los argumentos de gobierno contra directivos. Acuerdo fue un acto de alcance general concluyeron. Sale a la luz una incoherencia más de Rodrigo Chaves y la presidenta Ejecutiva Martha Esquivel que se suma a la "lista" interminable de "pifias" del gobiero contra la CCSS y sus trabajadores.
Poco a poco se le acaban las tropelías al Ejecutivo. Basta ya de ensuciar indiscriminadamente a la CCSS Los directivos suspendidos deben ser reinstalados en sus cargos
    `,
    enlace: "news/noticia.html?id=news-1",
  },

  {
    id: "news-2",
    imagen: "img/news/news-2.jpeg",
    titulo:
      "SINASSASS reformas al estatuto asamblea general ordinaria, período 2021 – 2022 14 de Octubre 2022.",
    tituloSidebar:
      "SINASSASS reformas al estatuto asamblea general ordinaria, período 2021 – 2022 14 de Octubre 2022.",
    fecha: "12 Noviembre, 2022",
    resumen: "Periodo 2021 – 2022, 14 DE OCTUBRE 2022.",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-2",
  },

  {
    id: "news-3",
    imagen: "img/news/news-3.jpeg",
    titulo:
      "Campo pagado – SINASSASS sobre nombramiento interino de gerente administrativo.",
    tituloSidebar:
      "Campo pagado – SINASSASS sobre nombramiento interino de gerente administrativo.",
    fecha: "01 Setiembre, 2022",
    resumen: "SINASSASS sobre nombramiento interino de gerente administrativo",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-3",
  },

  {
    id: "news-4",
    imagen: "img/news/news-4.jpg",
    titulo: "CONVENIO 190 OIT",
    tituloSidebar: "CONVENIO 190 OIT",
    fecha: "05 Agosto, 2022",
    resumen: "",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-4",
  },

  {
    id: "news-5",
    imagen: "img/news/news-5.jpeg",
    titulo: "SINASSASS dice presente",
    tituloSidebar: "SINASSASS dice presente",
    fecha: "21 Julio, 2022",
    resumen:
      "Asamblea General Ordinaria período 2021-2022 y Asamblea General Extraordinaria",
    contenido: `
1 de Mayo, día internacional de los trabajadores.
    `,
    enlace: "news/noticia.html?id=news-5",
  },

  {
    id: "news-6",
    imagen: "img/news/news-6.jpeg",
    titulo:
      "Asamblea General Ordinaria período 2021-2022 y Asamblea General Extraordinaria",
    tituloSidebar:
      "Asamblea General Ordinaria período 2021-2022 y Asamblea General Extraordinaria",
    fecha: "27 Abril, 2022",
    resumen: "1 de Mayo, día internacional de los trabajadores.",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-6",
  },

  {
    id: "news-7",
    imagen: "img/news/news-7.jpeg",
    titulo: "Compartimos información de interés.",
    tituloSidebar: "Compartimos información de interés.",
    fecha: "27 Abril, 2022",
    resumen: "",
    contenido: `

    `,
    enlace: "news/noticia.html?id=news-7",
  },

  {
    id: "news-8",
    imagen: "img/news/news-8.jpeg",
    titulo: "Las buenas noticias se comparten",
    tituloSidebar: "Las buenas noticias se comparten",
    fecha: "09 Abril, 2022",
    resumen: "Comunicado SINASSASS",
    contenido: `
Comunicado SINASSASS
    `,
    enlace: "news/noticia.html?id=news-8",
  },

  {
    id: "news-9",
    imagen: "img/news/news-9.jpeg",
    titulo: "Este 6 de Febrero, Prohibido olvidar ☝🏼",
    tituloSidebar: "Este 6 de Febrero, Prohibido olvidar ☝🏼",
    fecha: "04 Febrero, 2022",
    resumen: "Este 6 de Febrero, Prohibido olvidar ☝🏼",
    contenido: `
Comunicado SINASSASS
    `,
    enlace: "news/noticia.html?id=news-9",
  },

  {
    id: "news-10",
    imagen: "img/news/news-10.jpeg",
    titulo: "Servicios y consultas. SINASSASS con usted",
    tituloSidebar: "Servicios y consultas. SINASSASS con usted",
    fecha: "24 Enero, 2022",
    resumen: "Adjuntamos información de interés sobre trámites.",
    contenido: `
Adjuntamos información de interés sobre trámites
    `,
    enlace: "news/noticia.html?id=news-10",
  },

  {
    id: "news-11",
    imagen: "img/news/news-11.jpeg",
    titulo: "SINASSASS siempre de su lado.",
    tituloSidebar: "SINASSASS siempre de su lado.",
    fecha: "24 Enero, 2022",
    resumen: "Lo que necesita saber para brindarle un excelente servicio.",
    contenido: `
Lo que necesita saber para brindarle un excelente servicio.
    `,
    enlace: "news/noticia.html?id=news-11",
  },
];

if (typeof module !== "undefined") {
  module.exports = noticias;
}
