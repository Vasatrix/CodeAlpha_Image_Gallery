import './App.css';
import ImageGallery from './components/ImageGallery';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App light-mode'}>
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="page-title">Image Gallery</h1>
      <ImageGallery />
      <footer className="footer">
        <p>© Designed by Vasanth Kumar S</p>
      </footer>
    </div>
  );
}

export default App;


