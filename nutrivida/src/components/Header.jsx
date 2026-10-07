import viteLogo from '../assets/vite.svg'

function Header() {
  return (
    <header className="App-header">
        <nav className="topbar">
            <ul className="nav-links">
              <li className="logo">
                <div>
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </div>
              </li>
              <li>
                  <a href="#inicio">Inicio</a>
              </li>

              <li>
                  <a href="#servicios">Servicios</a></li>
              <li>
                  <a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
      <p>Hello Vite + React!</p>
    </header>
  )
}

export default Header