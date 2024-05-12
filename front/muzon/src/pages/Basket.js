import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchUserBasket } from "../http/productAPI";
import { Alert, Button, Col, Container, Stack } from "react-bootstrap";
import UserBasketList from "../components/UserBasketList";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
  const { basket, user } = useContext(Context);
  const id  = user.user.id;

  const [show, setShow] = useState(false);

  console.log("id = ", id);

  useEffect(() => {
    fetchUserBasket(id).then((data) => {
      basket.setUserBasket(data);
    });
  }, [basket, id]);

  return (
    <Container className="mt-3">
      {basket.userBasket.length > 0 ? (
        <>
          <h2 style={{color: '#1A3010'}}>Вы выбрали:</h2>
          <Col md={9}>
            <UserBasketList />
          </Col>
          <Stack className="d-flex align-items-end">
            <Alert show={show} variant="light">
              <Alert.Heading>Уведомление о заказе</Alert.Heading>
              <p>
                Вы только что разместили заказ. Чтобы его получить вам нужно прийти в магазин и оплатить его
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-success"
                >
                  Закрыть
                </Button>
              </div>
            </Alert>

            {!show && (
              <Button variant="success" onClick={() => setShow(true)} className="mt-3">Оформить заказ</Button>
            )}
          </Stack>
        </>
      ) : (
        <Container>Вы ещё ничего не выбрали</Container>
      )}
    </Container>
  );
});

export default Basket;