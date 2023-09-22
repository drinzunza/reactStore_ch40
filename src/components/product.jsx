import "./product.css";
import QuantityPicker from './quantityPicker';
import { useEffect } from "react";

//when the component is loaded, console.log ("component loaded");
function Product(props){

    useEffect(function(){
        //when the component is loaded
        console.log ("component loaded");
    },[]);

    return(
        <div className="product">

            <img src={"/images/"+props.data.image} alt=""></img>
            <h5> {props.data.title} </h5>
            <label>{props.data.price}</label>
            <label>Total</label>
            {/*here we want to add the Qt-picker*/}
            <QuantityPicker/>
        </div>
    )
}
export default Product;
