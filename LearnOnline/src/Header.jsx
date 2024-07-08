import Logo from './assets/G-KANAD.jpg'
import './assets/CSS/header.css'

const Header = () => {
  return (
    <div className="header">
        <header>
            <div className="nav_container">
                <nav>
                    <div className="nav_bar">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>

                        <div className="nav_links">
                            <div className="links">
                                <ul>
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Courses">
                                            Courses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/About">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="auth">
                                <div className="register">
                                    <div className="auth_join">
                                        <button>Join</button>
                                    </div>
                                </div>
                                <div className="login">
                                    <div className="auth_login">
                                        <button>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    </div>
  )
}

export default Header