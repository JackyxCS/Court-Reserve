import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AboutMe from './AboutMe';
import './AboutMe.css';

function AboutMeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="aboutDiv">
      <button className="demobutton" onClick={() => setShowModal(true)}>About the Dev</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AboutMe />
        </Modal>
      )}
    </div>
  );
}

export default AboutMeModal;