import React, { useState } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import CreateBrand from '../modals/CreateBrand';
import CreateType from '../modals/CreateType';
import CreateProduct from '../modals/CreateProduct';
import enot from '../img/pedro.gif'
import BasketAll from '../modals/BasketAll';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [basketsVisible, setBasketsVisible] = useState(false);
  return (
    <Container className='d-flex flex-column'>
      <Button variant='success' className='mt-5 mb-3'
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button variant='success' className='mt-2 mb-3'
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button variant='success' className='mt-2'
        onClick={() => setProductVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />

      <Button
        variant={"success"}
        className="mt-4"
        onClick={() => setBasketsVisible(true)}
      >
        Заказы
      </Button>
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
      <BasketAll show={basketsVisible} onHide={() => setBasketsVisible(false)} />

      <Image src={enot} className='mt-4 mx-auto d-block'
        width={300}
        height={300}
      />
    </Container>


  )
}

export default Admin;