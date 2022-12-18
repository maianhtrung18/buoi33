/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="col-4" key={this.props.shoes.id}>
                <div className="card">
                    <div href="#" data-toggle="modal" data-target="#exampleModal" style={{cursor: "pointer"}} onClick={() => {
                        this.props.setStateModal(this.props.shoes);
                    }}>
                        <img src={this.props.shoes.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.shoes.name}</h5>
                            <p className="card-text">${this.props.shoes.price.toLocaleString()}</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
