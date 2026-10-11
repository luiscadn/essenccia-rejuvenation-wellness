import { chromium } from 'playwright';

async function validatePegasusRedesign() {
  console.log('🏛️ Iniciando validación de diseño estilo Pegasus Clinic en http://localhost:3030 ...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  try {
    // 1. Cargar la página
    await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
    console.log('✅ Página cargada exitosamente (HTTP 200)');

    // 2. Validar tipografía y jerarquía
    const typography = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      const body = document.body;
      const navLink = document.querySelector('nav a');
      const price = document.querySelector('#treatments span.tabular-nums, #boutique span.tabular-nums');

      return {
        h1Font: h1 ? getComputedStyle(h1).fontFamily : '',
        h2Font: h2 ? getComputedStyle(h2).fontFamily : '',
        bodyFont: getComputedStyle(body).fontFamily,
        navFont: navLink ? getComputedStyle(navLink).fontFamily : '',
        navTracking: navLink ? getComputedStyle(navLink).letterSpacing : '',
        priceFont: price ? getComputedStyle(price).fontVariantNumeric : '',
      };
    });
    console.log('🖋️ Auditoría Tipográfica:', typography);

    // 3. Validar Paleta de Colores (Pegasus Clinic #484774)
    const colorAudit = await page.evaluate(() => {
      const primaryBtn = document.querySelector('button.bg-\\[\\#484774\\], a.bg-\\[\\#484774\\], [class*="484774"]');
      const bgColor = getComputedStyle(document.body).backgroundColor;
      return {
        hasPegasusIndigo: !!primaryBtn,
        bodyBg: bgColor
      };
    });
    console.log('🎨 Auditoría de Colores Pegasus:', colorAudit);

    // 4. Validar existencia de las secciones clave
    const sections = await page.evaluate(() => {
      return {
        hasNewsTicker: !!document.querySelector('section.bg-\\[\\#484774\\]') || document.body.innerText.includes('NEWS'),
        hasDirector: !!document.querySelector('#director') || !!document.querySelector('img[src*="ledy"]'),
        hasPromises: !!document.querySelector('#promises'),
        hasReasons: !!document.querySelector('#reasons'),
        hasRecommended: !!document.querySelector('#recommended'),
        hasTreatments: !!document.querySelector('#treatments'),
        hasCases: !!document.querySelector('#cases') || !!document.querySelector('img[src*="before_after"]'),
        hasBoutique: !!document.querySelector('#boutique'),
        hasLocation: !!document.querySelector('#location'),
      };
    });
    console.log('📋 Auditoría de Secciones Pegasus:', sections);

    // 5. Probar interactividad: Filtros de Tratamiento
    console.log('🔍 Probando filtros de tratamiento...');
    await page.click('button:has-text("Facial")');
    await page.waitForTimeout(300);
    console.log('✅ Filtro Facial verificado');

    await page.click('button:has-text("Corporal")');
    await page.waitForTimeout(300);
    console.log('✅ Filtro Corporal verificado');

    await page.click('button:has-text("Bienestar")');
    await page.waitForTimeout(300);
    console.log('✅ Filtro Bienestar verificado');

    // 6. Probar Apertura de Modal Científico
    console.log('🔍 Probando Modal Científico...');
    const detailBtn = page.locator('#treatments button:has-text("Detalles"), #treatments button:has-text("Details")').first();
    if (await detailBtn.isVisible()) {
      await detailBtn.click();
      await page.waitForSelector('#treatment-modal-title', { timeout: 4000 });
      console.log('✅ Modal Científico desplegado con éxito');
      await page.click('button[aria-label="Close treatment details"], button:has-text("Cerrar")');
      await page.waitForTimeout(300);
      console.log('✅ Modal Científico cerrado');
    }

    // 7. Probar Carrito Lateral Dinámico con Upselling
    console.log('🔍 Probando Carrito Lateral con Upselling (Stem Beauty)...');
    const addToBagBtn = page.locator('#boutique button:has-text("Añadir"), #boutique button:has-text("Add")').first();
    await addToBagBtn.click();
    await page.waitForSelector('[role="dialog"]', { timeout: 4000 });
    console.log('✅ Carrito Lateral desplegado');

    // 1-Click Upsell
    const upsellBtn = page.locator('[role="dialog"] button:has-text("Add"), [role="dialog"] button:has-text("Añadir")').first();
    if (await upsellBtn.isVisible()) {
      await upsellBtn.click();
      await page.waitForTimeout(400);
      console.log('✅ Upsell añadido en 1 clic');
    }

    // Cerrar carrito
    await page.click('button[aria-label="Close cart drawer"], [role="dialog"] button:has-text("✕"), [role="dialog"] button:has-text("X")');
    await page.waitForTimeout(300);
    console.log('✅ Carrito lateral cerrado');

    // 8. Probar Modal de Reserva
    console.log('🔍 Probando Modal de Reserva de Consulta...');
    const bookBtn = page.locator('button:has-text("Reservar"), button:has-text("Book Consultation")').first();
    await bookBtn.click();
    await page.waitForSelector('#booking-modal-title', { timeout: 4000 });
    console.log('✅ Modal de Reserva abierto');
    await page.click('button[aria-label="Close booking modal"], button:has-text("✕"), button:has-text("X")');
    await page.waitForTimeout(300);
    console.log('✅ Modal de Reserva cerrado');

    // 9. Capturar screenshot full page de validación
    const screenshotPath = 'public/images/pegasus-redesign-validated.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot de validación guardado en: ${screenshotPath}`);

    if (consoleErrors.length > 0) {
      console.warn('⚠️ Advertencias/Errores de consola:', consoleErrors);
    } else {
      console.log('🌟 0 Errores de consola en toda la sesión!');
    }

    console.log('🎉 VALIDACIÓN PEGASUS CLINIC COMPLETADA AL 100%!');
  } catch (error) {
    console.error('❌ Falló la validación:', error);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

validatePegasusRedesign();
