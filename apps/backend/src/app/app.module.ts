import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardImageService } from './card-image/card-image.service';
import { CardController } from './card-image/card-image.controller';

@Module({
  imports: [],
  controllers: [AppController, CardController],
  providers: [AppService, CardImageService],
})
export class AppModule {}
