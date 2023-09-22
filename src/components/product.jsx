import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect } from 'react';

//when the component is loaded, console.log ("component loaded");
function Product(props) {
  useEffect(function () {
    //when the component is loaded
    console.log('component loaded');
  }, []);

  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt=""></img>
      <h5> {props.data.title} </h5>

      <div className="prices">
        <label className="total">${props.data.price.toFixed(2)}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <QuantityPicker />

      <button className="btn btn-sm btn-success">Add</button>
    </div>
  );
}
export default Product;
