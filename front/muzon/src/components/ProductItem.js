import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import { useNavigate } from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem = ({ product }) => {
    const navigate = useNavigate();
    console.log(navigate);
    
    const handleProductClick = () => {
        navigate(PRODUCT_ROUTE + '/' + product.id);
    }

    return (
        <Col md={6}  onClick={handleProductClick} className='mt-5 mx-auto'>
            <Card style={{ width: 300, cursor: 'pointer' }} border={"success"}>
                <Image width={298} height={350} src={'http://localhost:5000/' + product.img} />
                <div className="mt-2 d-flex justify-content-between align-items-center" style={{fontSize: '20px'}}>
                    <div>{product.name}</div>
                </div>
                <div style={{fontSize: '20px'}}>{product.price}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;