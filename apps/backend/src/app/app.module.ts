import { Module } from '@nestjs/common';

import { CardImageService } from './card-image/card-image.service';
import { CardController } from './card-image/card-image.controller';

@Module({
  imports: [],
  controllers: [CardController],
  providers: [CardImageService],
})
export class AppModule {}
