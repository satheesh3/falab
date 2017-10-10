import React from 'react';
import { Link } from 'react-router-dom';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div>
  <h1>
    <Link to='/'>F</Link>
  <span className = "cartButton">
    <Link to='/cart'><button>Cart</button></Link>
    </span>
    </h1>
  <div className="navbar">
  <div className="dropdown">
    <button className="dropbtn">Electronics 
    </button>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
          <Link to='/item/electronic/tv'><h3>TV</h3></Link>
        </div>
        <div className="column">
          <Link to='/item/electronic/mobile'><h3>Mobiles</h3></Link>
        </div>
        <div className="column">
          <Link to='/item/electronic/washingmachine'><h3>Washingmachines</h3></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar">
    <div className="dropdown">
      <button className="dropbtn">Shoes
          </button>
       <div className="dropdown-content">  
       <div className="row">
        <div className="column">
            <Link to='/item/shoes/casual'><h3>Casual</h3></Link>
        </div>
        <div className="column">
          <Link to='/item/shoes/floater'><h3>Floaters</h3></Link>
        </div>
        <div className="column">
          <Link to='/item/shoes/sandal'><h3>Sandals</h3></Link>
        </div>
      </div>
    </div>
    </div> 
    </div>
</div>

    
    
  </div>
)

export default Header;
