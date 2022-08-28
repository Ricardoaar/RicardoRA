import React from 'react';

import Router from '@/Routing/routes';

import MaterialThemeProvider from '@/Theming/MaterialTheme';
import GlobalStyles from '@/Theming/GlobalStyles';

const App = () => {
  return <MaterialThemeProvider>
    <GlobalStyles />
    <Router />
  </MaterialThemeProvider>;
};

export default App;
