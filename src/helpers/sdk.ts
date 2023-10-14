import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { ElysiaApp, router } from '@/types/index';
import { edenFetch, edenTreaty } from '@elysiajs/eden'
import { useEffect, useState } from 'react';

// export const trpc = createTRPCProxyClient<typeof router>({
//     links: [
//       httpBatchLink({
//         url: '/trpc'}),
//     ],
//   });

  export const eden = edenTreaty<ElysiaApp>('/api2')
  // eden.user[':id'].profile // => Promise {data:Typed data,error: error}
  type Eden = typeof eden;
  export const fetchE = edenFetch<ElysiaApp>('/api2')
  // fetchE('/user/:id/profile',{params:{id:"my"}}).then(d=>d.)
  type FetchE = typeof fetchE;

  type EdenResponse<T> = {
    data: T;
    error?: any;
  };

  

  export const useEden = <T>(
    fn: (eden: Eden) => Promise<EdenResponse<T>>
  ): EdenResponse<T> => {
    const [result, setResult] = useState<EdenResponse<T>>({
      data: null as unknown as T,
      error:null
    });
  
    useEffect(() => {
      let isMounted = true;
  
      fn(eden).then((response) => {
        if (isMounted) {
          setResult(response);
        }
      }).catch((error) => {
        if (isMounted) {
          setResult({
            data: null as unknown as T,
            error
          });
        }
      });
  
      return () => {
        isMounted = false;
      };
    }, []);
  
    return result;

  }

  // eden.publication.list.get({$query:{skip:1}})

  // export const useGetProfile = (user_uuid:string)=>{
  //   const {data} = useEden(()=>eden.user[user_uuid].profile.get())
    
  //   if (!data?.profile) return null
  //   return data.profile

  // }
  