import React, { useEffect } from 'react';
import { client } from '@provider';

function App() {
  useEffect(() => {
    client.triggerOtp();
  }, []);

  return (
    <div>
      <h1>React App Using Provider SDK (Alias Driven)</h1>
    </div>
  );
}

export default App;