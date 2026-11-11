# Manual de Identidad Visual y Sistema de Diseño: "Manos de Luz"

> **Versión del Manual:** 2.1 — Sistema Vectorial y Proporciones UI/UX  
> **Fecha de Creación / Actualización:** 11 de Noviembre de 2026  
> **Empresa:** Manos de Luz (Tejidos Manos de Luz)  
> **Fundación del Proyecto:** 30 de Septiembre de 1985  
> **Slogan:** *«Amor y sacrificio tejidos en cada punto.»*  

---

## 1. Perfil e Historia de la Empresa

**Manos de Luz** es un taller artesanal dedicado al diseño y confección de muñecas y piezas amigurumis tejidas totalmente a mano. Desde su nacimiento el **30 de septiembre de 1985**, cada creación rescata la calidez del trabajo hecho con paciencia, esmero e hilados de algodón de la más alta calidad, transformando cada puntada en un personaje entrañable que atesora momentos memorables.

### Pilares y Propuesta de Valor
1. **Conexión Emocional:** Las creaciones trascienden el objeto decorativo para convertirse en compañeros de vida cargados de afecto, ideales para obsequiar a seres queridos o celebrar el nacimiento y la infancia.
2. **Diseño Personalizado:** Cada amigurumi puede adaptarse a las ideas y peticiones de las familias, asegurando que cada detalle refleje una historia particular.
3. **Calidad Artesanal:** Confección 100% manual con hilado hipoalergénico, estructura indeformable y costuras reforzadas pensadas para perdurar por generaciones.

### Canales Oficiales de Contacto
- **Instagram:** [@tejidos.manosdeluz](https://instagram.com/tejidos.manosdeluz)
- **WhatsApp:** [+51 936 372 861](https://wa.me/51936372861)
- **Correos Electrónicos:** `tejidosmanosdeluz@gmail.com` | `cmedina.2508@gmail.com`

---

## 2. Concepto y Anatomía del Isotipo

El isotipo oficial se fundamenta en la síntesis poética de la labor de la artesana:  
**«Un corazón tejido ubicado y protegido entre dos manos abiertas en ofrenda»**.

```
             ┌─────────────────────────┐
             │   CORAZÓN AMIGURUMI     │ -> Terracota Rosado (#C86D63)
             │   Puntadas en V crochet │ -> Crema Algodón (#F7F4EE)
             └───────────┬─────────────┘
                         │ (acunado con ternura)
       ┌─────────────────┴─────────────────┐
       │                                   │
┌──────┴──────────────┐             ┌──────┴──────────────┐
│  MANO IZQUIERDA     │             │    MANO DERECHA     │ -> Verde Oliva Suave (#8C9A7E)
│  Curvas protectoras │             │    Acogida maternal │    Contorno Cacao (#4A3525)
└─────────────────────┘             └─────────────────────┘
```

### Separación Semántica de Capas (Adobe Illustrator Ready)
Para garantizar una edición limpia y sin fricciones en **Adobe Illustrator** u otros editores vectoriales estándar (Inkscape, CorelDraw, Figma), el código fuente de los SVG se organiza en tres capas estructurales (`<g id="...">`):

1. `<g id="capa-manos">`: Contiene los trazados de las manos abiertas que nacen desde las muñecas y se despliegan en dedos estilizados. Relleno en Verde Oliva Suave (`#8C9A7E`) con filete de contorno y líneas de palma en Cacao Profundo (`#4A3525`).
2. `<g id="capa-corazon-tejido">`: Contiene la silueta del corazón en Terracota Rosado (`#C86D63`), la textura de puntadas en 'V' de crochet amigurumi en Crema Algodón (`#F7F4EE`) y la hebra continua de hilado que envuelve armónicamente la base.
3. `<g id="capa-textos">`: Contiene los elementos tipográficos con tipografías Lora (Itálica 600) y Nunito (Bold 700), perfectamente organizados e independientes para salida de imprenta.

---

## 3. Sistema Cromático Oficial: "Abrazo Artesanal"

Paleta de color extraída directamente del archivo original `AdobeColor A,IGURUMIS2.ase` (resguardado en `01_Insumos_y_Manuales/`).

### Tabla de Códigos y Proporciones (Regla 60 - 25 - 10 - 5)

| Tono | Muestra | HEX | RGB | CMYK | Proporción | Función Psicológica y Visual |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Crema Algodón** | `[ #F7F4EE ]` | `#F7F4EE` | `247, 244, 238` | `2, 2, 5, 0` | **60% (Base)** | Lienzo principal. Transmite paz, descanso visual y pulcritud artesanal. Evita el blanco puro. |
| **Avena Tibia** | `[ #E8DDD0 ]` | `#E8DDD0` | `232, 221, 208` | `8, 12, 16, 0` | **25% (Soporte)** | Tarjetas, franjas y cajas de producto. Aporta sensación táctil de fibra natural. |
| **Cacao Profundo** | `[ #4A3525 ]` | `#4A3525` | `74, 53, 37` | `48, 62, 74, 55`| **25% (Soporte)** | Color oficial de textos, menú y contornos. Confiere autoridad artesanal y solidez. |
| **Verde Oliva Suave**| `[ #8C9A7E ]` | `#8C9A7E` | `140, 154, 126` | `43, 24, 47, 4` | **10% (Equilibrio)**| Manos en el imagotipo, insignias de confianza ("100% algodón", "Hecho a mano") e íconos. |
| **Terracota Rosado**| `[ #C86D63 ]` | `#C86D63` | `200, 109, 99` | `18, 67, 56, 3` | **5% (Acción)** | Imán emocional. Corazón tejido, botones de compra ("Adoptar muñeca") y badges de oferta. |

### Certificación de Contraste y Accesibilidad (WCAG 2.1 AA)

- **Cacao Profundo (`#4A3525`) sobre Crema Algodón (`#F7F4EE`):** Ratio **10.47:1** $\rightarrow$ **PASA AAA** (Mínimo requerido AA: 4.5:1).
- **Cacao Profundo (`#4A3525`) sobre Avena Tibia (`#E8DDD0`):** Ratio **8.58:1** $\rightarrow$ **PASA AAA** (Mínimo requerido AA: 4.5:1).
- **Terracota Rosado (`#C86D63`) sobre Crema Algodón (`#F7F4EE`):** Ratio **3.28:1** $\rightarrow$ **PASA AA** para elementos gráficos, iconos y textos en negrita $\ge 14\text{pt}$ (18.5px).

---

## 4. Sistema Tipográfico Oficial

Basado en las fuentes oficiales organizadas en [`02_Tipografias/`](file:///g:/Mi%20unidad/Documentos%20personales/2026_DLMEDIAPRO/05_Clientes/03_MANOS%20DE%20LUZ/02_Tipografias/) e integradas mediante Google Fonts.

### 1. Tipografía Primaria: Lora Serif (Itálica SemiBold 600)
- **Personalidad:** Elegante, caligráfica, fluida, maternal y de tradición artesanal.
- **Usos Oficiales:**
  - **Lora Serif Itálica SemiBold (600):** Logomarca oficial *"Manos de Luz"*. Las curvaturas de las serifas itálicas evocan el movimiento de las agujas de tejer y la delicadeza del hilo.
  - **Lora Italic (400i / 600i):** Frases emotivas, acentos poéticos y slogan de la marca: *«Amor y sacrificio tejidos en cada punto.»*
  - **Lora SemiBold Romana (600):** Aplicaciones editoriales secundarias, titulares de catálogos y nombres de colecciones.

### 2. Tipografía Secundaria: Nunito (Sans-Serif)
- **Personalidad:** Amable, redondeada, cercana y altamente legible en pantallas y empaques.
- **Usos Oficiales:**
  - **Nunito SemiBold / Bold (600 / 700):** Descriptor artesanal en mayúsculas (`TEJIDOS ARTESANALES`) con espaciado entre letras (`letter-spacing: 5px a 6px`).
  - **Nunito Regular (400):** Cuerpo de texto, historias de cada muñeca, fichas de producto (interlineado recomendado: 1.5 a 1.6).
  - **Nunito Bold (700):** Botones de llamada a la acción ("Adoptar muñeca", "Personalizar pedido"), precios y etiquetas.

---

## 5. Variaciones Vectoriales Disponibles

Se han generado 4 archivos SVG vectoriales nativos en la carpeta [`vectores/`](file:///g:/Mi%20unidad/Documentos%20personales/2026_DLMEDIAPRO/05_Clientes/03_MANOS%20DE%20LUZ/vectores/):

| Archivo | ViewBox | Capas Semánticas | Líneas | Caso de Uso Principal |
| :--- | :---: | :--- | :---: | :--- |
| [`vectores/isologo-principal.svg`](vectores/isologo-principal.svg) | `0 0 600 660` | `capa-manos`, `capa-corazon-tejido`, `capa-textos` | 170 | Cabeceras web, banners, folletos, empaques frontales y catálogos. |
| [`vectores/isologo-horizontal.svg`](vectores/isologo-horizontal.svg) | `0 0 760 220` | `capa-manos`, `capa-corazon-tejido`, `capa-textos` | 158 | Barras de navegación (navbars), firmas de correo, facturación y cintas. |
| [`vectores/isologo-monocromatico.svg`](vectores/isologo-monocromatico.svg) | `0 0 600 660` | `capa-manos`, `capa-corazon-tejido`, `capa-textos` | 165 | Sellos de goma, bolsas kraft, bordado a un tono y grabado en madera. |
| [`vectores/isotipo-aislado.svg`](vectores/isotipo-aislado.svg) | `0 0 512 512` | `capa-manos`, `capa-corazon-tejido` | 156 | Avatar de Instagram (@tejidos.manosdeluz), stickers circulares y etiquetas tejidas. |
| [`vectores/favicon.svg`](vectores/favicon.svg) | `0 0 128 128` | Simbólica web | 45 | Icono para pestaña de navegador y aplicaciones móviles. |

---

## 6. Organización de la Carpeta en Google Drive

La carpeta del proyecto ha sido categorizada profesionalmente para que el equipo y el cliente localicen de inmediato cualquier insumo:

```text
03_MANOS DE LUZ/
├── 01_Insumos_y_Manuales/          # Documentos originales del cliente
│   ├── Manual_Identidad_Visual_Amigurumis-v2 y tipografía.pdf
│   ├── Manual_Paleta_Colores_Amigurumis.pdf
│   ├── Información de la Empresa - Manos de Luz.docx
│   ├── AdobeColor A,IGURUMIS2.ase  # Paleta digital para Photoshop/Illustrator
│   └── AdobeColor-A,IGURUMIS2.jpeg
│
├── 02_Tipografias/                 # Familias tipográficas completas (TTF)
│   ├── Lora/                       # Lora Variable, Bold, Italic, SemiBold
│   └── Nunito/                     # Nunito Variable, Bold, Light, Regular
│
├── vectores/                       # Código vectorial SVG nativo (Illustrator Ready)
│   ├── isologo-principal.svg       # Con Lora Serif Itálica SemiBold (600)
│   ├── isologo-horizontal.svg      # Formato apaisado para navbars
│   ├── isologo-monocromatico.svg   # Versión monocroma para sellos
│   ├── isotipo-aislado.svg         # Símbolo corazón en manos
│   └── favicon.svg                 # Icono web
│
├── index.html                      # Portal interactivo web desplegado en GitHub Pages
├── DESIGN.md                       # Manual de Marca SSOT
└── README.md                       # Resumen ejecutivo y enlaces de entrega
```

---

## 7. Retícula, Proporciones y Área de Seguridad

### Módulo Base $X$
Se define como unidad modular $X$ la altura de la letra mayúscula **"M"** del logotipo principal.
- **Área de Aislamiento:** Todo el imagotipo debe contar con un margen perimetral libre de elementos ajenos de al menos **$1.5X$**.
- **Tamaños Mínimos:**
  - Digital: Isotipo aislado mínimo **16x16px** (Favicon) / **32x32px** (Retina). Isologo principal mínimo **140px** de ancho.
  - Impreso: Sellos de goma mínimo **20 mm** de diámetro; etiquetas de tela bordadas mínimo **30 mm** de ancho.

---

## 8. Directrices de Aplicación Web y Redes Sociales

- **Portal en Vivo:** El cliente puede interactuar con el manual y las variaciones en:  
  [https://dlmediapro.github.io/manos-de-luz/](https://dlmediapro.github.io/manos-de-luz/)
- **Instagram (@tejidos.manosdeluz):** Usar el isotipo aislado dentro del avatar circular. Alternar fotos de amigurumis con luz natural y fondos Crema Algodón (`#F7F4EE`) con tipografía Lora Itálica en Cacao Profundo (`#4A3525`).
- **Botones de Conversión en Web:** Siempre pintar los botones en Terracota Rosado (`#C86D63`) con texto en Crema Algodón (`#F7F4EE`) en **Nunito Bold**, asegurando el área táctil mínima de **44x44px**.
