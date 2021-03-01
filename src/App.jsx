import './App.css';
import {Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Product from './Components/Pages/Product/Product';
import Footer from './Components/Footer/Footer';
import Features from './Components/Pages/Features/Features';
import Pricing from './Components/Pages/Pricing/Pricing';
import Case from './Components/Pages/Case/Case';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/product" exact>
          <Product></Product>
        </Route>

        <Route path="/features" exact>
          <Features></Features>
        </Route>

        <Route path="/pricing">
          <Pricing></Pricing>
        </Route>

        <Route path="/case">
          <Case></Case>
        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
