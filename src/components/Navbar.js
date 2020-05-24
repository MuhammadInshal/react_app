import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import {Button} from "./Button.js";
//import styled from "styled-components";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Product</Link>
                        </li>
                    </ul>
                    <Link className="ml-auto" to="/cart">
                        <Button>
                        <i className="fas fa-cart-plus"></i>
                        My Cart
                        </Button>
                    </Link>
                </nav>
            </div>
        )
    }
}