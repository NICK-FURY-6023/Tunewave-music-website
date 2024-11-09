import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';

const Player = () => {
  return (
    <div className="h-20 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Album cover"
          className="h-14 w-14 rounded"
        />
        <div className="ml-4">
          <h4 className="text-white text-sm">Die With Smile</h4>
          <p className="text-gray-400 text-xs">NICK FURY 💀</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition">
            <Play className="w-5 h-5 text-black" fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full max-w-md flex items-center space-x-2 mt-2">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="h-1 flex-grow rounded-full bg-gray-600">
            <div className="h-1 w-1/3 rounded-full bg-white"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/3 space-x-4">
        <Volume2 className="text-gray-400 w-5 h-5" />
        <div className="w-24 h-1 rounded-full bg-gray-600">
          <div className="h-1 w-2/3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;