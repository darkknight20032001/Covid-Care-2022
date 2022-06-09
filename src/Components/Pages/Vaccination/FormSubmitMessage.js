import React from "react";
import Modal from "../../UI/Modal";

const FormSubmitMessage = ({ setShowModal }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <h3 style={{ textAlign: "center" }}>
        Your slot for vaccination is booked
      </h3>
    </Modal>
  );
};

export default FormSubmitMessage;
