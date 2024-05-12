import { values } from "mobx";
import React, { useState } from "react";
import { Button, Form, Row, Stack } from "react-bootstrap";
import { updateStatus } from "../http/productAPI";

const BasketProduct = ({ basket }) => {
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState(basket.userId);

  const updateStatusBasket = () => {
    updateStatus(status, basket.userId)
      .then((data) => {
        setStatus(status);
        alert(`заказ пользователя с id: ${userId} успешно обновлён!`);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    console.log(status);
    console.log(userId);
  };

  return (
    <Row>
      <Stack style={{ width: 200, cursor: "pointer", color: "black"}} className="mb-2 cardStyle">
        <Stack gap={3}>
          <div>Создан: {basket.createdAt}</div>
          <div>Обновлён: {basket.updatedAt}</div>
          <Stack direction="horizontal" gap={4}>
            <Form.Label>ID пользователя:</Form.Label>
            <Form.Control
              Col={3}
              type="text"
              readOnly
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Stack>
          <div>ID заказа: {basket.id}</div>
          <div>Сумма: {basket.total}</div>
          <Stack direction="horizontal" gap={4}>
            <Form.Label>Статус:</Form.Label>
            <Form.Select
              defaultValue={basket.status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="created">created</option>
              <option value="ready">ready</option>
              <option value="cancelled">cancelled</option>
            </Form.Select>{" "}
            <Button onClick={updateStatusBasket} variant="success">
              Обновить
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <hr />
    </Row>
  );
};

export default BasketProduct;