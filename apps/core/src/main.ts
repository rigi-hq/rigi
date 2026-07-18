import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(await AppModule.register());
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
