// Controlador de Campaña y Carruseles Interactivos - Tejidos Manos de Luz
// Cumple: SoC, WCAG 2.1 AA, Gestos Touch, Teclado y Cero console.log

const CAMPAIGN_DATA = [
  {
    id: 1,
    name: "El Origen",
    objective: "Interés genuino & Conexión emocional profunda",
    caption: "¿Alguna vez te has preguntado cuántas horas de paciencia caben en el corazón de una muñeca? Desde el 30 de septiembre de 1985, nuestras manos no solo entrelazan hebras de algodón hipoalergénico: tejen recuerdos que protegen la infancia. Cada puntada en V es un compromiso de amor maternal que trasciende el tiempo.",
    hashtags: "#ManosDeLuz #AmigurumiPeru #TejidoAMano #HechoConAmor #MunecasDeApego #CrianzaConAfecto #RegalosConSentido",
    restoration: "nano-banana-restaurador: Balance cromático orgánico (#F7F4EE / #4A3525), realce de microfibras de algodón y eliminación de ruido digital.",
    slides: [
      { badge: "Storytelling 1985", title: "¿Puede un amigurumi guardar el abrazo de una madre para siempre?", sub: "Desde el 30 de septiembre de 1985", desc: "Primer plano cenital de manos entrelazando hebras con paciencia y devoción artesanal.", img: "vectores/isologo-principal.svg", cta: "Conocer nuestra historia", url: "https://instagram.com/tejidos.manosdeluz" },
      { badge: "Proceso & Calidad", title: "Puntadas en V que duran toda la vida", sub: "100% Algodón Hipoalergénico", desc: "Hilado de algodón natural, ojos con traba de seguridad interior y costuras reforzadas.", img: "vectores/isotipo-aislado.svg", cta: "Ver detalles de confección", url: "https://instagram.com/tejidos.manosdeluz" },
      { badge: "Amor Maternal", title: "El alma de nuestro taller artesanal", sub: "Un regalo que trasciende el tiempo", desc: "Cada muñeco reposa listo para llenar de ternura los brazos de quien más amas.", img: "vectores/isologo-horizontal.svg", cta: "Síguenos en @tejidos.manosdeluz", url: "https://instagram.com/tejidos.manosdeluz" }
    ]
  },
  {
    id: 2,
    name: "Personalizados",
    objective: "Venta & Conversión directa personalizada",
    caption: "Una fotografía antigua, el dibujo de tu pequeño o los colores favoritos de quien más amas: todo puede cobrar vida en un amigurumi irrepetible. En Manos de Luz personalizamos cada personaje con paciencia artesanal. ¡Cupos limitados por mes!",
    hashtags: "#AmigurumiPersonalizado #MunecasArtesanales #RegaloUnico #AmigurumisPorEncargo #TejidosDeAmor #DetallesEspeciales",
    restoration: "nano-banana-restaurador: Claridad extrema en texturas de hilo, corrección de perspectiva y contraste WCAG 2.1 AAA.",
    slides: [
      { badge: "Personalización", title: "Tu recuerdo favorito convertido en una pieza para abrazar", sub: "De una foto a tus manos", desc: "Diseño exclusivo a partir de bocetos, fotos familiares o personajes preferidos.", img: "vectores/isotipo-aislado.svg", cta: "Quiero mi diseño personalizado", url: "https://wa.me/51936372861" },
      { badge: "Detalles Únicos", title: "Piezas 100% adaptadas a tu historia", sub: "Vestidos, bordados y accesorios", desc: "Bordados a mano minuciosos, prendas tejidas miniatura y accesorios personalizados.", img: "vectores/isologo-principal.svg", cta: "Consultar opciones por WhatsApp", url: "https://wa.me/51936372861" },
      { badge: "Cupos Limitados", title: "Agenda tu muñeca personalizada de este mes", sub: "Producción 100% artesanal", desc: "Capacidad limitada a 15 piezas personalizadas mensuales para garantizar la perfección.", img: "vectores/isologo-horizontal.svg", cta: "Pedir por WhatsApp (+51 936 372 861)", url: "https://wa.me/51936372861" }
    ]
  },
  {
    id: 3,
    name: "Bebés & Apego",
    objective: "Transmitir cariño & Validación maternal",
    caption: "La piel de un recién nacido merece la máxima pureza. En Manos de Luz seleccionamos fibras naturales lavables que absorben el aroma de mamá, convirtiendo a cada muñeco en un objeto de apego que brinda calma durante el sueño.",
    hashtags: "#RegaloParaBebe #BabyShowerPeru #ObjetoDeApego #MaternidadReal #MunecasSeguras #AmigurumiBebe #PrimerosRecuerdos",
    restoration: "nano-banana-restaurador: Iluminación etérea suave, tonos pastel cálidos (#E8DDD0 / #F7F4EE) y cero artefactos.",
    slides: [
      { badge: "Bebés & Apego", title: "El secreto de un sueño tranquilo: suavidad que abraza", sub: "Objeto de apego y calma", desc: "Fibras naturales que absorben el olor materno para dar seguridad al descansar.", img: "vectores/isotipo-aislado.svg", cta: "Descubrir línea para bebés", url: "https://wa.me/51936372861" },
      { badge: "Seguridad Certificada", title: "4 sellos de protección para los que más amas", sub: "Tranquilidad para mamá", desc: "1) Hipoalergénico 2) Lavable en ciclo suave 3) Sin tintes tóxicos 4) Indeformable.", img: "vectores/isologo-principal.svg", cta: "Ver ficha de materiales", url: "https://wa.me/51936372861" },
      { badge: "Regalo con Alma", title: "Un detalle que jamás terminará en el olvido", sub: "Empaque de regalo con dedicatoria", desc: "El regalo preferido en baby showers y bautizos familiares.", img: "vectores/isologo-horizontal.svg", cta: "Pide el catálogo de bebés", url: "https://instagram.com/tejidos.manosdeluz" }
    ]
  },
  {
    id: 4,
    name: "Comunidad",
    objective: "Construir comunidad & Prueba social genuina",
    caption: "«Llegó justo el día en que mi hija más necesitaba una sonrisa». Mensajes como este son el motor que sostiene nuestras manos desde hace 40 años. Déjanos un 🧶 en comentarios si crees en el valor de lo hecho con amor.",
    hashtags: "#ComunidadManosDeLuz #TestimoniosReales #ArtesaniaConAmor #ClientesFelices #TejiendoHistorias #EmprendimientoFamiliar",
    restoration: "nano-banana-restaurador: Enfoque selectivo al texto editorial, conservación de matices orgánicos y pureza cromática.",
    slides: [
      { badge: "Testimonio Real", title: "«No es solo un juguete, es parte de nuestra familia»", sub: "Historias que abrigan el corazón", desc: "La emoción de recibir un compañero tejido a mano con dedicación absoluta.", img: "vectores/isotipo-aislado.svg", cta: "Leer más testimonios", url: "https://instagram.com/tejidos.manosdeluz" },
      { badge: "39 Años Tejiendo", title: "Compañeros inseparables que crecen con ellos", sub: "Generaciones acompañadas", desc: "Más de tres décadas llenando de luz y recuerdos los hogares peruanos.", img: "vectores/isologo-principal.svg", cta: "Compartir mi experiencia", url: "https://instagram.com/tejidos.manosdeluz" },
      { badge: "Comunidad Activa", title: "¿Cuál fue ese muñeco que marcó tu infancia?", sub: "¡Queremos leer tu historia!", desc: "Cuéntanos en los comentarios de Instagram y participa en nuestro sorteo mensual.", img: "vectores/isologo-horizontal.svg", cta: "Comentar en Instagram", url: "https://instagram.com/tejidos.manosdeluz" }
    ]
  },
  {
    id: 5,
    name: "Colección Abrazo",
    objective: "Venta inmediata & Escasez artesanal",
    caption: "¡Edición especial disponible para adopción inmediata! Presentamos la colección 'Abrazo Artesanal': tres figuras tejidas a mano con la paleta oficial de nuestra identidad. Solo 5 unidades por modelo.",
    hashtags: "#ColeccionAmigurumi #AdoptaUnAmigurumi #EdicionLimitada #ArtesaniaPeruana #RegalosExclusivos #CompraLocal #ManosDeLuz",
    restoration: "nano-banana-restaurador: Máxima fidelidad a los 5 colores del manual (.ase) y texturas nítidas en alta densidad.",
    slides: [
      { badge: "Nueva Colección", title: "Tres compañeros únicos listos para encontrar un hogar", sub: "Colección 'Abrazo Artesanal'", desc: "Confeccionados rigurosamente con los 5 colores del manual de identidad.", img: "vectores/isologo-principal.svg", cta: "Adoptar muñeca ahora", url: "https://wa.me/51936372861" },
      { badge: "Kit de Adopción", title: "Cada pieza incluye su certificado artesanal", sub: "Caja kraft con sello conmemorativo", desc: "Empaque especial con sello a una tinta `#4A3525` y lazo de yute rústico.", img: "vectores/isotipo-aislado.svg", cta: "Ver certificado de adopción", url: "https://wa.me/51936372861" },
      { badge: "Últimas Unidades", title: "¡Solo 5 unidades disponibles por modelo!", sub: "Entrega inmediata a todo el Perú", desc: "Adopta hoy a tu compañero antes de que se agote la producción manual.", img: "vectores/isologo-horizontal.svg", cta: "Adoptar por WhatsApp (+51 936 372 861)", url: "https://wa.me/51936372861" }
    ]
  }
];

let currentCampaignIndex = 0;
let currentSlideIndex = 0;
let touchStartX = 0;

function renderCampaign() {
  const camp = CAMPAIGN_DATA[currentCampaignIndex];
  const slide = camp.slides[currentSlideIndex];

  // Actualizar tarjeta del slide
  document.getElementById("slide-badge").textContent = slide.badge;
  document.getElementById("slide-count").textContent = `${currentSlideIndex + 1} / 3`;
  document.getElementById("slide-heading").textContent = slide.title;
  document.getElementById("slide-sub").textContent = slide.sub;
  document.getElementById("slide-img").src = slide.img;
  document.getElementById("slide-img").alt = slide.title;
  document.getElementById("slide-desc").textContent = slide.desc;
  const btn = document.getElementById("slide-btn");
  btn.textContent = slide.cta;
  btn.href = slide.url;

  // Actualizar puntos de navegación
  const dots = document.querySelectorAll(".dot-indicator");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlideIndex);
    dot.setAttribute("aria-selected", idx === currentSlideIndex ? "true" : "false");
  });

  // Actualizar panel lateral de Instagram
  document.getElementById("info-title").textContent = `Carrusel ${camp.id}: ${camp.name}`;
  document.getElementById("info-obj").textContent = `Objetivo: ${camp.objective}`;
  document.getElementById("copy-text").textContent = camp.caption;
  document.getElementById("hashtag-text").textContent = camp.hashtags;
  document.getElementById("restoration-text").textContent = camp.restoration;

  // Actualizar estado de tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((tBtn, idx) => {
    tBtn.classList.toggle("active", idx === currentCampaignIndex);
  });
}

function nextSlide() {
  const total = CAMPAIGN_DATA[currentCampaignIndex].slides.length;
  currentSlideIndex = (currentSlideIndex + 1) % total;
  renderCampaign();
}

function prevSlide() {
  const total = CAMPAIGN_DATA[currentCampaignIndex].slides.length;
  currentSlideIndex = (currentSlideIndex - 1 + total) % total;
  renderCampaign();
}

function setAspectRatio(ratio) {
  const frame = document.getElementById("slide-frame");
  frame.classList.toggle("aspect-1-1", ratio === "1/1");
  frame.classList.toggle("aspect-4-5", ratio === "4/5");
  document.getElementById("btn-ratio-1-1").classList.toggle("active", ratio === "1/1");
  document.getElementById("btn-ratio-4-5").classList.toggle("active", ratio === "4/5");
}

document.addEventListener("DOMContentLoaded", () => {
  // Tabs de carruseles
  const tabsContainer = document.getElementById("campaign-tabs");
  CAMPAIGN_DATA.forEach((camp, idx) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${idx === 0 ? "active" : ""}`;
    btn.textContent = `🧶 ${camp.id}. ${camp.name}`;
    btn.onclick = () => {
      currentCampaignIndex = idx;
      currentSlideIndex = 0;
      renderCampaign();
    };
    tabsContainer.appendChild(btn);
  });

  // Botones de controles
  document.getElementById("btn-prev").onclick = prevSlide;
  document.getElementById("btn-next").onclick = nextSlide;

  const dots = document.querySelectorAll(".dot-indicator");
  dots.forEach((dot, idx) => {
    dot.onclick = () => {
      currentSlideIndex = idx;
      renderCampaign();
    };
  });

  // Teclado
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Gestos táctiles Swipe
  const frame = document.getElementById("slide-frame");
  frame.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  frame.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (diff > 45) nextSlide();
    if (diff < -45) prevSlide();
  }, { passive: true });

  renderCampaign();
});
