import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import ProductList from '../components/ProductList';
import Pages from '../components/Pages';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI';
import AOS from 'aos';

const Catalog = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data));
    fetchBrands().then(data => product.setBrands(data));
    fetchProducts().then(data => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });

    fetchProducts(null, null, 1, 3).then(data => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedType, product.selectedBrand]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
          <TypeBar />
          </div>
        </Col>
        <Col md={8}>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
          <BrandBar />
          <ProductList />
          <Pages />
          </div>
        </Col>
      </Row>
    </Container>
  );
});

export default Catalog;