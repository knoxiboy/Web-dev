import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ( 
    <>
      <h1>Display the Cards</h1>
      <div className="card">
        {data.map(dt => {
        return (
          <div key={dt.id}>
            <h2>{dt.title}</h2>
            <p>{dt.body}</p>
            <p><strong>ID:</strong> {dt.id}</p>
            <p><strong>User ID:</strong> {dt.userId}</p>
          </div>
        )
      })}
      </div>

    </>
  )
}

export default App
