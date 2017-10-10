// reducer
export default function products(state = []) {
    return state; 
}

// selectors
export function getFilteredProducts(state, props) {
    console.log(state);
    return state.products.filter((product) => ( product.category == props.match.params.category && product.sub == props.match.params.filter));
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}

