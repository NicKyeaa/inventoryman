import React from 'react';  
import InvGrid from './Components/InvGrid';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
// import AddModal from './Components/AddModal';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <InvGrid />
      {/* <AddModal /> */}
    </div>
  );
}

export default App;
