import React, { Component } from 'react';
import {ProductConsumer} from "../Context.js";
import {Link} from 'react-router-dom';
import {Button} from "./Button.js";

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const {id, title, image, price, company, info, incart, sku} = value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-blue my-5">
                                        <h1>{ title }</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={image} className="img-fluid" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h4>brand: {company}</h4>
                                        <h4>sku  : {sku}</h4>
                                        <h3 className="text-blue">price: <span>$</span>{price}</h3>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            {info}
                                        </p>
                                        <div>
                                            <Link to="/">
                                                <Button>
                                                    Back To Products
                                                </Button>
                                            </Link>
                                            <Button cart disabled={ incart ? true : false } onClick={() => value.addToCart(id)}>
                                                {
                                                    incart ? 'In Cart' : 'Add To Cart'
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
