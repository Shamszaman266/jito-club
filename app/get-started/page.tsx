// "use client";
// import React from "react";




// export default function GetStarted() {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default function Login() {
  return (
    
    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-20">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-8">
          {/* Mobile Number Input */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>

    
  );
}
