import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {StripeProvider} from '@stripe/stripe-react-native'

const stripeKey= "pk_test_51MrKEbSE7wxYxsJIzGZFka0eJb82n1cbVOjsDoUy7YM2E298sc3Je4OBSG2efPv1v3uRgebV84hHEisGfqlsSEyR00pdiHKsT7"

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier='waginstyle-store.com'
      publishableKey={stripeKey}
    >
      <Provider store={store} >
        <Main />
      </Provider>
    </StripeProvider>
  );
}

