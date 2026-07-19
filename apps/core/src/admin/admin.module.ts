import { AdminModule as AdminJsModule } from '@adminjs/nestjs';
import { Adapter, Database, Resource } from '@adminjs/sql';
import type { DynamicModule } from '@nestjs/common';
// biome-ignore lint/style/useNamingConvention: AdminJS is the library's exported name
import AdminJS from 'adminjs';
import { config } from '#config';

export async function createAdminModule(): Promise<DynamicModule> {
  AdminJS.registerAdapter({ Database, Resource });

  return AdminJsModule.createAdminAsync({
    useFactory: async () => {
      const db = await new Adapter('postgresql', {
        connectionString: config.database.url,
        database: 'rigi',
      }).init();

      return {
        adminJsOptions: {
          rootPath: '/admin',
          resources: [{ resource: db.table('settings'), options: {} }],
        },
      };
    },
  });
}
