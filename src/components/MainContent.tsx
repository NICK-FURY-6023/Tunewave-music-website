import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

const MainContent = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl text-white font-bold">Good Morning</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div
              key={index}
              className="flex bg-[#282828] hover:bg-[#3e3e3e] transition-colors group rounded overflow-hidden"
            >
              <img src={playlist.image} alt={playlist.title} className="w-20 h-20 object-cover" />
              <div className="flex-1 flex items-center justify-between p-4">
                <span className="text-white font-semibold truncate">{playlist.title}</span>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Play className="w-6 h-6 text-black fill-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl text-white font-bold mb-6">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group"
            >
              <div className="relative mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg translate-y-2 group-hover:translate-y-0">
                  <Play className="w-6 h-6 text-black fill-black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-2">{playlist.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;