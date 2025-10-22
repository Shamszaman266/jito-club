import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navbar */}
      <section className="bg-gray-700 min-h-[10vh] flex items-center px-8">
        <h1 className="text-xl font-semibold">Home</h1>
      </section>

      {/* Main content with sidebar */}
      <div className="flex flex-1">
        {/* Scrollable Sidebar */}
        <section className="bg-gray-800 w-[20%] h-screen overflow-y-auto p-6">
          <ul>
            {Array.from({ length: 25 }).map((_, i) => (
              <li key={i} className="mb-4">
                Menu {i + 1}
              </li>
            ))}
          </ul>
        </section>

       {/* Main Content */}
 <main className="flex-1 p-10 overflow-y-auto h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Input Box */}
      <div className="w-full max-w-md flex flex-col items-center relative">
        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-l-lg bg-gray-700 text-white focus:outline-none"
          />
          <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-800">
            Send
          </button>
        </div>

        {/* Horizontal Explore Tags */}
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Research
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Market
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Cinema
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Technology
          </button>
        </div>
      </div>
    </main>

      </div>
    </div>
  )
}
