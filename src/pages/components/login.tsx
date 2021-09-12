import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../../assets/scss/pages/login.scss';

export default function Login() {
    return (
        <div className="container-login">
            <div className="apresentation">
                <h1>Neumorphism</h1>
                <h2>Clean Todo</h2>

            </div>
            <div className="login">
                <h2 className="title">Login</h2>


                <div className="controllers">
                    <div>
                        <input type="text" placeholder="Digite seu e-mail" id="inputTodo" />
                        <input type="text" placeholder="Digite sua senha" id="inputTodo" />
                        <Link to="/register" className="register-call">Não tem conta? Faça seu cadastro aqui.</Link>
                    </div>


                    <button className="button">Entrar</button>
                </div>

            </div>
        </div>
    )

}
