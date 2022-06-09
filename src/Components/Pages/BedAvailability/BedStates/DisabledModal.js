import React from "react";
import Modal from "../../../UI/Modal";

const DisabledModal = ({ setShowModal, hospitalName }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <div className="disabled_message">
        <h3>{hospitalName}</h3>
        <p>Currently we don't have beds</p>
      </div>
    </Modal>
  );
};

export default DisabledModal;
