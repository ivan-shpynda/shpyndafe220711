import { useState, useRef, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [ data, setData ] = useState([
    { name: "Landing", time: 7.4 },
    { name: "Configurator", time: 0.2 },
    { name: "Check-out", time: 7 },
    { name: "Deal", time: 3.8 },
  ]);

  const changeData = () => {
    setData(data.map(item => ({name: item.name, time: +(Math.random() * 10).toFixed(1)})))
  };

  const btnRef = useRef(null);

  useEffect(() => {
    setInterval(() => {btnRef.current.click()}, 30000)
  }, [])

  return (
    <div className="App">
      <h1 className="header">Spent time (seconds)</h1>
      <Chart data={data}/>
      <button
        onClick={changeData}
        className="btn"
        ref={btnRef}
      >
        Change
      </button>
    </div>
  );
}

export default App;
