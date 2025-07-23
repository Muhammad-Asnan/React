import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [fontColor, setFontColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen bg-gray-400 text-6xl font-bold text-white text-center pt-2"
        style={{ backgroundColor: color, color: fontColor }}
      >
        Background Changer
      </div>
      <div className="flex justify-center h-auto w-auto flex-wrap">
        <div className="fixed flex justify-center gap-5 flex-wrap bottom-12 bg-white  rounded mx-auto px-6 py-3">
          <button
            className="px-4 min-w-20 text-2xl py-1 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
            onClick={() => {
              setColor("red");
              setFontColor("white");
            }}
          >
            Red
          </button>
          <button
            className="px-4 min-w-20 py-1 bg-green-700 text-2xl text-white rounded-full shadow hover:bg-green-800 transition"
            onClick={() => {
              setColor("green");
              setFontColor("white");
            }}
          >
            Green
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            onClick={() => {
              setColor("blue");
              setFontColor("white");
            }}
          >
            Blue
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl text-white rounded-full shadow bg-amber-600 hover:bg-amber-700 transition"
            onClick={() => {
              setColor("Orange");
              setFontColor("white");
            }}
          >
            Orange
          </button>
          <button
            className="px-4 min-w-20 py-1 bg-gray-500 text-2xl text-white rounded-full shadow hover:bg-gray-600 transition"
            onClick={() => {
              setColor("gray");
              setFontColor("white");
            }}
          >
            Gray
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl bg-yellow-300 text-black rounded-full shadow hover:bg-yellow-400 transition"
            onClick={() => {
              setColor("gold");
              setFontColor("white");
            }}
          >
            Yellow
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl bg-pink-400 text-black rounded-full shadow hover:bg-pink-500 hover:text-white transition"
            onClick={() => {
              setColor("#FF69B4");
              setFontColor("white");
            }}
          >
            Pink
          </button>
          <button
            className="px-2 min-w-20 py-1 text-2xl bg-purple-500 text-black rounded-full shadow hover:bg-purple-800 hover:text-white transition"
            onClick={() => {
              setColor("purple");
              setFontColor("white");
            }}
          >
            Purple
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl bg-teal-500 text-black rounded-full shadow hover:bg-teal-700 hover:text-white transition"
            onClick={() => {
              setColor("teal");
              setFontColor("white");
            }}
          >
            Teal
          </button>
          <button
            className="px-4 min-w-20 py-1 text-2xl bg-white text-black rounded-full shadow-gray-400 shadow hover:bg-black hover:text-white transition"
            onClick={() => {
              setColor("white");
              setFontColor("black");
            }}
          >
            White
          </button>
          <button
            className="px-4 min-w-20 py-1 bg-black text-2xl text-white rounded-full shadow hover:bg-white hover:text-black transition"
            onClick={() => {
              setColor("black");
              setFontColor("white");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
