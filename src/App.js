import './App.css';
import setNasaImage from './Components/nasaImage';
import SearchBar from './Components/SearchBar';

function App() {

  setNasaImage();

  return (
    <div>
      <h1 style={{color: 'white'}}>Space Junkie</h1>
      <SearchBar/>
    </div>
  );
}

export default App;
