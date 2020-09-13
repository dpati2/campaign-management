import React, { useState, useEffect } from 'react';
import { generate } from 'fast-glob/out/managers/tasks';

const Modal = ({showModal, data}) => {
  console.log("====props==>",data);
  const {
    image_url,
    name,
    region,
    price,
  } = data;
  const generate = () => {
    return price.map(({head,detail}) => <li className="modal-list">
      <span>{head}</span>
      <span>{detail}</span>
    </li>)
  }

  const hideModal = () => {
    showModal({show:false, data: {}})
  }

  return (
    <div className="modal">
      <div className="layer" onClick={hideModal}></div>
      <div className="modal-body">
        <div className="head">
          <img src={`./${image_url}`}></img>
          <div>
            <p className="name">{name}</p>
            <p className="region">{region}</p>
          </div>
        </div>
        <h3>Pricing</h3>
        <ul>
          {generate(price)}
        </ul>
        <div className="btn">
          <button onClick={hideModal}>Close</button>
        </div>
      </div>
    </div>)
}

export default Modal;