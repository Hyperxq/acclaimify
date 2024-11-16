/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';

import { AppModule } from './app/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'cloudflare'
  ) {
    app.enableCors({
      origin: [
        'https://applaudify.pages.dev/',
        'https://hyperxq.github.io/acclaimify/',
        'https://hyperxq.github.io',
      ],
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: false,
    });
  } else {
    app.enableCors(); // Enable CORS for all origins in development
  }
  app.setGlobalPrefix(globalPrefix);
  app.use('/assets', express.static(join(__dirname, 'assets')));
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
