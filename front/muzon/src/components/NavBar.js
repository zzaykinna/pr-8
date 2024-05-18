import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import logotip from '../img/logo-muzon-white.png';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        user.setUser({});
        user.setIsAuth(false);
    };

    const handleClickAdmin = () => navigate('/admin');
    const handleClickUser = () => navigate('/login');
    return (
        <Navbar expand="lg" style={{ background: '#102804' }} variant='dark'>
            <Container className='header-container'>
                <Navbar.Brand href="/" className='logo'>
                    <img src={logotip} style={{ width: '120px', marginRight: '40vw' }} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {user.isAuth ? (
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleClickAdmin}>Админ панель</Nav.Link>
                            <Nav.Link href="/catalog" style={{ fontSize: '25px', marginLeft: '25px' }}>Каталог</Nav.Link>
                            <Nav.Link href="/basket" style={{ fontSize: '25px', marginLeft: '25px' }}>Корзина</Nav.Link>
                            <Nav.Link style={{ fontSize: '25px', marginLeft: '25px' }} onClick={handleLogout}>Выйти</Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="me-auto">
                            <Nav.Link href="/catalog" style={{ fontSize: '25px', marginLeft: '25px' }}>Каталог</Nav.Link>
                            <Nav.Link style={{ fontSize: '25px', marginLeft: '25px' }} onClick={handleClickUser}>Авторизоваться</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;