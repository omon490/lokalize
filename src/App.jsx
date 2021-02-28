import './App.css';
import {Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Product from './Components/Pages/Product/Product';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/product" exact>
          <Product></Product>
        </Route>


      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
