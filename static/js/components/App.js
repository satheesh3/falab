import React,{ Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import superagent from 'superagent';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
//reducers
import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products';
import data from '../../../data/mock.json';

class App extends Component {
        render(){
        const rootReducer = combineReducers({
        cart: cartReducer,
        products: productsReducer
    }); 

let store = createStore(
    rootReducer,
    {
        products: data.catalog 
    }
   
    );
        return (
         <div>
            <Header />
            <Provider store={store}>
            <Main />
            </Provider>
            <Footer/>
        </div>
        )
    }
       
    
  
}

export default App
