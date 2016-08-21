import React from 'react';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'

class App extends React.Component {
   render() {
      return (
        <div>
           <Navigation/>
           <Home/>
         </div>
      );
   }
}

export default App;
