import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../ui/theme';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from 'utils/supabaseClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// reactqueryクライアントの作成
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // fecthに失敗した場合に再fetchする機能をfalse
      refetchOnWindowFocus: false, // ブラウザにfocusを当てた際にsupabaseから自動でデータをfecthするを一旦false
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter();
  const validateSession = async () => {
    const user = await supabase.auth.getUser();
    if (user && pathname === '/') {
      push('/dashboard');
    } else if (!user && pathname !== '/') {
      await push('/');
    }
  };

  // ログイン中のユーザーのsessionの変化を監視
  supabase.auth.onAuthStateChange((event, _) => {
    if (event === 'SIGNED_IN' && pathname === '/') {
      push('/dashboard');
    }
    if (event === 'SIGNED_OUT') {
      push('/');
    }
  });

  // ブラウザリロード時に確実にvalidateする
  useEffect(() => {
    validateSession();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
