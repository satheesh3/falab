import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import  { getFilteredProducts }  from '../reducers/products';

const mapStateToProps = (state, props) => {
    return {
        products: getFilteredProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);

