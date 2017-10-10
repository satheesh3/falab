import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ProductList from '../containers/ProductList'
import Cart from '../containers/Cart';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/item/:category/:filter' component={ProductList}/>
      <Route exact path='/cart' component={Cart}/>
    </Switch>
  </div>
)

export default Main
