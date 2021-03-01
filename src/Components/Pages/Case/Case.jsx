import "./Case.css"
import manImg from "../../../img/man-img.png"
import cake from "../../../img/cake-img.png"
import userLogo from "../../../img/users-logo.svg"
import capterra from "../../../img/capterra.svg"
import star from "../../../img/star.svg"
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
              <img className="case-img" src={manImg} alt="man img"/>
            </div>
          </div>
        </div>
      </div>


      <div className="translation">
        <div className="container">
          <div className="translation-wrapper">
            <div className="translation-left">
              <img className="translation-img" src={cake} alt="cake img"/>
              <p className="translation-left-text">The most-loved translation management software</p>
            </div>

            <div className="translation-right">
              <div className="translation-right-left">
                <img className="translation-right-left-img" src={userLogo} alt="img"/>
                <img className="translation-right-left-star" src={star} alt="star"/>
                <p className="translation-right-left-text">Users love us</p>
              </div>

              <div className="translation-right-right">
                <img className="translation-right-right-img" src={capterra} alt="img"/>
                <img className="translation-right-right-star" src={star} alt="star"/>
                <p className="translation-right-right-text">Highest rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Case
