import './App.css';
import Cards from '..components/Cards'
import axios from "axios";


const API_URL = "http://localhost:3000/api/v1/cards";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)

}
function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
