# INSTRUCCIÓN PARA CLAUDE CODE: REDISEÑO DE NAVBAR CON SUBMENÚS HOVER Y ARQUITECTURA MULTI-NIVEL

## CONTEXTO Y MISIÓN
El cliente desea que el navbar deje de parecer una "landing page simple" de una sola página y recupere la rica arquitectura de información que tenía la web original de Wix de **Essenccia Rejuvenation & Wellness** (disponible en `old-website/contexto_negocio.md`), pero con una **dirección de arte y experiencia de usuario editorial de alto nivel (estilo pegasus-clinic.com y stembeauty.com)**.

Al hacer hover sobre los enlaces de navegación, debe desplegarse un submenú flotante elegante con animaciones suaves, micro-interacciones y enlaces directos a los tratamientos, secciones y preguntas frecuentes.

## ESTRUCTURA DEL MENÚ (COMO EN LA WEB ORIGINAL)
1. **HOME** (`#top`)
2. **ABOUT** (Dropdown Hover):
   - **About Ledy** (`#director`) - 23+ años de maestría clínica en Colombia y EE.UU.
   - **Your Spa Experience** (`#facilities`) - Tour por la suite privada en Westport.
   - **Before & After** (`#results`) - Casos clínicos y transformaciones reales.
   - **Client Reviews** (`#reviews`) - Calificación 5.0 y galardón Day Spa 2026.
   - **Our Commitments** (`#promises`) - Las 4 promesas de cada consulta.
   - **Privacy & Spa Policies** (Abre modal de políticas y cancelaciones).
3. **FACE** (Dropdown Hover de Servicios Faciales):
   - **Skin Tightening (Viora RF)** - Radiofrecuencia facial y tensado de cuello.
   - **Jawline Sculpt & Lift** - Definición de mandíbula y papada.
   - **Nanocell Renewal (Rezenerate)** - Nano-infusión celular sin agujas.
   - **Skin Nutrient Infusion** - Electro-mesoterapia con péptidos.
   - **Diamond Microdermabrasion** - Exfoliación médica con punta de diamante.
   - **Advanced Deep Pore Renewal** - Limpieza profunda e hidro-purificación.
   - **PRX-T33 Biorevitalization** - Bioestimulación dérmica sin descamación.
4. **BODY** (Dropdown Hover de Servicios Corporales):
   - **Ultrasound Cavi-Lipo** - Reducción de grasa localizada por cavitación.
   - **Fat Reduction & Cellulite** - Remodelación corporal y celulitis.
   - **Muscle Tone & Firming** - Tonificación y tensado de tejidos.
   - **Cavi-Lipo FAQ & Guide** (Abre modal interactivo con el FAQ completo del archivo `old-website/cavi-lipo-faq-s.html`).
5. **WELLNESS** (Dropdown Hover de Terapias de Bienestar):
   - **Molecular Hydrogen & LED** - Inhalación de hidrógeno y fototerapia celular.
   - **PEMF Magnetic Field Therapy** - Recarga de potencial bioeléctrico.
   - **Microcurrent Cellular Care** - Drenaje linfático y microcorrientes.
6. **BOUTIQUE** (`#boutique` - Productos dermatológicos y mascarillas de colágeno).
7. **CONTACT US** (`#location` - 25 Sylvan Rd South, Suite A, Westport, CT).

## ACCIONES CLAVE AL HACER CLIC EN UN TRATAMIENTO:
Para no saturar la página de inicio, al hacer clic en cualquier tratamiento del submenú (`Skin Tightening`, `Cavi-Lipo`, `Rezenerate`, etc.):
- Se abre directamente el **TreatmentDetailModal** con la información clínica detallada, beneficios, duración, tecnología y botón de reserva inmediata.
- Para **Cavi-Lipo FAQ** y **Privacy Policy**, se abren modales dedicados de alta gama con el texto enriquecido de la web original.

## DIRECTRICES DE DISEÑO Y AESTHETICS (ESTRICTAS):
- **Cero cajas cuadradas o rígidas**: Todo debe usar esquinas suaves redondeadas (`rounded-2xl`, `rounded-3xl`, `rounded-full`).
- **Dropdowns flotantes de lujo**: Fondo `bg-white/95 backdrop-blur-md border border-[#484774]/10 shadow-[0_25px_50px_-15px_rgba(72,71,116,0.15)]`, con retraso de salida (`leaveDelay`) para evitar que se cierren abruptamente.
- **Micro-animaciones con Framer Motion**: `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}`.
- **Tipografía**: Títulos en Cormorant Garamond serif elegante y etiquetas en Plus Jakarta Sans con mayúsculas y tracking amplio (`tracking-[0.16em]`).
- **Versión Móvil**: Menú acordeón deslizable que permite abrir y cerrar cada categoría con toque suave.

## ARCHIVOS A MODIFICAR O CREAR:
1. `src/components/Navbar.tsx`: Implementar el nuevo navbar con mega-menús / dropdowns interactivos al hacer hover y menú móvil acordeón.
2. `src/components/CaviLipoFaqModal.tsx`: Modal interactivo con el FAQ de Cavi-Lipo del archivo original.
3. `src/components/PolicyModal.tsx`: Modal con las políticas de reserva y spa.
4. `src/data/clinic-data.ts`: Asegurar que todos los tratamientos y textos de la web original estén registrados y disponibles.
5. `src/app/page.tsx`: Conectar los modales de tratamientos, Cavi-Lipo FAQ y políticas al Navbar.

Ejecuta el código directamente, verifica que compile con `npm run build` y no dejes errores de TypeScript o linter.
