import { Link } from "react-router-dom"
import "./Features.css"
import projectApp from "../../../img/project-app.png"
import shortenTime from "../../../img/shorten-time.png"
import ensureQuality from "../../../img/ensure-quality.png"
import lessWork from "../../../img/less-work.png"

function Features() {
return (
<div>
  <div className="features">
    <div className="container">
      <div className="features-inner">
        <div className="features-left-box">
          <h3 className="features-title">Control the localization process</h3>
          <p className="features-text">Collaborate with your team in a single workspace. Add and assign tasks, track
            progress, and enjoy a seamless localization workflow where you know who is doing what and when.</p>
          <Link className="features-link">Start now</Link>
        </div>

        <div className="features-right-box">
          <img className="features-img" src={projectApp} alt="project app" width="632" height="632" />
        </div>

        <div className="features-right-box">
          <img className="features-img" src={shortenTime} alt="project app" width="632" height="632" />
        </div>

        <div className="features-left-box shorten-time-box">
          <h3 className="features-title shorten-time-title">Shorten time to market</h3>
          <p className="features-text">Localize your product in parallel with the development cycle. Use the Adobe XD,
            Figma, and Sketch plugins to start working on translations as soon as the product design is ready. No more
            idle waiting.</p>
          <Link className="features-link">Start now</Link>
        </div>

        <div className="features-left-box">
          <h3 className="features-title">Ensure quality</h3>
          <p className="features-text">Use built-in tools — e.g. translation memory, machine translation, and QA checks
            — to enhance the quality and cohesion of translations. Add product screenshots for context and use the
            in-context editors for instant previews.</p>
          <Link className="features-link">Start now</Link>
        </div>

        <div className="features-right-box">
          <img className="features-img" src={ensureQuality} alt="project app" width="632" height="632" />
        </div>

        <div className="features-right-box">
          <img className="features-img" src={lessWork} alt="project app" width="632" height="632" />
        </div>

        <div className="features-left-box shorten-time-box">
          <h3 className="features-title shorten-time-title">Less work for developers</h3>
          <p className="features-text">Eliminate the hassle of localization and let developers get back to their main
            tasks. Save hours with the powerful API, CLI, mobile SDKs, and integrations with GitHub, Bitbucket, JIRA,
            and more.</p>
          <Link className="features-link">Start now</Link>
        </div>
      </div>
    </div>
  </div>

</div>
)
}

export default Features
