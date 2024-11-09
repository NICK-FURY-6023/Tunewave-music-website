import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  );
}

export default App;