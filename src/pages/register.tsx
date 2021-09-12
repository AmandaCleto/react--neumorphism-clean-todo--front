import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../assets/scss/pages/register.scss';

export default function Register() {
    return (
        <div className="container-register">
            <div className="login">
                <h2 className="title">Cadastro</h2>

                <div className="controllers">
                    <div>
                        <input type="text" placeholder="Digite seu nome" id="inputTodo" />
                        <input type="text" placeholder="Digite seu e-mail" id="inputTodo" />
                        <input type="text" placeholder="Digite sua senha" id="inputTodo" />
                        <Link to="/login" className="register-call">Já tem conta? Faça seu login aqui.</Link>
                    </div>


                    <Link to="/painel" className="button">
                        <button>Cadastrar</button>
                    </Link>
                </div>

            </div>
            <div className="apresentation">
                <h1>Neumorphism</h1>
                <h2>Clean Todo</h2>
            </div>

        </div>
    )

}
