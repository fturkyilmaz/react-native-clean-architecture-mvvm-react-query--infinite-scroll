// QueryProvider.tsx

import {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

// Instantiate a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});

// Export the QueryClientProvider with our instantiated queryClient
export const QueryProvider = ({children}: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};
