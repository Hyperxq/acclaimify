import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CardImageService } from './card-image.service';
import { AppreciationData } from '@acclaimify/ui-components';

@Controller('cards')
export class CardController {
  constructor(private readonly cardImageService: CardImageService) {}

  @Post('generate')
  async generateCardImage(
    @Body() cardData: AppreciationData,
    @Res() res: Response
  ) {
    try {
      // Generate the card image buffer
      const imageBuffer = await this.cardImageService.generateCardImage(
        cardData
      );

      // Set headers to specify binary content type
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Disposition', 'attachment; filename="card.png"');
      res.setHeader('Content-Length', imageBuffer.length.toString());

      // Send the image buffer as the response using res.end()
      res.end(imageBuffer); // Use end() to send raw binary data
    } catch (error) {
      console.error('Error generating image:', error);
      throw new HttpException(
        'Error generating image',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
