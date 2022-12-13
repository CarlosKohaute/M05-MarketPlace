import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('MarketPlace')
    .setDescription('MarketPlace aplication')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('Users')
    .addTag('Products')
    .addTag('Categories')
    .addBearerAuth()
    .build();

  const port = process.env.PORT || 3333;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
