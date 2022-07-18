import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
