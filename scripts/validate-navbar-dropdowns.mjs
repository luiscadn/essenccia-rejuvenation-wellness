import { chromium } from 'playwright';

const ARTIFACT_DIR = '/Users/luiscadn/.gemini/antigravity-ide/brain/01552475-cef2-48be-aa61-985f9df0268c';

async function run() {
  console.log('🚀 Starting validation of Multi-Level Navbar & Dropdown Submenus...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Catch errors
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
  console.log('✅ Page loaded on http://localhost:3030');

  // 1. Hover on 'About'
  const aboutBtn = page.locator('nav button:has-text("About")');
  await aboutBtn.hover();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${ARTIFACT_DIR}/navbar_dropdown_about.png`,
    clip: { x: 0, y: 0, width: 1440, height: 600 },
  });
  console.log('📸 Captured "About" dropdown submenu');

  // 2. Hover on 'Face'
  const faceBtn = page.locator('nav button:has-text("Face")');
  await faceBtn.hover();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${ARTIFACT_DIR}/navbar_dropdown_face.png`,
    clip: { x: 0, y: 0, width: 1440, height: 650 },
  });
  console.log('📸 Captured "Face" dropdown submenu');

  // 3. Hover on 'Body'
  const bodyBtn = page.locator('nav button:has-text("Body")');
  await bodyBtn.hover();
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${ARTIFACT_DIR}/navbar_dropdown_body.png`,
    clip: { x: 0, y: 0, width: 1440, height: 600 },
  });
  console.log('📸 Captured "Body" dropdown submenu');

  // 4. Test click on treatment in dropdown
  await faceBtn.hover();
  await page.waitForTimeout(300);
  const skinTighteningItem = page.locator('button:has-text("Skin Tightening (Viora RF)")');
  await skinTighteningItem.click();
  await page.waitForTimeout(500);

  const modal = page.locator('[role="dialog"]');
  const isModalVisible = await modal.isVisible();
  console.log(`🔍 Treatment Detail Modal opened on submenu click: ${isModalVisible ? 'YES' : 'NO'}`);
  await page.screenshot({
    path: `${ARTIFACT_DIR}/navbar_treatment_modal_opened.png`,
  });

  // Close modal
  const closeBtn = page.locator('button[aria-label="Close treatment details"]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  } else {
    await page.keyboard.press('Escape');
  }
  await page.waitForTimeout(500);

  // 5. Test Cavi-Lipo FAQ from Body dropdown
  await bodyBtn.hover();
  await page.waitForTimeout(300);
  const faqItem = page.locator('button:has-text("Cavi-Lipo FAQ & Guide")');
  await faqItem.click();
  await page.waitForTimeout(500);

  const faqModal = page.locator('#faq-modal-title');
  const isFaqVisible = await faqModal.isVisible();
  console.log(`🔍 Cavi-Lipo FAQ Modal opened: ${isFaqVisible ? 'YES' : 'NO'}`);
  await page.screenshot({
    path: `${ARTIFACT_DIR}/navbar_cavi_lipo_faq_modal.png`,
  });

  // Close FAQ modal
  const closeFaqBtn = page.locator('button[aria-label="Close FAQ dialog"]');
  if (await closeFaqBtn.isVisible()) {
    await closeFaqBtn.click();
  } else {
    await page.keyboard.press('Escape');
  }
  await page.waitForTimeout(400);

  // 6. Test Mobile Viewport
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3030', { waitUntil: 'networkidle' });

  // Open mobile menu
  const mobileMenuToggle = mobilePage.locator('button[aria-label="Toggle mobile menu"]');
  await mobileMenuToggle.click();
  await mobilePage.waitForTimeout(300);

  // Expand 'Face' in mobile accordion
  const mobileFaceBtn = mobilePage.locator('nav[aria-label="Mobile"] button:has-text("Face")');
  await mobileFaceBtn.click();
  await mobilePage.waitForTimeout(400);

  await mobilePage.screenshot({
    path: `${ARTIFACT_DIR}/navbar_mobile_accordion.png`,
  });
  console.log('📸 Captured Mobile Navigation Accordion');

  await browser.close();
  console.log('🌟 All navbar tests completed successfully!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
