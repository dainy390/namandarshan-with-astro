import { test, expect } from '@playwright/test';
import { setupAnomalyDetection } from './helpers/anomaly-detection';

test.describe('Homepage & Navigation', () => {

  test.beforeEach(async ({ page }) => {
    // Mock common API calls on homepage
    await page.route('**/api/pujas', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([])
        });
    });
    await page.route('**/api/prasadams', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([])
        });
    });
    await page.route('**/api/chadhava', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([])
        });
    });
    await page.route('**/api/yatras', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([])
        });
    });
  });

  test('should load homepage successfully and check for anomalies', async ({ page }) => {
    await setupAnomalyDetection(page);
    
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Verify title or some key content
    await expect(page).toHaveTitle(/VIP Temple Darshan Booking in India \| Naman Darshan/);
    
    // Check for broken links
    const links = await page.getByRole('link').all();
    console.log(`Found ${links.length} links on the homepage`);
    
    // Check first few links to ensure navigation works
    if (links.length > 0) {
        const firstLink = links[0];
        const href = await firstLink.getAttribute('href');
        if (href && href.startsWith('/')) {
            console.log(`Verifying first internal link: ${href}`);
            await firstLink.click();
            await expect(page).not.toHaveURL(/error|404/);
        }
    }
  });
});
