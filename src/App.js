// in src/App.js
import * as React from "react";
import simpleRestProvider from 'ra-data-simple-rest';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const dataProvider = simpleRestProvider('https://hive.engr.usfca.edu/api/v1');
const App = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource name="tools" list={ListGuesser} />
  </Admin>
);

export default App;