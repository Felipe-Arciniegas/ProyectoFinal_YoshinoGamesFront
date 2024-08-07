import "./store.css";
import { useState } from "react";

const Store = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="grid-container">
        <div class="box-element3 product">
            <img class="thumbnail" alt="product"> </img>
            <h6 class="product-name"><strong></strong></h6>
            <hr>
                <div class="product-footer">
                    <div class="button-group">
                        <button data-product="" data-action="add" class="button-add update-cart">Add to Cart</button>
                        <a class="button button-view" href="#">View</a>
                    </div>
                    <h4 class="price"> COP</h4>
                </div>
            </hr>
        </div>
    </div>
  );
}

export default Store;