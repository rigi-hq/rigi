import type { DynamicModule } from '@nestjs/common';

// adminjs, @adminjs/nestjs and @adminjs/sql are ESM-only packages: their
// package.json "exports" maps only declare an "import" condition (no
// "require"), so a static `import` fails under apps/core's CommonJS build
// output with ERR_PACKAGE_PATH_NOT_EXPORTED / "Cannot find module". A real
// dynamic `import()` resolves them correctly; `.swcrc` sets
// `module.ignoreDynamic: true` so swc leaves `import()` untouched here
// instead of lowering it back down to `require()`.
export async function createAdminModule(): Promise<DynamicModule> {
  const { default: AdminJS } = await import('adminjs');
  const { AdminModule: AdminJSModule } = await import('@adminjs/nestjs');
  const { Database, Resource, Adapter } = await import('@adminjs/sql');

  AdminJS.registerAdapter({ Database, Resource });

  return AdminJSModule.createAdminAsync({
    useFactory: async () => {
      const db = await new Adapter('postgresql', {
        connectionString: process.env.DATABASE_URL as string,
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
