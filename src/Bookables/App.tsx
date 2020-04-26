import React from 'react';
import '../App.css';
import Bookables from './Bookables';
import { bookablesData } from '../bookablesData';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <Bookables bookablesByGroup={bookablesData} />
    </div>
  );
}

export default App;
