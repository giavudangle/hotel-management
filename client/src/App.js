import React from 'react';

import {Admin,Resource} from 'react-admin';
import simpleRestClient from 'ra-data-simple-rest';

import RoomList from './components/Room/RoomList';
import RoomCreate from './components/Room/RoomCreate';
import RoomEdit from './components/Room/RoomEdit';




const API_URL = 'http://localhost:5000';

const restClient = simpleRestClient(API_URL);

function App() {
  return (
    <React.StrictMode>
      <Admin dataProvider={restClient} >
        <Resource  edit={RoomEdit} name="rooms" list={RoomList}  create={RoomCreate}/>
      </Admin>  
    </React.StrictMode>
   
  );
}

export default App;


