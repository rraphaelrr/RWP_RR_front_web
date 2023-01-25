import React, { Component } from 'react';
import '../../styles/style_login.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import * as ApiFunction from '../../constants/ApiFunction';
import InputMask from 'react-input-mask';
import Objects from '../../constants/Objects';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: "",
        }
    }


    validateUsers = () => {
        const user = parseInt(this.state.user.replace(/[.-]/g, ''));
        const password = this.state.password

        const data = {
            user,
            password
        }
        console.log(data)
        ApiFunction.validateUsers(data).then((res) => {
            if (res.status == 0) {
                localStorage.setItem("logado", true)
                window.location.href = '/dashboard';

            } else {
                alert("Login ou Senha não encontrada, tente novamente")
            }
        })

    }

    render() {
        return (
            <section className="login">
                <main className="acessoConta">
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <h1>Olá!</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <h3>Acesse sua conta:</h3>
                            </Col>
                        </Row>

                        <main className='form'>
                            <Row>
                                <Col lg={12}>
                                    <InputMask
                                        mask={'999.999.999-99'}
                                        className='userInput'
                                        onChange={(e) => this.setState({ user: e.target.value })}
                                        placeholder="LOGIN"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12}>
                                    <input
                                        type='password'
                                        className='passInput'
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                        placeholder="SENHA"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={12}>
                                    <p onClick={() => console.log('Hello World')}>
                                        Esqueceu sua senha?
                                    </p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg={12}>
                                    <Button onClick={() => this.validateUsers()}>ENTRAR</Button>
                                </Col>
                            </Row>
                        </main>

                    <br /><br /><br /><br />
                        <Row>
                            <Col lg={12}>
                                {Objects.logoWhite}
                            </Col>
                        </Row>
                    </Container>
                </main>

            </section>
        )
    }
}