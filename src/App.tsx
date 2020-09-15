import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
};

export default src;
