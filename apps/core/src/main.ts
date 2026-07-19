import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '#app.module';
import { config } from '#config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(await AppModule.register());
  await app.listen(config.port);
}

void bootstrap();
