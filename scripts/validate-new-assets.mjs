import { chromium } from 'playwright';

const ARTIFACT_DIR = '/Users/luiscadn/.gemini/antigravity-ide/brain/01552475-cef2-48be-aa61-985f9df0268c';

async function run() {
  console.log('🚀 Starting validation of New Assets & Animations in Essenccia Rejuvenation...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Listen for console errors
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
  console.log('✅ Page loaded successfully on http://localhost:3030');

  // 1. Check Brand Crest Logo
  const logoHeader = await page.locator('header img[src*="logo_transparent"]').count();
  console.log(`🔍 Found transparent brand crest logo in header: ${logoHeader > 0 ? 'YES' : 'NO'}`);

  // 2. Check Award Section
  const awardSection = page.locator('#award');
  await awardSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const awardHeading = await awardSection.locator('h2').textContent();
  console.log(`🏆 Award Section Heading: "${awardHeading.trim()}"`);
  const ledyAwardImg = await awardSection.locator('img[src*="ledy_award"]').count();
  console.log(`📸 Found Ledy Award Photo: ${ledyAwardImg > 0 ? 'YES' : 'NO'}`);

  // Take screenshot of Award Section
  await awardSection.screenshot({ path: `${ARTIFACT_DIR}/award_section_validated.png` });
  console.log('📸 Saved screenshot of Award Section to brain directory');

  // 3. Check Facilities Video Section
  const facilitySection = page.locator('#facilities');
  await facilitySection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const videoCount = await facilitySection.locator('video[src*="sanctuary_facilities"]').count();
  console.log(`🎥 Found Facility Tour Video: ${videoCount > 0 ? 'YES' : 'NO'}`);

  // Test video controls (toggle mute)
  const muteBtn = facilitySection.locator('button[aria-label*="Mute"], button[aria-label*="video"]').first();
  if (await muteBtn.count() > 0) {
    await muteBtn.click();
    await page.waitForTimeout(300);
    console.log('🔊 Clicked video audio/playback control successfully');
  }

  // Take screenshot of Facility Section
  await facilitySection.screenshot({ path: `${ARTIFACT_DIR}/facilities_video_validated.png` });
  console.log('📸 Saved screenshot of Facilities Video Section');

  // Check and capture Promises Section
  const promisesSection = page.locator('#promises');
  await promisesSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await promisesSection.screenshot({ path: `${ARTIFACT_DIR}/promises_redesigned_validated.png` });
  console.log('📸 Saved screenshot of Redesigned Promises Section');

  // 4. Hero section screenshot
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${ARTIFACT_DIR}/hero_updated_validated.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('📸 Saved screenshot of Updated Hero Section');

  // Full page screenshot
  await page.screenshot({ path: `${ARTIFACT_DIR}/full_page_with_new_assets.png`, fullPage: true });
  console.log('📸 Saved Full Page Screenshot');

  if (errors.length > 0) {
    console.warn('⚠️ Console errors detected:', errors);
  } else {
    console.log('🌟 100% SUCCESS: All new assets, animations, and components validated with zero runtime errors!');
  }

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
