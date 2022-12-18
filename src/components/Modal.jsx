import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {shoes} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {shoes.name}
                            <img src={shoes.image} alt="" style={{width: "100%"}}/>
                            {shoes.description}
                            <div style={{textAlign: "center"}}>Price: ${shoes.price}</div>
                            
                            
                          
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
