import { Page, expect } from '@playwright/test';

export async function setupAnomalyDetection(page: Page) {
  const consoleErrors: string[] = [];
  const failedResponses: string[] = [];

  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Listen for failed API responses (4xx or 5xx)
  page.on('response', response => {
    const status = response.status();
    if (status >= 400) {
        failedResponses.push(`Failed response: ${status} ${response.url()}`);
    }
  });

  return {
    getErrors: () => consoleErrors,
    getFailedResponses: () => failedResponses,
    verifyNoAnomalies: () => {
      expect(consoleErrors, `Found console errors: ${consoleErrors.join(', ')}`).toHaveLength(0);
      expect(failedResponses, `Found failed responses: ${failedResponses.join(', ')}`).toHaveLength(0);
    }
  };
}
