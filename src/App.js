import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const getData = (e) => {
    axios.get('/api/test').then( res => alert(res)).catch((err) => alert(err));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        >
          Hello Test Frontend
        </h1>
        <br/>
        <br/>
        <br/>
        <button onClick={getData}>TEST API</button>
      </header>
    </div>
  );
}

export default App;
