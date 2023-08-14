import React from "react";
import "./modal.css";

const Modal = ({ question, answer, closeModal }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
        <h2 className="question">{question}</h2>
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
};

export default Modal;
