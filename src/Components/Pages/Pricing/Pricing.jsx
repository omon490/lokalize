import { Link } from "react-router-dom"
import "./Pricing.css"
import documents from "../../../img/documents.png"
import games from "../../../img/games.png"
import iO from "../../../img/iO.png"
import marketing from "../../../img/marketing.png"
import mobileApps from "../../../img/mobile-apps.png"
import webApps from "../../../img/web-apps.png"
import managers from "../../../img/managers.png"
import developer from "../../../img/developer.png"
import translator from "../../../img/translator.png"


function Pricing() {
  return (
    <div>
      <div className="pricing">
        <div className="container">
          <h3 className="pricing-title">What can you localize with Lokalise?</h3>
          <ul className="pricing-list">
            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={webApps} alt="illustration"/>
                  <h4 className="pricing-inner-title">Web apps</h4>
                  <p className="pricing-inner-text">Any kind of web apps — backend, frontend, single page, blogs — you name it.</p>
                </div>
              </Link>
            </li>

            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={mobileApps} alt="illustration"/>
                  <h4 className="pricing-inner-title">Mobile apps</h4>
                  <p className="pricing-inner-text">Upload any mobile platform language files. Embed Lokalise iOS SDK or Lokalise Android SDK if you prefer. </p>
                </div>
              </Link>
            </li>

            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={games} alt="illustration"/>
                  <h4 className="pricing-inner-title">Games</h4>
                  <p className="pricing-inner-text">Our cloud software is trusted by many leading game developers around the world.</p>
                </div>
              </Link>
            </li>

            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={documents} alt="illustration"/>
                  <h4 className="pricing-inner-title">Documents</h4>
                  <p className="pricing-inner-text">Upload your DOCX and static HTML files.</p>
                </div>
              </Link>
            </li>

            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={marketing} alt="illustration"/>
                  <h4 className="pricing-inner-title">Marketing e-mails</h4>
                  <p className="pricing-inner-text">Integrate with Salesforce Marketing Cloud (coming soon) or translate static e-mails.</p>
                </div>
              </Link>
            </li>

            <li className="pricing-item">
              <Link className="pricing-link">
                <div className="pricing-inner-wrapper">
                  <img className="pricing-inner-img" src={iO} alt="illustration"/>
                  <h4 className="pricing-inner-title">IoT</h4>
                  <p className="pricing-inner-text">We support most popular localization file formats.</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="boost">
        <div className="container">
          <h3 className="boost-heading">Boost your localization team’s productivity tenfold</h3>
          <ul className="boost-ul">
            <li className="boost-item">
              <img className="boost-img" src={managers} alt=""/>
              <div className="boost-title">Managers</div>
              <p className="boost-text">Update existing and launch new features and products while simultaneously localizing them in multiple languages. Streamline your team's workflow, maximize productivity, and speed up expansion to other markets.</p>
              <Link className="boost-link">Learn more</Link>
            </li>

            <li className="boost-item">
              <img className="boost-img" src={developer} alt=""/>
              <div className="boost-title">Developer</div>
              <p className="boost-text">Set up an integration with your code repository or your own custom SDK via Lokalise's powerful API. Do that once, and every time you make changes in the code, they'll be automatically imported to Lokalise for translation.</p>
              <Link className="boost-link">Learn more</Link>
            </li>

            <li className="boost-item">
              <img className="boost-img" src={translator} alt=""/>
              <div className="boost-title">Translators</div>
              <p className="boost-text">Eliminate double-work and neverending revisions with visual context (screenshots) and live previews. Improve the quality and speed of your translations with built-in CAT tools, like autocomplete, inline machine translation, and translation memory.</p>
              <Link className="boost-link">Learn more</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
