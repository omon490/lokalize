import "./Resources.css"

import resourceIllustration from "../../../img/resources-illustration.png"

import { Link } from "react-router-dom"

function Resources() {
  return (
    <div>
      <div className="resources">
        <div className="container">
          <div className="resources-wrapper">
            <h3 className="resources-heading">Integrate Lokalise with your work tools</h3>
            <p className="resources-text">Automate processes, eliminate routine tasks, and track progress with ease.</p>
            <img className="resources-img" src={resourceIllustration} alt="illustration"/>
            <Link className="resources-link" to="/link">See all integrations</Link>
          </div>
        </div>
      </div>

      <div className="wait">
        <div className="container">
          <div className="wait-wrapper">
            <h3 className="wait-heading">Localization made easy. Why wait?</h3>
            <p className="wait-text">Try for free or let us show you how it works.</p>
            <Link className="wait-link" to="/">Try it free</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resources
