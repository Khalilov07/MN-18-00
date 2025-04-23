import './header.css'

import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className='header'>
            <nav className="header__nav">

                <div className="header__logo">
                    <img src="https://ostore.kg/img/new-logo/2logo-ostore.png" alt="" className="header__img" />
                </div>

                <ul className="header__links">
                    <li className="header__item">
                        <Link to="/" className="header__link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header__link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="header__link">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/create" className="header__link">
                            Create Course
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header