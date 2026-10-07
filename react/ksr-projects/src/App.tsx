import { useState } from 'react'
import './App.css';

function App() {
 const [menu, setMenu] = useState(false);
 const showMenu = () => {
  if(menu === true) {
    setMenu(false)
  } else {
    setMenu(true);
  }
 }
  

  return (
   <div className='app-container'>
      <header>
        <div className="logo"></div>
        <div className="menu-button" onClick={showMenu}>
          <i className={`bi ${menu ? "bi-x" : "bi-list"}`}></i>
        </div>
      </header>
      <ul className={`menu-container ${menu ? "menu-active" : ""}`}>
        <li className='menu-item'>Home</li>
        <li className='menu-item'>Projects</li>
        <li className='menu-item'>About</li>
      </ul>
   </div>
  )
}

export default App
