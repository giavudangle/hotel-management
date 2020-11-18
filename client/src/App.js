import React from 'react';

import {Admin,Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import RoomList from './components/Room/RoomList';

const api = jsonServerProvider('http://localhost:5000')

function App() {
  return (
    <Admin dataProvider={api}>
      <Resource  name="rooms" list={RoomList} />
    </Admin>
  );
}

export default App;
