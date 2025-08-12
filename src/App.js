import React from 'react';
import packageJson from '../package.json';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      Tirup Ulli from Bangalore v2 and from envi,from gha & 4 workflows and gh pages and deploy in nginx as well(other pipelines) <br />
      Version: {packageJson.version}
    </div>
  );
}

export default App;
