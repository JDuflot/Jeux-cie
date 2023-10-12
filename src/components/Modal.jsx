import React, { useState } from "react";
import "../styles/Modal.css";
import close from "../assets/img/close.png";


export default function Modal({name, image, thumbnail}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
// remove scroll when the modal is opened

  return (
    <>
      <img className="game-thumbnail" src={thumbnail} alt="cover game" onClick={toggleModal} />
      <button onClick={toggleModal} className="btn-modal">
       Voir la couverture
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              <h2>{name}</h2>
              <img className="cover-modal-img" src={image} alt="cover game" />
            <button className="close-modal" onClick={toggleModal}>
             <img className="close-modal-img" src={close} alt="close" />
            </button>
          </div>
        </div>
      )}

    </>
  );
}