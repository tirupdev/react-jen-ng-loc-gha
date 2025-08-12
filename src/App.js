import React from 'react';
import packageJson from '../package.json';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      Tirup Ulli from Bangalore v2 and from envi,from gha <br />
      Version: {packageJson.version}
    </div>
  );
}

export default App;
