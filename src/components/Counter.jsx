import { useState } from "preact/hooks";

export function Counter () {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button 
        class="bg-slate-50 rounded-lg px-2 py-1 mr-2 text-xl text-black font-semibold" 
        onClick={() => setCounter((counter) => counter - 1)}> - </button>
      <span>{counter}</span>
      <button 
        class="bg-slate-50 rounded-lg px-2 py-1 ml-2 text-xl text-black font-semibold"
        onClick={() => setCounter(counter + 1)}
      > + </button>
    </>
  )
}
