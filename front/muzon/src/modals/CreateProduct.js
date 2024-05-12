import React, { useContext, useState, useEffect } from 'react';
import { Modal, Form, Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import { createProduct, fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI';
import { observer } from 'mobx-react-lite';

const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    };

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addProduct = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', product.selectedBrand.id);
        formData.append('typeId', product.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createProduct(formData).then(data => onHide());
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container key='product-form' className='d-flex justify-content-around'>
                        <Dropdown className='mt-3'>
                            <Dropdown.Toggle variant='outline-dark'>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {product.types.map(type =>
                                    <Dropdown.Item onClick={() => product.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className='mt-3'>
                            <Dropdown.Toggle variant='outline-dark'>{product.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {product.brands.map(brand =>
                                    <Dropdown.Item onClick={() => product.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>

                    <Form.Control className='mt-3'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Введите название продукта'
                    />
                    <Form.Control className='mt-3'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder='Введите стоимость продукта'
                        type='number'
                    />
                    <Form.Control className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />

                    <hr />
                    <Button variant='outline-dark' onClick={addInfo}>Добавить новое свойство</Button>
                    {
                        info.map(i =>
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Название характеристики'
                                    />
                                </Col>

                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder='Описание характеристики'
                                    />
                                </Col>

                                <Col md={4}>
                                    <Button variant='outline-dark' onClick={() => removeInfo(i.number)}>Удалить</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;