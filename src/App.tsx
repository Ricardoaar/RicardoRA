import React from 'react';
import Main from '@/components/Main';

import Router from '@/Routing/routes';

import MaterialThemeProvider from '@/Theming/MaterialTheme';

const App = () => {
  return <MaterialThemeProvider>
    <Router />
  </MaterialThemeProvider>;
};

export default App;
