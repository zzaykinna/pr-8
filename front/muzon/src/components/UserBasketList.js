import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import UserBasketItem from "./UserBasketItem";
import { Context } from "..";

const UserBasketList = observer(() => {
  const { basket } = useContext(Context);

  return (
    <Row className="d-flex">
      {basket.userBasket.map((basketItem) => (
        <UserBasketItem key={basketItem.id} basket={basketItem} />
      ))}
    </Row>
  );
});

export default UserBasketList;