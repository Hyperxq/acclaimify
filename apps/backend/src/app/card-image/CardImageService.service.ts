import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as ReactDOMServer from 'react-dom/server';
import React from 'react';
import { AppreciationData, Card } from '@applaudify/ui-components';

@Injectable()
export class CardImageService {
  async generateCardImage(cardData: AppreciationData): Promise<Buffer> {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    // Use ReactDOMServer to render the Card component to a static HTML string
    const cardHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Card, cardData)
    );

    const fullHtml = `
      <html>
        <head>
          <style>
            /* Add global styles here if needed */
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          </style>
        </head>
        <body>
          ${cardHtml}
        </body>
      </html>
    `;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });

    // Get screenshot as Uint8Array, then convert to Buffer
    const screenshotUint8Array = await page.screenshot({ type: 'png' });
    const screenshotBuffer = Buffer.from(screenshotUint8Array);

    await browser.close();
    return screenshotBuffer;
  }
}
