import './App.css';
import { useState } from 'react';
import ImageSlider from './ImgeSlider/comps/ImageSlider';
import ImageUploader from './ImgeSlider/comps/ImageUploader';
import ImageGrid from './ImgeSlider/comps/ImageGrid';
import ImageShow from './ImgeSlider/comps/ImageShow';
import ImageLoading from './ImgeSlider/comps/ImageLoading';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="App">
      <ImageLoading></ImageLoading>
      <ImageSlider/>
      <ImageUploader/>
      <ImageGrid 
      setSelectedImg={setSelectedImg}
      setSelectedIndex={setSelectedIndex}
      />
      {selectedImg !== null && selectedIndex !==null &&
      <ImageShow 
      setSelectedImg={setSelectedImg}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      />}
    </div>
  );
}

export default App;
