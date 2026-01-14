import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // отримуємо доступ до ConfigService
  const configService = app.get(ConfigService);
  // читаємо порт із конфігурації
  const port = configService.get<number>('PORT') ?? 7000;

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);

}
bootstrap();
