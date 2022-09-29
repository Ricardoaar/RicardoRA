import React from 'react';
import Router from '@/Routing/routes';
import MaterialThemeProvider from '@/Theming/MaterialTheme';
import GlobalStyles from '@/Theming/GlobalStyles';
import enMessages from '@/Locales/en-us.json';

import { IntlProvider } from 'react-intl';

const App = () => {
  return (
    <IntlProvider locale={'en-us'} messages={enMessages}>
      <MaterialThemeProvider>
        <GlobalStyles />
        <Router />
      </MaterialThemeProvider>
    </IntlProvider>);
};

export default App;
