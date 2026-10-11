import { chromium } from 'playwright';

const ARTIFACT_DIR = '/Users/luiscadn/.gemini/antigravity-ide/brain/01552475-cef2-48be-aa61-985f9df0268c';

async function run() {
  console.log('🚀 Validating treatment menu and boutique unique images...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Capture Treatment Menu (Facial)
  const treatmentsSection = page.locator('#treatments');
  await treatmentsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await treatmentsSection.screenshot({
    path: `${ARTIFACT_DIR}/treatments_menu_facial_validated.png`,
  });
  console.log('📸 Captured #treatments (Facial)');

  // 2. Click "Corporal" tab and capture
  const corporalTab = page.locator('#tab-body');
  if (await corporalTab.isVisible()) {
    await corporalTab.click();
    await page.waitForTimeout(600);
    await treatmentsSection.screenshot({
      path: `${ARTIFACT_DIR}/treatments_menu_corporal_validated.png`,
    });
    console.log('📸 Captured #treatments (Corporal)');
  }

  // 3. Click "Bienestar" tab and capture
  const wellnessTab = page.locator('#tab-wellness');
  if (await wellnessTab.isVisible()) {
    await wellnessTab.click();
    await page.waitForTimeout(600);
    await treatmentsSection.screenshot({
      path: `${ARTIFACT_DIR}/treatments_menu_wellness_validated.png`,
    });
    console.log('📸 Captured #treatments (Bienestar)');
  }

  // 4. Capture Boutique / Skincare Apothecary
  const boutiqueSection = page.locator('#boutique');
  await boutiqueSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await boutiqueSection.screenshot({
    path: `${ARTIFACT_DIR}/boutique_apothecary_validated.png`,
  });
  console.log('📸 Captured #boutique (Clinical formulations)');

  await browser.close();
  console.log('🌟 Image validation complete!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
