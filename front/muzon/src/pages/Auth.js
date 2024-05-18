import React, { useContext, useState, useEffect } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import AOS from 'aos';

const Auth = observer(() => {
    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data.user);
            user.setUserId(data.id);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                <Card style={{ width: 600 }} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <label htmlFor="emailInput">Ваш email: </label>
                        <input
                            className="mt-1 mb-3"
                            id="emailInput"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{marginTop: "10px", padding: "8px", width: "100%", border: "1px solid #ccc", borderRadius: "5px"}}
                        />
                        <label htmlFor="passwordInput">Введите ваш пароль: </label>
                        <input
                            className="mt-1"
                            id="passwordInput"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            style={{marginTop: "10px", padding: "8px", width: "100%", border: "1px solid #ccc", borderRadius: "5px"}}
                        />
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </div>
        </Container>
    );
});

export default Auth;