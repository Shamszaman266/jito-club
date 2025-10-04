"use client";

import React from "react";

export default function HowToPlay() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-16">
      {/* Page Heading */}
      {/* <section className="text-center mb-12">
        
        <p className="text-gray-500  text-xl dark:text-gray-400 text-lg">
          Learn how JITO works and start playing your favorite stock games today.
        </p>
      </section> */}

      {/* Game Tabs */}
      <div className="flex justify-center mb-10 gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">
          Target
        </button>
        <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Bull vs Bear
        </button>
        <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Classic
        </button>
      </div>

      {/* Game Instructions */}
      <section className="max-w-4xl mx-auto flex flex-col gap-10 ">
        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Game Overview
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            Welcome to <span className="font-semibold">Target</span>, the ultimate stock price prediction game! 
            Test your forecasting skills by predicting the closing price range of stocks. 
            Choose free or paid games and compete daily for rewards.
          </p>

          <hr className="mb-6 text-gray-300" />

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Selecting a Game:
          </h3>
          <ol className="list-decimal list-inside text-lg text-gray-500 dark:text-gray-400 space-y-2 text-left">
            <li>Open the app and navigate to the <b>“Target”</b> section.</li>
            <li>Pick a free or paid game depending on your preference.</li>
            <li>Select the price range of the stock you believe it will close at.</li>
            <li>Pay the entry fee if it’s a paid game.</li>
            <li>Win exciting real money prizes!</li>
          </ol>
        </div>

        {/* Image Below Instructions */}
        <div className="flex justify-center">
          <img
  src="/playingCard.png"
  alt="Game Screenshot"
  className="w-[200px] md:w-[280px] h-auto rounded-lg shadow-lg"
/>



        </div>
<hr className="text-gray-300" />

      </section>

       <section className="max-w-4xl mx-auto flex flex-col gap-10 mt-10">
        {/* Instructions */}
        <div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Game Overview
          </h2>

          
          <ol className="list-decimal list-inside text-lg text-gray-500 dark:text-gray-400 space-y-2 text-left">
            <li>The game consists of day-long games, meaning you need to participate before 9 AM to join the current days game
</li>
            <li>In Target, your goal is to accurately select the price range of a stock from the four given options.</li>
            <li>The price range consists of predefined intervals that reflect the potential price movement of the stock.</li>
            <li>Your task is to choose the range that you believe the stock price will fall within</li>
          </ol>
        </div>

        {/* Image Below Instructions */}
        <div className="flex justify-center">
          <img
  src="/playingCard.png"
  alt="Game Screenshot"
  className="w-[200px] md:w-[280px] h-auto rounded-lg shadow-lg"
/>

        </div>
      </section>
    </div>
  );
}
