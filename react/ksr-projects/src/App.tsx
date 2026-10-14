import { useState } from 'react'
import './App.css';

function App() {
 const [menu, setMenu] = useState(false);
 const showMenu = () => {
  setMenu(!menu);
 }
 const [darkTheme, setDarkTheme] = useState(true)
 const handleTheme = () => {
  setDarkTheme(!darkTheme);
 }
  

  return (
   <div className={`app-container ${darkTheme ? "" : "light-theme"}`}>
      <header>
        <div className="logo">KSRProjects</div>
        <div className="menu-button" onClick={showMenu}>
          <i className={`bi ${menu ? "bi-x" : "bi-list"}`}></i>
        </div>
      </header>
      <ul className={`menu-container ${menu ? "menu-active" : ""}`}>
        <li className='menu-item'>Home</li>
        <li className='menu-item'>Projects</li>
        <li className='menu-item'>About</li>
        
        <li className='menu-item' onClick={handleTheme}><i className={`bi ${darkTheme ? "bi-brightness-high-fill" : "bi-moon-fill"}`}></i></li>
      </ul>
   </div>
  )
}

export default App
