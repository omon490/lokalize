import "./Product.css"
import illustration from "../../../img/product-illustration.png"

function Product() {
  return (
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
  )
}

export default Product

