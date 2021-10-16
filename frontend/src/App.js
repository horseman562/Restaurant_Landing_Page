import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data'
import Feature from './components/Feature';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import Navbar from './components/Navbar';

function App() {

  const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (

    <Router>
      <GlobalStyle />
        <Navbar isOpen={isOpen} toggle={toggle}/>
        
        <Hero isOpen={isOpen} toggle={toggle}/>
      
      
      <Products id="pizzas" heading='Choose your favourite' data={productData} />
      <Route path='/features' component={Feature} />
      <Products heading='Pick Your Fav Sweeties' data={productDataTwo} />
      <Footer />
      

        
      </Router>



    
  );
}

export default App;
