import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { fetchBaskets, findBasketByStatus, updateStatus } from "../http/productAPI";
import BasketList from "../components/BasketList";
import { Search } from "react-bootstrap-icons";
import BasketProduct from "../components/BasketProduct";

const BasketAll = observer(({ show, onHide }) => {
  const { basket } = useContext(Context);
  const [status, setStatus] = useState();
  const [foundBaskets, setFoundBaskets] = useState([]);
  useEffect(() => {
    fetchBaskets()
      .then((data) => {
        basket.setBaskets(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  const findBasket = () => {
    findBasketByStatus(status)
      .then((data) => {
        // order.setOrders(data);
        setFoundBaskets(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    console.log(status);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Список заказов
        </Modal.Title>
        <Form inline className="ms-5">
        </Form>
      </Modal.Header>
      <Modal.Body>
        <Col md={9}>
          <BasketList />
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        {/* <Button variant="outline-danger">Обновить</Button> */}
      </Modal.Footer>
    </Modal>
  );
});

export default BasketAll;
