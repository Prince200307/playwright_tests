import { Page, TestInfo } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

function getProjectName(context: { options?: () => { viewport?: { width?: number; height?: number } } } | null): string {
  if (!context || !context.options) return 'Mobile-Chrome';
  
  const opts = context.options();
  const viewport = opts.viewport;
  
  if (!viewport) return 'Mobile-Chrome';
  const width = viewport.width;
  if (width === 390 || width === 844) return 'Mobile-Safari';
  return 'Mobile-Chrome';
}

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function captureTestScreenshot(page: Page, testInfo: TestInfo): Promise<void> {
  try {
    const context = page.context();
    const projectName = getProjectName(context);
    const dir = `test-screenshots/${projectName}`;
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const testIdMatch = testInfo.title.match(/^(TC\d+)/);
    const testId = testIdMatch ? testIdMatch[1] : 'unknown';
    const status = testInfo.status === 'passed' ? 'passed' : 'failed';
    const filename = `${testId}-${sanitizeFilename(testInfo.title)}-${status}.png`;
    const filepath = path.join(dir, filename);
    
    await page.screenshot({ path: filepath, fullPage: true });
    console.log(`[Screenshot] Saved: ${filepath}`);
  } catch (error) {
    console.error('[Screenshot] Failed to capture:', error);
  }
}
