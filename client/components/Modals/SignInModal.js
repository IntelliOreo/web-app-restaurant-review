// import React from 'react';
// import Modal from 'react-modal';
// import SignIn from '../../pages/SignIn/SignIn';

// const SignInModal = ({ isOpen, onRequestClose }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

  
//   return (
//     <Modal 
//       isOpen={isOpen} 
//       onRequestClose={onRequestClose}
//     >
      
//     </Modal>
//   )
// }

// export default Modal
import React, { useState } from 'react';
import Modal from 'react-modal';
import SignIn from '../../pages/SignIn/SignIn';

const SignInModal = ({ isOpen, onRequestClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {isModalOpen ? (
        <SignIn closeModal={closeModal} />
      ) : (
        <button onClick={openModal}>Open Sign In</button>
      )}
    </Modal>
  );
}

export default SignInModal;