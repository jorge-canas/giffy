import { Link, Route } from 'wouter'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/'>Index</Link>
        <Route
          component={Home}
          path='/' 
        />
        <Route
          component={SearchResults}
          path='/search/:keyword' 
        />
      </section>
    </div>
  );
}

export default App;
