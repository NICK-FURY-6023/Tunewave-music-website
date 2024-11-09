import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Spotify</h1>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Home className="w-6 h-6 mr-4" />
            <span className="font-semibold">Home</span>
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Search className="w-6 h-6 mr-4" />
            <span className="font-semibold">Search</span>
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Library className="w-6 h-6 mr-4" />
            <span className="font-semibold">Your Library</span>
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <PlusSquare className="w-6 h-6 mr-4" />
            <span className="font-semibold">Create Playlist</span>
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Heart className="w-6 h-6 mr-4" />
            <span className="font-semibold">Liked Songs</span>
          </a>
        </div>
      </div>

      <div className="mt-auto p-6">
        <a href="#" className="flex items-center text-gray-300 hover:text-white text-sm">
          <Download className="w-5 h-5 mr-2" />
          <span>Install App</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;