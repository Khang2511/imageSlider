
import './App.css';
import { useState } from 'react';
import ImageSlider from './ImgeSlider/comps/ImageSlider';
import ImageUploader from './ImgeSlider/comps/ImageUploader';
import ImageGrid from './ImgeSlider/comps/ImageGrid';
import ImageShow from './ImgeSlider/comps/ImageShow';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <ImageSlider/>
      <ImageUploader/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg !== null && 
      <ImageShow 
      selectedImg={selectedImg} 
      setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
