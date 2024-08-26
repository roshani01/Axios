import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);

  // Function to fetch data using async/await
  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setMyData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to call the getApiData function once on component mount
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Photo Gallery</h1>
      <div className="grid">
        {myData.map((photo) => {
          const { id, title, thumbnailUrl } = photo;
          return (
            <div className="card" key={id}>
              <img src={thumbnailUrl} alt={title} />
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
