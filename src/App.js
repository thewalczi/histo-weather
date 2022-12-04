import './App.css';
import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import { Canvas } from './components/Canvas';
import { api } from './api/dataApi';

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    (async () => {
      const data = await api.get('/forecast', {params: {latitude: 41.85, longitude: -87.65, past_days: 10, timezone: "Europe/Berlin", daily: 'temperature_2m_max,temperature_2m_min'}})
      setData(data.data)
    })()
  }, [])
  return (
    <div className="App">
      <Canvas data={data}/>
    </div>
  );
}

export default App;
