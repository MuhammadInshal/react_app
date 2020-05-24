import React, { Component } from 'react'
import { ProductConsumer } from '../../Context.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Title from '../Title.js';
import {CartColumn} from './CartColumn.js';
import EmptyCart from './EmptyCart.js';
import CartList from './CartList.js';
import CartTotal from './CartTotal.js';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        (value) => {
                            const {cart} = value;
                            if (cart.length > 0) {
                                return (
                                    <React.Fragment>
                                        <Title name="Your" title="Cart" />
                                        <CartColumn />
                                        <CartList value={value} />
                                        <CartTotal value={value} />
                                    </React.Fragment>
                                )
                            } else {
                                return (
                                    <EmptyCart />
                                )
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}
