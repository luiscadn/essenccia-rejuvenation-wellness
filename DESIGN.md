# ESSENCCIA REJUVENATION & WELLNESS — DESIGN SYSTEM & ARCHITECTURE (PEGASUS CLINIC REDESIGN)

> **Design Read**: Rediseño editorial de alta gama estética médica para **Essenccia Rejuvenation & Wellness** (Westport, Connecticut), orquestado con **Claude Code (Sonnet 5.5)** y validado con **Playwright CLI**. Réplica exacta de la dirección de arte, calma arquitectónica y estructura de **Pegasus Clinic** (https://pegasus-clinic.com/) integrada con la boutique y carrito lateral con upselling de **Stem Beauty** (https://stembeauty.com/).

---

## 1. Tipografía Editorial High-Ticket
- **Títulos y Cabeceras Display (Únicamente Serifados)**:
  - Familia: `Cormorant Garamond` (pesos 300 / 400 italic / 500)
  - Estilo: Clásico editorial, cursivas para conceptos poéticos y términos biológicos.
- **Cuerpo, Navegación, Badges, Botones y Precios (Editorial Sans)**:
  - Familia: `Plus Jakarta Sans`
  - Tracking: `tracking-[0.12em]` a `tracking-[0.2em]` con mayúsculas refinadas en microencabezados.
  - Interlineado: Amplio y espacioso (`leading-relaxed` / `leading-loose`).
  - Precios y Duraciones: `font-variant-numeric: tabular-nums`.

---

## 2. Paleta de Colores Extraída de Pegasus Clinic
- **Color Primario (Índigo Pizarra Clínico)**: `#484774`
- **Color Secundario (Azul Suave Calmante)**: `#739cd2`
- **Color Acento Muted (Lavanda Pizarra)**: `#a2a1ba`
- **Fondo Base (Piedra Caliza & Travertino Natural)**: `#f7f7f4` y `#f0efec`
- **Superficie de Tarjetas**: `#ffffff` con sutiles bordes `border-[#484774]/10`
- **Acento Dorado / Ocre**: `#d7a761`
- **Color Texto Primario**: `#484774`
- **Color Texto Secundario**: `#5c6c84`

---

## 3. Estructura de 12 Secciones (Idéntica a Pegasus Clinic + Stem Beauty)
1. **Header Fijo de Lujo (`Navbar.tsx`)**: Barra superior en Westport CT, horario 9:00 - 16:00, teléfono `(203) 486-8989`, contador de bolsa y botón de reserva en `#484774`.
2. **Hero Editorial Asimétrico (`Hero.tsx`)**: Titular serif *"Awaken your true essence through clinical regenerative science"*, badges de 23+ años y Westport CT.
3. **Cinta de Novedades (`NewsTicker.tsx`)**: Fecha + etiqueta clínica + actualización estacional.
4. **Mensaje & Filosofía (`PhilosophySection.tsx`)**: Declaración sobre el envejecimiento celular y la restauración natural sin bisturí.
5. **Perfil de la Directora (`DirectorProfile.tsx`)**: Fotografía real de Ledy (`/fotos_webp/ledy_founder.webp`), 23+ años de trayectoria y formación médica estética en Colombia.
6. **Cuatro Promesas en la Consulta (`PromisesSection.tsx`)**: Tiempo sin prisa, explicación clara sin jerga técnica, alternativas a tu medida y cero presión comercial.
7. **Tres Razones de Elección (`ReasonsSection.tsx`)**: 23+ años de experiencia, certificaciones colombo-estadounidenses y tecnología no invasiva de última generación.
8. **Tres Tratamientos Recomendados para Primera Visita (`RecommendedSection.tsx`)**: Rezenerate Nano-Needling, Cavi-Lipo y Viora RF con fotos reales.
9. **Menú Clínico Completo Categorizado (`TreatmentsSection.tsx`)**: Pestañas Facial, Corporal y Bienestar con duraciones, precios reales y modal de ciencia.
10. **Casos Reales Antes y Después (`BeforeAfterSection.tsx`)**: Fotografías reales de la clínica (`/fotos_webp/before_after_*.webp`).
11. **Boutique & Carrito Lateral Dinámico (`MarketplaceSection.tsx` & `CartDrawer.tsx`)**:
    - Fórmulas clínicas de boticario (Stem Beauty).
    - Barra interactiva de envío gratis ($150 target).
    - Módulo de upselling en 1 clic (Bruma celular, Gua Sha de jade Xiuyan, mascarillas de colágeno).
    - Cupones de descuento (`ESSENCCIA10`).
12. **Reserva de Consulta & Ubicación (`BookingModal.tsx`, `LocationSection.tsx`, `Footer.tsx`)**:
    - Modal de reserva con selector de fecha, hora y llamada directa a Ledy.
    - Dirección física en 25 Sylvan Road South, Suite A, Westport, CT.

---

## 4. Auditoría Automatizada con Playwright CLI
- `node scripts/validate-pegasus-style.mjs`
- **Resultados**: 100% aprobado, 0 errores de consola, tipografía auditada en tiempo real.
