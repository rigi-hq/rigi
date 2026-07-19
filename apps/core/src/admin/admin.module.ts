import { AdminModule as AdminJSModule } from '@adminjs/nestjs';
import { Adapter, Database, Resource } from '@adminjs/sql';
import type { DynamicModule } from '@nestjs/common';
import AdminJS from 'adminjs';
import { config } from '../config.js';

export async function createAdminModule(): Promise<DynamicModule> {
  AdminJS.registerAdapter({ Database, Resource });

  return AdminJSModule.createAdminAsync({
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
