import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Image, Card, Button, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { addToCart, fetchOneProduct } from '../http/productAPI';
import { Context } from '..';

const ProductPage = () => {
  const { user } = useContext(Context);
  const [product, setProduct] = useState({info: []})
  const [show, setShow] = useState(false);

  const {id} = useParams()
  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  }, [])

  const createCart = (product) => {
    addToCart({
      product_id: id,
    })
      .then((data) => {
        alert("Товар добавлен в корзину!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    console.log(id);
  };

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
          <Image width={300} height={300} src={'http://localhost:5000/' + product.img} />
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
          <Row>
            <h2>{product.name}</h2>
          </Row>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
          <Card className='d-flex flex-column align-items-center justify-content-around' style={{ width: 300, height: 300, fontSize: 32, border: '0.2vw solid darkgreen' }}>
            <h3>{product.price} ₽</h3>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Body>
                Чтобы добавить товар в корзину, Авторизируйтесь😘{" "}
              </Toast.Body>
            </Toast>

            {user.isAuth ? (
              <Button variant={"success"} onClick={createCart}>
                Добавить в корзину
              </Button>
            ) : (
              <Button variant={"success"} onClick={() => setShow(true)}>
                Добавить в корзину
              </Button>
            )}

          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-5'>
        <h1>Описание:</h1>
        {product.info.map(info => 
          <Row key={info.id} className='mt-2' style={{fontSize: 20, marginLeft: 2}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default ProductPage;