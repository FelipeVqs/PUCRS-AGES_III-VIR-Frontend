import { useState } from "react";
import BookFormModal from "../../adminComponents/bookForm/bookForm";
import Header_admin from "../../adminComponents/headerAdmin/header_admin";

function EscolaPage() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
         <Header_admin />
        <button onClick={() => setIsOpen(true)}>Mostrar Form</button>
        <BookFormModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    );
  }
  
  export default EscolaPage;