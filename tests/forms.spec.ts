import { test, expect } from '@playwright/test';
import { setupAnomalyDetection } from './helpers/anomaly-detection';

test.describe('Form Submissions', () => {

  test.beforeEach(async ({ page }) => {
    // Mock Darshan Details
    await page.route('**/api/darshan/ram-mandir', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          name: "Ayodhya Ram Mandir",
          location: "Ayodhya, Uttar Pradesh",
          description: "The sacred birthplace of Shri Ram.",
          image: "https://example.com/ram-mandir.jpg",
          ctaText: "Book Now"
        })
      });
    });

    // Mock Puja Details
    await page.route('**/api/pujas/sunderkand-path-puja', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: "sunderkand-path-puja",
          title: "Personalized Sunderkand Paath",
          description: "Vedic recitation for protection and peace.",
          location: "Ayodhya",
          image: "https://example.com/sunderkand.jpg",
          duration: "2-3 hours"
        })
      });
    });

    // Mock Prasadam Details
    await page.route('**/api/prasadams/ram-mandir-prasad-prasadam', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: "ram-mandir-ayodhya",
          title: "Ram Mandir Prasad",
          templeName: "Ram Janmabhoomi",
          location: "Ayodhya",
          image: "https://example.com/prasad.jpg",
          description: "Divine blessings from Ayodhya."
        })
      });
    });

    // Mock Chadhava Details
    await page.route('**/api/chadhava/brahmin-panda-seva-chadhava', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: "1",
          name: "Brahmin-Panda Seva",
          templeName: "Moksha Teerth",
          description: "Service at 4 moksha teerth locations.",
          image: "https://example.com/seva.jpg",
          tag: "SPECIAL"
        })
      });
    });

    // Mock List Endpoints for "Related" sections
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

    // Mock POST Submissions
    await page.route('**/api/bookings', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: "Booking created successfully" })
      });
    });

    await page.route('**/api/orders', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: "Order placed successfully" })
      });
    });
  });

  test('Darshan Booking Submission', async ({ page }) => {
    await setupAnomalyDetection(page);
    await page.goto('/darshan/ram-mandir');

    // Click 'Book Now'
    await page.getByRole('button', { name: /Book Now|Request Darshan Assistasnce/i }).first().click();

    // Fill the modal form
    await page.fill('#name', 'Test User');
    await page.fill('#whatsapp', '9876543210');
    await page.fill('#email', 'test@example.com');
    await page.fill('#date', '2026-12-25');
    await page.fill('#request', 'This is a test request');

    // Submit
    await page.getByRole('button', { name: /Confirm Booking/i }).click();

    // Verify Thank You page
    await expect(page).toHaveURL(/\/thank-you/);
    await expect(page.getByText(/Dhanyawad|received with devotion/i).first()).toBeVisible();

    // Click 'Chat Now' to trigger WhatsApp
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.getByRole('button', { name: /Chat Now/i }).click()
    ]);

    expect(newPage.url()).toContain('whatsapp.com');
  });

  test('Puja Booking Submission', async ({ page }) => {
    await setupAnomalyDetection(page);
    await page.goto('/puja/sunderkand-path-puja', { waitUntil: 'domcontentloaded' });

    // Open a booking modal
    await page.getByRole('button', { name: /Book Puja|Book Puja Request|Details & Sankalp|Book Now|Inquiry/i }).first().click();

    // Wait for modal to be visible
    await expect(page.locator('#name')).toBeVisible({ timeout: 10000 });

    // Fill form
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#mobile', '9876543210');
    await page.fill('#date', '2026-12-25');
    await page.fill('#purpose', 'Test Purpose');

    // Submit
    await page.getByRole('button', { name: /Confirm Booking|Confirm Puja Booking|Submit Puja Request/i }).click();

    // Verify Thank You page
    await expect(page).toHaveURL(/\/thank-you/);
    await expect(page.getByText(/Dhanyawad|received with devotion/i).first()).toBeVisible();

    // Click 'Chat Now' to trigger WhatsApp
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.getByRole('button', { name: /Chat Now/i }).click()
    ]);

    expect(newPage.url()).toContain('whatsapp.com');
  });

  test('Prasadam Order Submission', async ({ page }) => {
    await setupAnomalyDetection(page);
    await page.goto('/prasadam/ram-mandir-prasad-prasadam', { waitUntil: 'networkidle', timeout: 30000 });

    // Ensure form is loaded
    await expect(page.locator('#name')).toBeVisible({ timeout: 15000 });

    await page.fill('#name', 'Test User');
    await page.fill('#mobile', '9876543210');
    await page.fill('#email', 'test@example.com');
    await page.fill('#whatsapp', '9876543210');
    await page.locator('#address').fill('123 Test Street, Ayodhya, PIN 123456');

    // Submit
    await page.getByRole('button', { name: /Place Order Now/i }).click();

    // Verify Thank You page
    await expect(page).toHaveURL(/\/thank-you/);
    await expect(page.getByText(/Dhanyawad|received with devotion/i).first()).toBeVisible();

    // Click 'Chat Now' to trigger WhatsApp
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.getByRole('button', { name: /Chat Now/i }).click()
    ]);

    expect(newPage.url()).toContain('whatsapp.com');
  });

  test('Chadhawa Submission', async ({ page }) => {
    await setupAnomalyDetection(page);
    await page.goto('/chadhava/brahmin-panda-seva-chadhava', { waitUntil: 'domcontentloaded' });

    // Wait for page specific button
    await page.getByRole('button', { name: /Book Seva Now|Explore Offerings/i }).first().click();

    // Wait for modal
    await expect(page.locator('#name')).toBeVisible({ timeout: 10000 });

    await page.fill('#name', 'Test User');
    await page.fill('#whatsapp', '9876543210');
    await page.fill('#email', 'test@example.com');
    await page.fill('#gotra', 'Test Gotra');
    await page.locator('#message').fill('Test Chadhawa Message');

    // Submit
    await page.getByRole('button', { name: /CONFIRM BOOKING/i }).click();

    // Verify Thank You page
    await expect(page).toHaveURL(/\/thank-you/);
    await expect(page.getByText(/Dhanyawad|received with devotion/i).first()).toBeVisible();

    // Click 'Chat Now' to trigger WhatsApp
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.getByRole('button', { name: /Chat Now/i }).click()
    ]);

    expect(newPage.url()).toContain('whatsapp.com');
  });
});
