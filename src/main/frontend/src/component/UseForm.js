import React, { useState } from "react";

//validadeForm son las validaciones del formulario
const UseForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response] = useState(null);

  const handleChange = (e) => {
    const {name, target } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }; //El estado del form

  //Esto tengo que agregar a mi form
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }; //Lanza validaciones

  const handleSubmit = (e) => {};

  

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
export default UseForm;