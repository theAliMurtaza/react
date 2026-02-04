import { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setCounter(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[250px] bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <h2 className="text-3xl font-semibold mb-4">{count}</h2>

        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="ml-4 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
