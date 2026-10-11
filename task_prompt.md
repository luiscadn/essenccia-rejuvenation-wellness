# INSTRUCCIÓN DE REDISEÑO PARA CLAUDE CODE (SONNET 5.5)

Eres el diseñador y desarrollador frontend líder de clase mundial. Tu misión es transformar completamente el sitio web de **Essenccia Rejuvenation & Wellness** para que replique con fidelidad absoluta la dirección de arte, sofisticación y arquitectura de **PEGASUS CLINIC** (https://pegasus-clinic.com/) combinada con el marketplace y carrito lateral interactivo de **STEM BEAUTY** (https://stembeauty.com/).

## ⚠️ DIRECTIVAS DE DISEÑO ESTRICTAS (ANTI-GENÉRICO):
1. **NO HAGAS UN DISEÑO GENÉRICO DE PLANTILLA.** La versión anterior era genérica y aburrida. Esta versión debe sentirse como un estudio creativo de lujo japonés-europeo de alta gama médica.
2. **TIPOGRAFÍA:**
   - **TÍTULOS Y CABECERAS DISPLAY ÚNICAMENTE:** `Cormorant Garamond` (serif editorial clásico, tracking elegante, cursivas poéticas para términos clave).
   - **TODO LO DEMÁS (Cuerpo, Navegación, Badges, Botones, Precios, Duraciones):** `Plus Jakarta Sans` con tracking espaciado (`tracking-[0.1em]` a `tracking-[0.2em]`), `uppercase` en microtítulos, interlineado amplio y generoso (`leading-relaxed` / `leading-loose`), números en `tabular-nums`.
3. **PALETA DE COLORES EXACTA DE PEGASUS CLINIC:**
   - Color Primario: `#484774` (Índigo Pizarra Profundo - elegante, clínico, de lujo)
   - Color Secundario: `#739cd2` (Azul Suave Calmante)
   - Color Acento Muted: `#a2a1ba` (Lavanda Pizarra Sutil)
   - Color Fondo Principal: `#f7f7f4` y `#f0efec` (Piedra Caliza y Travertino Natural)
   - Color Tarjetas: `#ffffff` con bordes finos `border-[#484774]/10` o `border-[#a2a1ba]/20`
   - Acento Dorado/Ocre: `#d7a761`
   - Color Texto Principal: `#484774`
   - Color Texto Secundario: `#5c6c84`
4. **FOTOS REALES YA CONVERTIDAS A WEBP:**
   En `public/fotos_webp/` tienes todas las fotos reales de la clínica y de Ledy listas:
   - `public/fotos_webp/ledy_founder.webp` (Foto real de Ledy)
   - `public/fotos_webp/logo.webp` (Logo original de Essenccia)
   - `public/fotos_webp/cavi_lipo.webp` (Equipo y tratamiento Cavi-Lipo)
   - `public/fotos_webp/rf_tightening.webp` (Radiofrecuencia Viora)
   - `public/fotos_webp/rezenerate.webp` (Tratamiento Rezenerate Nano-Needling)
   - `public/fotos_webp/body_sculpt.webp` (Escultura corporal)
   - `public/fotos_webp/hydroveil.webp` (Terapia de Hidrógeno)
   - `public/fotos_webp/before_after_1.webp` hasta `before_after_6.webp` (Fotos reales de Antes y Después)
   - También cuentas con las fotos editoriales en `public/images/hero-clinic.jpg`, `products-line.jpg`, `ledy-treatment.jpg`.

## ESTRUCTURA DE SECCIONES (IDÉNTICA A PEGASUS CLINIC):
1. **Header Fijo de Lujo (`Navbar.tsx`)**:
   - Barra superior con aviso en Westport CT, horario y teléfono `(203) 486-8989`.
   - Menú de navegación principal con tipografía espaciada, botón de bolsa/carrito con contador dinámico y botón destacado de reserva en `#484774`.
2. **Hero Editorial (`Hero.tsx`)**:
   - Asimetría arquitectónica inspirada en Pegasus Clinic. Titular serif: *"Awaken your true essence through clinical regenerative science"*.
   - Acentos tipográficos, badges de Westport y 23+ años de experiencia.
   - Grid visual con fotografía de alta gama y acceso directo a reserva.
3. **Cinta de Noticias / Novedades (`NewsTicker.tsx` o en Hero)**:
   - Estilo Pegasus Clinic: Fecha + Tag + Noticia clínica elegante.
4. **Mensaje & Filosofía de la Clínica (`PhilosophySection.tsx`)**:
   - "Message: We believe beauty maintenance should be accessible, comforting, and deeply transformative."
   - Gran titular serif y subtítulos espaciados.
5. **Perfil de la Directora / Ledy (`DirectorProfile.tsx`)**:
   - Foto real de Ledy (`/fotos_webp/ledy_founder.webp`).
   - 23+ años de experiencia, credenciales médicas en Colombia, enfoque holístico e individualizado.
6. **Promesas en la Consulta (`PromisesSection.tsx`)**:
   - Las 4 promesas de Pegasus Clinic: Tiempo sin prisa, Explicación clara sin jerga médica compleja, Opciones adaptadas a tu estilo de vida, Sin presión ni ventas forzadas.
7. **3 Razones por las que eligen Essenccia (`ReasonsSection.tsx`)**:
   - `01. 23+ Años de Maestría Clínica`
   - `02. Certificaciones Médicas en Colombia y EE.UU.`
   - `03. Tecnología Médica de Nueva Generación (Viora RF, Cavi-Lipo, Rezenerate, PRX-T33)`
8. **3 Tratamientos Recomendados para Primera Vez (`RecommendedSection.tsx`)**:
   - Rezenerate Nano-Needling, Cavi-Lipo Cavitación y Viora RF Lift. Con fotos reales y badges.
9. **Menú Clínico Completo por Necesidad (`TreatmentsSection.tsx`)**:
   - Pestañas interactivas (Facial, Corporal, Bienestar).
   - Cada tarjeta con duración, precio exacto, beneficios y botón para abrir el modal científico.
10. **Galería de Casos Reales Antes y Después (`BeforeAfterSection.tsx`)**:
    - Usando las fotos reales `/fotos_webp/before_after_1.webp` a `before_after_6.webp`.
    - Nombre del tratamiento, objetivo clínico y resultados.
11. **Boutique de Cuidado de la Piel & Carrito con Upselling (`MarketplaceSection.tsx` & `CartDrawer.tsx`)**:
    - Estilo Stem Beauty: Productos de boticario minimalista, calificación de estrellas, ingredientes clave.
    - Carrito lateral interactivo (`CartDrawer`) con:
      - Barra de progreso interactiva para envío gratis ($150 target).
      - Módulo de Upselling en 1 Clic con productos recomendados.
      - Cupones de descuento (soporte para `ESSENCCIA10`).
      - Controles de cantidad (+ / - / eliminar) en `tabular-nums`.
12. **Reserva de Consulta & Ubicación (`BookingModal.tsx`, `LocationSection.tsx`, `Footer.tsx`)**:
    - Modal de cita con selector de fecha, horario, tratamiento y llamada/texto directo a Ledy.
    - Horarios, dirección en Westport CT y pie de página editorial con newsletter.

Implementa todos los cambios necesarios en `src/components/`, `src/app/page.tsx`, `src/app/globals.css`, y verifica que `npm run build` compile limpiamente.
