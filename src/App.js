import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
  const getData = (e) => {
    axios.get('/api/test').then( res => alert(res)).catch((err) => alert(err));
  }

  const [state, setState] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post('/api/test', {'name': state }).catch(err => alert(err));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        >
          Hello World Test Frontend
        </h1>

        <form onSubmit={handleSubmit}>
          <textarea name="name" id="" placeholder="type here..."
                    cols="100" rows="10" onChange={ (e) => setState(e.target.value)}>

          </textarea>
          <br/>
          <button type="submit">
            Submit to API
          </button>
        </form>
        <br/>
        <br/>
        <br/>
        <div className="get-button">
          <button onClick={getData}>Retrieve from API</button>
        </div>
      </header>
    </div>
  );
}

export default App;
