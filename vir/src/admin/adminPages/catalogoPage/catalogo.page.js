import React, { useState, useEffect } from 'react';
import AddBookButton from "../../adminComponents/uploadButton/uploadButton";
import BookFormModal from "../../adminComponents/bookForm/bookForm";
import Header_admin from '../../adminComponents/headerAdmin/header_admin';

function CatalogoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
      setIsModalOpen(false);
  };

  return (
      <div style={{ padding: '20px' }}>
        <Header_admin />
          <AddBookButton onClick={() => setIsModalOpen(true)} />
          <BookFormModal isOpen={isModalOpen} onClose={handleClose} />
      </div>
  );
  }
  
  export default CatalogoPage;