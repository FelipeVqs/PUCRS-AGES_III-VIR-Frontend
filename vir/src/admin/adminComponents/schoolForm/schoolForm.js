import React from "react";
import HeaderForm from "../headerForm/headerForm";
import FooterForm from "../footerForm/footerForm";
import CommonInput from "../../adminCommons/commonInput/commonInput";
import "./schoolForm.css";

const SchoolFormModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = React.useState({
    nome: "",
    cnpj: "",
    endereco: "",
    email: "",
  });

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <HeaderForm
              title="Adicionar Escola"
              onClose={() => setIsOpen(false)}
            />
            <div className="circle-and-form">
              <div className="circle-container">
                <svg width="148" height="148">
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                    fill="#D9D9D9"
                    className="circle"
                  ></circle>
                </svg>
              </div>

              <div className="form-content">
                <form onSubmit={handleSubmit}>
                  <CommonInput label="Nome" placeholder={"Nome da escola"} />
                  <CommonInput label="CNPJ" placeholder={"CNPJ da escola"} />
                  <CommonInput
                    label="Endereço"
                    placeholder={"Endereço da escola"}
                  />
                  <CommonInput label="Email" placeholder={"Email da escola"} />
                </form>
              </div>
            </div>
            <FooterForm onCancel={handleCancel} onConfirm={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolFormModal;
