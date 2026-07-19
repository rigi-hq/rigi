import { type DynamicModule, Module } from '@nestjs/common';
import { createAdminModule } from '#admin/admin.module';
import { HealthModule } from '#health/health.module';
import { PrismaService } from '#prisma/prisma.service';

@Module({})
// biome-ignore lint/complexity/noStaticOnlyClass: NestJS's DynamicModule convention (ConfigModule.forRoot(), etc.) — register() must be static so main.ts can await it before the module exists.
export class AppModule {
  static async register(): Promise<DynamicModule> {
    const adminModule = await createAdminModule();

    return {
      module: AppModule,
      imports: [adminModule, HealthModule],
      providers: [PrismaService],
    };
  }
}
