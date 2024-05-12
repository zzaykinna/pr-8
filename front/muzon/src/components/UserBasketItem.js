import React from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserBasketItem = ({ basket }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/product/" + basket.id);

  return (
    // <Card className="m-3" gap={5} >
    //   <Image
    //     width={300}
    //     height={350}
    //     src={"http://localhost:5000/" + basket.img}
    //     style={{ cursor: "pointer" }}
    //   />
    //   <Stack gap={3} className="align-items-start justify-content-center">
    //     <h2>{basket.name}</h2>
    //     <span>{basket.price} руб.</span>
    //   </Stack>
    // </Card>

    <Col md={6}  onClick={handleClick} className='mt-5 mx-auto'>
            <Card style={{ width: 300, cursor: 'pointer' }} border={"success"}>
                <Image width={300} height={350} src={'http://localhost:5000/' + basket.img} />
                <div className="mt-2 d-flex justify-content-between align-items-center" style={{fontSize: '20px'}}>
                    <div>{basket.name}</div>
                </div>
                <div style={{fontSize: '20px'}}>{basket.price} ₽</div>
            </Card>
        </Col>
  );
};

export default UserBasketItem;