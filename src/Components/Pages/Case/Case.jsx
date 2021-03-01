import "./Case.css"
import manImg from "../../../img/man-img.png"

function Case() {
  return (
    <div>
      <div className="case">
        <div className="container">
          <div className="case-wrapper">
            <div className="case-left">
              <p className="case-text">“Lokalise has turned a task we were dreading into an absolute pleasure. Great platform, intuitive UX, powerful API. The automatic text recognition for screenshots has been a lifesaver, and over-the-air updates are the icing on the cake.”</p>
              <p className="case-job-text">Edward Cooper, Chief Mobile Officer</p>
              <p className="case-job-name">Revoult</p>
            </div>

            <div className="case-right">
              <img className="case-img" src={manImg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Case
