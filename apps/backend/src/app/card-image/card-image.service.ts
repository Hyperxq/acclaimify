import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer-extra';
import * as ReactDOMServer from 'react-dom/server';
import React from 'react';
import { AppreciationData, Card } from '@applaudify/ui-components';
import * as fs from 'fs';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

@Injectable()
export class CardImageService {
  async generateCardImage(cardData: AppreciationData) {
    puppeteer.use(StealthPlugin());

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 975, // Adjust width to your desired size
      height: 696, // Adjust height as needed for content
      deviceScaleFactor: 2, // Increase resolution
    });

    // Use ReactDOMServer to render the Card component to a static HTML string
    const cardHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Card, cardData)
    );

    const styleCSS = fs.readFileSync('dist/ui-components/style.css', 'utf8');

    const fullHtml = `
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <link href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" rel="stylesheet">
           <style>${styleCSS}</style>
          <style>
            #card {
              margin: 0 auto;
              min-width: 800px; /* Ensure a minimum width */
            }
          </style>
        </head>
        <body style="height: min-content;">
          ${cardHtml}

          <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.js"></script>

        </body>
      </html>
    `;

    fs.writeFileSync('debug.html', fullHtml);

    try {
      await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
      await page.waitForSelector('#card');

      const cardElement = await page.$('#card');
      if (!cardElement) throw new Error('Card element not found');

      const boundingBox = await cardElement.boundingBox();
      let screenshotBuffer;

      if (boundingBox) {
        screenshotBuffer = await page.screenshot({
          clip: {
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.width,
            height: boundingBox.height,
          },
          type: 'png',
        });
      } else {
        screenshotBuffer = await page.screenshot({ fullPage: true });
      }

      await browser.close();
      return screenshotBuffer;
    } catch (error) {
      console.error('Error in generateCardImage:', error);
      await browser.close();
      throw error;
    }
  }
}
