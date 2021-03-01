import "./Product.css"
import illustration from "../../../img/product-illustration.png"
import { Link } from "react-router-dom"
import speed from "../../../img/speed.svg"
import virgin from "../../../img/virgin.svg"
import yelp from "../../../img/yelp.svg"
import tital from "../../../img/tital.svg"
import revoult from "../../../img/revoult.svg"
import daimler from "../../../img/daimler.svg"

function Product() {
  return (
    <>
    <div className="container">
      <div className="product-wrapper">
        <div className="product-left-box">
          <h1 className="product-heading">Accelerate localization from code to delivery</h1>
          <p className="product-text">A localization and translation management platform for agile teams. Embrace automation, workflow transparency, and fast project delivery.</p>
          <ul className="product-button-list">
            <li className="product-button-item">
              <button className="button button-dark" type="button">Try it free</button>
            </li>

            <li className="product-button-item">
              <button className="button button-light" type="button">Book a demo</button>
            </li>
          </ul>
          <p className="product-button-text">Try all features for 14 days · No credit card required</p>
        </div>

        <div className="product-right-box">
          <img className="product-right-img" src={illustration} alt="illustration" width="759" height="529" />
        </div>
      </div>
      </div>
      <div className="preferred">
        <div className="container">
          <h3 className="preferred-title">The preferred localization tool of 1500+ companies</h3>
          <ul className="preferred-list">
            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={speed} alt="logo"/>
              </Link>
            </li>

            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={virgin} alt="logo"/>
              </Link>
            </li>

            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={tital} alt="logo"/>
              </Link>
            </li>

            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={revoult} alt="logo"/>
              </Link>
            </li>

            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={yelp} alt="logo"/>
              </Link>
            </li>

            <li className="preferred-item">
              <Link className="preferred-link">
                <img className="preferred-logo" src={daimler} alt="logo"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Product

