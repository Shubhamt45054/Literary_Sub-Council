import { useState } from "react";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
        <div className="bg-[#1a1f36] p-6 rounded-2xl shadow-lg w-full max-w-md text-center relative text-white">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Event Heading */}
          <h2 className="text-2xl font-bold mb-4">🚀 Hunkaar'25 Happening Soon!</h2>
          <p className="text-gray-300 mb-4">Don't miss out! Join us now.</p>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4">
            <a
              href="#events"
              className="bg-purple-500 p-3 rounded-lg hover:bg-purple-800 font-bold text-white w-full block text-center"
              onClick={() => setIsOpen(false)}
            >
              Go to Events
            </a>

            <a
              href="#register"
              className="bg-purple-500 p-3 rounded-lg hover:bg-purple-800 font-bold text-white w-full block text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default PopUp;
