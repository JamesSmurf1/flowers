import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="text-center bg-blue-200 p-10 rounded-lg shadow-lg max-w-5xl mx-4">
        <h1 className="font-romantic text-blue-700 mb-4 
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          ">
          Flowers for you
        </h1>
        <div className='text-4xl'>🌸🌸🌸🌸🌸</div>
        <p className="font-romantic text-blue-800 mb-2 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl
          ">
          You deserve it, you are amazing.
        </p>
        <div className='w-full flex items-center justify-center'>
          <img src='https://i.redd.it/8ujgm2pbwr241.gif' />
        </div>
        <p className="text-gray-700 mt-4 text-base text-[35px]">
          — from James to Trisha.
        </p>
        <p className="text-gray-700 mt-4 text-base text-[10px]">
          - It's gonna be a real flower next time.
        </p>
      </div>
    </div>
  );
}

export default App;
