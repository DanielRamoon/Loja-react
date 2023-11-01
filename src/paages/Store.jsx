import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";

import { setItem, getItem } from "../service/LocalStorange";

import { ProductsArea } from "../css/Style";
import Header from "../components/Header";

function Store() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhokey") || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinhokey", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinhokey", [...cart, obj]);
    }
  };

  return (
    <div>
      <Header />
      <h1>Store</h1>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$ ${e.price}`}</h4>

            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
}

export default Store;
