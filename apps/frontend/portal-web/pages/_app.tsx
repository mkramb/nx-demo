import { AppProps } from 'next/app';
import Head from 'next/head';

import { FrontendInternalComponents } from '@nx-demo/frontend/internal-components';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal-web!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <FrontendInternalComponents />
    </>
  );
}

export default CustomApp;
