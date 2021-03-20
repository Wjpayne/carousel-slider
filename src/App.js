import './App.css';
import Slider from './Components/Slider';
import images from "./images"

function App() {
  return (
    <div className="App">

      <Slider slides  = {images} />

    </div>
  );
}

export default App;
