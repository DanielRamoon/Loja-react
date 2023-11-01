import React, { useState } from "react";
import { getItem, setItem } from "../service/LocalStorange";
import { BsFillCartDashFill } from "react-icons/bs";
import Header from "../components/Header";

import { ProductsArea } from "../css/Style";

function Cart() {
  const [data, setdata] = useState(getItem("carrinhokey") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setdata(arrFilter);
    setItem("carrinhokey", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div>
      <Header />
      <h3>{` SubTotal: R$ ${subTotal}`}</h3>
      <h1>Cart</h1>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$ ${e.price}`}</h4>

            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
}

export default Cart;
