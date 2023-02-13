import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

import { wrapper, store } from "store/redux";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);