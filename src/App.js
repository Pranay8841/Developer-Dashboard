import { useEffect, useState } from "react";
import "./App.css";
import mockData from './MockAPIData.json'
import Dashboard from "./Components/Dashboard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  console.log(data)

  return (
   <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Developer Activity Dashboard</h1>
      {
        data ?
        <Dashboard data = {data} /> :
        <p>Loading...</p>
      }
   </div>
  );
}

export default App;
