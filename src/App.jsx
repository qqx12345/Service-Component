import { useState, useEffect, useRef  } from 'react';
import './output.css';
import Service from './page/component';
function App() {
  const [open, setopen] = useState(false);
  const serviceRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <div ref={serviceRef}>
        {open && <Service/>}
        <button onClick={() => { setopen((open) => !open); }} className="fixed bottom-40 z-[999] right-40 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300">
  客服
</button>

      </div>
    </>
  );
}

export default App;