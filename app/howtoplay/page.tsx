"use client";

import React,{useState} from "react";


export default function HowToPlay() {
  const [selectedTab, setSelectedTab]= useState("target");
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-16">
      

      {/* Game Tabs */}
      <div className="flex justify-center mb-10 gap-4">
        <button onClick={() => setSelectedTab("target")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selectedTab === "target"
              ? "bg-blue-600 text-white"
              : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          Target
        </button>
         <button
          onClick={() => setSelectedTab("bull")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selectedTab === "bull"
              ? "bg-blue-600 text-white"
              : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          Bull vs Bear
        </button>
        <button
          onClick={() => setSelectedTab("classic")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selectedTab === "classic"
              ? "bg-blue-600 text-white"
              : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          Classic
        </button>
      </div>


{/*Dynamic conyent */}
{/* Game Instructions */}

      {selectedTab==="target" &&( 
        <>
        {/*Target content*/}
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
            Gameplay
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
      </> 
      )}

      {/*Bull vs bear content*/}
      {selectedTab === "bull" && (
        <section className="max-w-4xl mx-auto flex flex-col gap-10 text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Game Overview
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            In <b>Bull vs Bear</b>, predict whether the stock price will rise
            (Bull) or fall (Bear) by the end of the session. Earn rewards for
            accurate predictions!
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-500 dark:text-gray-400 space-y-2">
            <li>Select a stock you want to predict.</li>
            <li>
              Choose <b>“Bull”</b> if you think the price will go up or{" "}
              <b>“Bear”</b> if it will go down.
            </li>
            <li>Confirm your prediction and wait for results.</li>
            <li>Win exciting rewards for correct forecasts!</li>
          </ol>
          <div className="flex justify-center mt-6">
            <img
              src="/playingCard.png"
              alt="Bull vs Bear"
              className="w-[220px] md:w-[300px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>       
      )};
    

    {/*Classic content*/}

    {selectedTab==="classic" && (
      <section className="max-w-4xl mx-auto flex flex-col gap-10 text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Game Overview
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            The <b>Classic</b> mode offers a simple stock prediction experience
            with fixed odds — perfect for quick play sessions!
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-500 dark:text-gray-400 space-y-2">
            <li>Select your favorite stock.</li>
            <li>Predict the closing price accurately.</li>
            <li>Win prizes based on your precision!</li>
          </ol>
          <div className="flex justify-center mt-6">
            <img
              src="/playingCard.png"
              alt="Classic Game"
              className="w-[220px] md:w-[300px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

    )}
    </div>
  );
}
