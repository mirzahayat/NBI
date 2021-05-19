import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persister, store} from './redux/store';
import {Counter} from './src/Counter';
const App = () => {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <Counter />
        </PersistGate>
      </Provider>
    </>
  );
};
export {App};
