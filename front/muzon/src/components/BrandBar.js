import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Card, Col, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { product } = useContext(Context);

    return (
        <Row>
            <Col md={9} className='d-flex' >
                {product.brands.map(brand =>
                    <Card 
                        style={{ cursor: 'pointer' }}
                        key={brand.id}
                        className="p-3 m-1"
                        onClick={() => product.setSelectedBrand(brand)}
                        border={brand.id === product.selectedBrand.id ? 'success' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
            </Col>
        </Row>
    );
});

export default BrandBar;