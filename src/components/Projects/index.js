/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './style.css';

export default function Project(props) {
    return (
        <div className="col-12 col-md-6 col-xl-4" >
            <div className="card" />
            <img src={props.thumbnail} alt="gif of application" id="card-gif" className="card-img-top" />
            <div className="card-body">
                <p className="h5 font-weight-bold">{props.title}</p>
                <p className="mb-2">
                    <small>{props.stackStr}</small>
                    <hr />
                </p>
                <p className="font-weight-light">
                    {props.description}
                </p>
                <div className="row">
                    <div className="col-6 pr-1">
                        <a href={props.app} target="_blank"
                            className="btn bg-blue card-btn btn-block">View App</a>
                    </div>
                    <div className="col-6 pr-1">
                        <a href={props.repo} target="_blank"
                            className="btn bg-blue card-btn btn-block">View Code</a>
                    </div>
                </div>
            </div>
        </div>
                
    );
}