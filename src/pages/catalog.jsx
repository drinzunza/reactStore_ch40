import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(props){
    let [products, setProducts] = useState([]);

    useEffect(function () {
      console.log('component loaded');
      loadCatalog();
    }, []);

    function loadCatalog() {
      let service = new DataService();
      let prods = service.getProducts();
      console.log(prods);
      setProducts(prods);
    }

    return(
        <div className="catalog">
            <h1> Check out our {products.length} new products</h1>
            {products.map(p => <Product key={p._id} data={p}/>)}
        </div>
    )
}

export default Catalog;
