import React from 'react';
import './App.css';
import Image from './Image';

class App extends React.Component {
  render() {
    return(
      <div>
      <Image source="cat.jpg" alternativeText="Cute cat" />
      </div>
    );
  }
}

export default App;
