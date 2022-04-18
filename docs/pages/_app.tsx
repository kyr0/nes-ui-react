import { AppProps } from 'next/app';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <Component {...pageProps} />
  </div>
);

export default App;
