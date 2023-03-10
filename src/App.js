import './App.css';
import Cards from "./components/cards/cards"; 
import axios from "axios";
import { useEffect, useState } from "react";


const API_URL = "http://localhost:3000/api/v1/cards";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)

}
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCards(items);
      }
    });

    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Cards cards={cards} />
      
    </div>
  );
}

export default App;
