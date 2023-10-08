import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { router } from '@/types/index';

export const trpc = createTRPCProxyClient<typeof router>({
    links: [
      httpBatchLink({
        url: 'https://rnxmo-206-189-53-94.a.free.pinggy.online  ',
      }),
    ],
  });