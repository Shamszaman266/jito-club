"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Play with your{" "}
              <span className="text-blue-600">favourite influencers</span>
            </h1>
            <p className="text-gray-500 dark:text-green-400 font-bold text-lg mb-6">
              JITO is a fantasy gaming app for the stock market. Join exciting
              challenges and connect with your idols.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-extrabold text-xl mb-6">
              #JITODIMAGSE
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Learn More
              </a>
            </div>

            <p className="text-gray-500 dark:text-green-400 font-bold text-lg">
              Get ₹100 Jito coins upon sign up
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/stockImage.jpg"
              alt="Influencer Illustration"
              className="w-[400px] h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl w-full text-center mx-auto py-16">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-10">
          Why Choose <span className="text-blue-600">JITO</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/target.png" alt="Exciting Challenges" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Exciting Challenges
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img src="/rupee-bag.png" alt="Win Rewards" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Win Rewards
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img src="/boarding-pass.png" alt="Community" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Community
            </h3>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          How to <span className="text-blue-600">Play</span>
        </h1>

        <p className="text-gray-500 font-bold text-lg mb-6">
          Pick from 4 games for real-world stock market experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
  <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-500 dark:text-green-400 font-bold text-lg">
    Target 
  </p>
  <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-500 dark:text-green-400 font-bold text-lg">
    Portfolio
  </p>
  <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-500 dark:text-green-400 font-bold text-lg">
    Bull vs Bear
  </p>

  <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-500 dark:text-green-400 font-bold text-lg">
    Classic
  </p>
</div>
{/* Explanatory Text & Steps Section */}
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 mt-12">
  
  {/* Left Text Content */}
  <div className="flex-1 text-left space-y-6">
    <p className="text-gray-500 dark:text-green-400 font-bold text-lg">
      Win big by predicting a stocks closing price accurately. 
      Test your forecasting skills and succeed!
    </p>

    <ul className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
      <li>Step 1: Pick a free or paid “Target” game in the app</li>
      <li>Step 2: Accurately select the price range of stock to win</li>
      <li>Step 3: Pay entry fee if it’s a paid game</li>
      <li>Step 4: Win real money prize</li>
    </ul>
  </div>

  {/* Right Image */}
  <div className="flex-1">
    <img
      src="/aimtarget.svg"
      alt="How to Play"
      className=""
    />
  </div>
</div>


      </section>

   
{/* Testimonial Section */}
<section className="max-w-6xl mx-auto px-6 py-16 text-center">
  <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
    Testimonial
  </h2>
  <p className="text-gray-500 dark:text-green-400 font-bold text-lg mb-12">
    See what people are talking about us
  </p>

  {/* Testimonial Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    {/* Testimonial 1 */}
    <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <img
        src="/user1.jpg"
        alt="Akash Aman"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          Akash Aman
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Jito fantasy stock trading app is a great platform to hone your
          investment skills. It offers a realistic experience and valuable
          learning opportunities.
        </p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <img
        src="/user2.jpg"
        alt="Suvendu Nayak"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          Suvendu Nayak
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          I love how Jito fantasy stock trading app lets me compete with
          friends and learn about the stock market. It is fun and educational!
        </p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <img
        src="/user3.jpg"
        alt="Kumar Yash"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          Kumar Yash
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Jito fantasy stock trading app is addictive! It is amazing to see my
          virtual portfolio grow and compete against other traders. A must-try
          for stock enthusiasts!
        </p>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <img
        src="/user4.jpg"
        alt="Anuroop Gireesan"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          Anuroop Gireesan
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Jito is a game-changer! With its fantasy stock trading app, I
          experienced the thrill of investing without any real risks. Highly
          recommended!
        </p>
      </div>
    </div>
  </div>
</section>




    </div>
  );
}
