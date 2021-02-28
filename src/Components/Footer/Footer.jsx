import "./Footer.css"
import bcycle from "../../img/bcycle.png"
import speed from "../../img/speed.png"
import { Link } from "react-router-dom"

function Footer() {
return (
<div className="footer-bg">
  <div className="container">
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-left-box">
          <h3 className="footer-heading">Case Studies</h3>
          <img className="footer-img" src={bcycle} alt="men is running" width="300" height="300" />
          <img className="footer-img-logo" src={speed} alt="speed logo" width="80" height="32" />
          <p className="footer-text">Riding towards global success with a 100% teammate enthusiasm</p>
          <p className="footer-text-2">Read more</p>
        </div>

        <div className="footer-right-box">
          <ul className="footer-list-global">
            <li className="footer-item">
              <h4 className="footer-list-title">Product</h4>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/dev">For developers</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">For managers</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">For translators</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">For designers</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Integrations</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Security</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Pricing</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Automations</Link>
            </li>
          </ul>



          <ul className="footer-list-global">
            <li className="footer-item">
              <h4 className="footer-list-title">Support</h4>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/dev">Contact</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Documentation</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Status</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Product Updates</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">CLI Tool</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">API Reference</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">iOS and Android SDK</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Supported File Formats</Link>
            </li>
          </ul>




          <ul className="footer-list-global">
            <li className="footer-item">
              <h4 className="footer-list-title">Company</h4>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/dev">About</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Blog</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Careers | We`re Hiring</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Case Studies</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Media Kit</Link>
            </li>
          </ul>




          <ul className="footer-list-global">
            <li className="footer-item">
              <h4 className="footer-list-title">Legal</h4>
            </li>
            <li className="footer-item">
              <Link className="footer-link" to="/dev">Terms of Service</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Privacy Policy</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Cookie Policy</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Privacy Shield</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">DPA</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">List of Sub-processors</Link>
            </li>

            <li className="footer-item">
              <Link className="footer-link" to="/dev">Candidates Privacy Notice</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-box">
        <Link className="footer-bottom-logo" to="/product">lokalise</Link>
        <p className="footer-bottom-text">Localization workflow for your web and mobile apps, games and digital content.
        </p>
        <div className="footer-bottom-copyright-wrapper">
          <p className="footer-bootom-copyright">©2001-2020</p>
          <p className="footer-bottom-copyright-text">All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Footer
