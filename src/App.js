import logo from './logo.png';
import Search from './components/Search/Search';
import './App.css';

function App() {

  async function handleSearchSubmit(){

  }

  return (
    <div className="App">
      <header className="App-header">
        <figure className='App-logo-container'>
          <img src={logo} className="App-logo" alt="logo: A spinning star" />
        </figure>
        <Search />
        <nav>
          <ul>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
