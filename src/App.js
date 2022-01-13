
import './App.css';
import { useState } from 'react';
import ImageSlider from './ImgeSlider/comps/ImageSlider';
import ImageUploader from './ImgeSlider/comps/ImageUploader';
import ImageGrid from './ImgeSlider/comps/ImageGrid';
import ImageShow from './ImgeSlider/comps/ImageShow';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="App">
      <ImageSlider/>
      <ImageUploader/>
      <ImageGrid 
      setSelectedImg={setSelectedImg}
      setSelectedIndex={setSelectedIndex}
      />
      {selectedImg !== null && selectedIndex !==null &&
      <ImageShow 
      selectedImg={selectedImg} 
      setSelectedImg={setSelectedImg}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      />}
    </div>
  );
}

export default App;
