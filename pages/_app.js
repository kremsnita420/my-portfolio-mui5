
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css'
import { StoreProvider } from '../src/StoreProvider';


import { useEffect } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (

    <CacheProvider value={emotionCache}>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>
      <StoreProvider>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />

      </StoreProvider>
    </CacheProvider>

  );
}

