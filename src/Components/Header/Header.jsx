import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../img/logo.svg"

function Header() {
return (
<div>
  <header className="site-header">
    <div className="container">
      <div className="site-header__wrapper">
        <Link className="logo" to="/product">
        <img className="logo__img" src={logo} alt="site logo" width="130" height="28" />
        </Link>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__item">
              <Link className="site-nav__link" to="/product">Product</Link>
            </li>

            <li className="site-nav__item">
              <Link className="site-nav__link" to="/features">Features</Link>
            </li>

            <li className="site-nav__item">
              <Link className="site-nav__link" to="/pricing">Pricing</Link>
            </li>

            <li className="site-nav__item">
              <Link className="site-nav__link" to="/case">Case studies</Link>
            </li>

            <li className="site-nav__item">
              <Link className="site-nav__link" to="/resources">Resources</Link>
            </li>
          </ul>
          <ul className="site-header__select-list">
          <li className="site-header__select-item">
              <div className="site-header__select-wrapper">
                <select className="site-header__select" >
                <option className="site-header__select-option" value="en">English</option>
                <option className="site-header__select-option" value="ru">Русский</option>
                <option className="site-header__select-option" value="uz">O'zbek</option>
                </select>
              </div>
            </li>

            <li className="site-header__select-item">
              <div className="site-header__select-wrapper">
                <select className="site-header__select">
                  <option value="site-header__select-option">Light</option>
                  <option value="site-header__select-option">Dark</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  </header>

</div>
)
}

export default Header
