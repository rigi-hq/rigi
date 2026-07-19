export const SDK_VERSION = '0.0.0';

/**
 * A Rigi plugin integrates through Nest abstractions (DynamicModule,
 * providers, DI, controllers, the BullMQ event bus) — never through the raw
 * Express/Fastify request/response. Real surface is designed in L2.
 */
export interface RigiPlugin {
  readonly name: string;
}
