import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { ElysiaApp, router } from '@/types/index';
import { edenFetch, edenTreaty } from '@elysiajs/eden'

export const trpc = createTRPCProxyClient<typeof router>({
    links: [
      httpBatchLink({
        url: '/trpc'}),
    ],
  });

  export const eden = edenTreaty<ElysiaApp>('/api2')
  export const fetchE = edenFetch<ElysiaApp>('/api2')

  
  