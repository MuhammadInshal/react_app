import React from 'react';
import Title from '../Title.js';

export default function EmptyCart() {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <Title title="Your cart is empty" />
            </div>
        </div>
    )
}
