import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer-extra';
import * as ReactDOMServer from 'react-dom/server';
import React from 'react';
import * as fs from 'fs';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { join, resolve } from 'path';
import { AppreciationData, Card } from '@acclaimify/ui-components';
import { readFileSync } from 'fs';

@Injectable()
export class CardImageService {
  async generateCardImage(cardData: AppreciationData) {
    puppeteer.use(StealthPlugin());

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1440, // Adjust width to your desired size
      height: 1024, // Adjust height as needed for content
      deviceScaleFactor: 3, // Increase resolution
    });

    // Read the compiled CSS file
    const cssFilePath = getCSSFilePath();
    const styleCSS = readFileSync(cssFilePath, 'utf-8');

    const imagePath = resolve(__dirname, 'assets', 'blur.png');
    const base64Image = getBase64Image(imagePath);

    // Use ReactDOMServer to render the Card component to a static HTML string
    const cardHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Card, { ...cardData, skipBorders: true })
    );
    const fullHtml = `
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <link href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" rel="stylesheet">


          <style>${styleCSS}</style>
        </head>
        <body style="height: min-content;">
          <main style="background-image: url('${base64Image}');" className="grid grid-cols-1 md:grid-cols-min-content-2 grid-rows-min-content items-end justify-items-center content-center justify-center gap-12 w-screen h-screen bg-cover bg-center bg-no-repeat  ">
            ${cardHtml}
          </main>
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

function getCSSFilePath(): string {
  const assetsDir = resolve(__dirname, 'assets');
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find((file) => file.endsWith('.css'));

  if (!cssFile) {
    throw new Error('CSS file not found in assets folder.');
  }

  return join(assetsDir, cssFile);
}

function getBase64Image(filePath: string): string {
  const imageBuffer = readFileSync(filePath);
  return `data:image/png;base64,${imageBuffer.toString('base64')}`;
}
