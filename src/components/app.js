import React from 'react';

import NavBar from '../components/navbar';

// example class based component (smart component)
const App = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default App;
