import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row, Stack } from "react-bootstrap";
import { Context } from "..";
import BasketProduct from "./BasketProduct";

const BasketList = observer(() => {
    const { basket } = useContext(Context);

  return <Row className="d-flex">
    {basket.baskets.map(basket => 
    <BasketProduct key={basket.id} basket={basket}/> 
    )}
  </Row>;
});

export default BasketList;
