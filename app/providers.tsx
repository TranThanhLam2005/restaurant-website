// app/providers.tsx
"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SessionProvider} from "next-auth/react";
import {ReactNode, useState} from "react";

export default function Providers({children}: {children: ReactNode}) {
  // Create a new QueryClient instance for each server request
  // (prevents cache sharing between requests)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Recommended for Next.js: don't retry on server errors
            retry: false,
            // Keep data fresh for 5 minutes
            staleTime: 5 * 60 * 1000,
          },
        },
      }),
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
