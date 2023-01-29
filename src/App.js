import React from 'react';
import './App.css';
import ContainerComponent from './ContainerComponent';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <ContainerComponent/>
      </StateProvider>
    </div>
  );
}

export default App;
