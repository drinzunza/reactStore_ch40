import "./quantityPicker.css"
import { useState } from "react";

function QuantityPicker(){
    let [quantity,setQuantity] = useState(1);

    function decrease(){
        console.log("Decreasing quantity");
   // quantity = 100; //dont
        if(quantity===1) return;
        let val = quantity-1;
        setQuantity(val);
    }  
    //So please create the increasing quantity logic yourself
    function increase(){
        console.log("Increasing quantity");
   // quantity = 100; //dont
        let val = quantity+1;
        setQuantity(val);
    }  

    return(
         <div className="qt-picker">
            {/* please create 2 buttons and a label to
             render the + and - symbol and use the component
             in the app.js */}
             <button className="btn btn-sm btn-primary" disabled={quantity===1} onClick={decrease}>-</button>
             <label>{quantity}</label>
             <button className="btn btn-sm btn-primary" onClick={increase}>+</button>
         </div>
    )

}
export default QuantityPicker;

