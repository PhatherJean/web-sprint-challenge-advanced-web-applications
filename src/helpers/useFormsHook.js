import { useState } from "react";

const useFormsHook = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, setValues, error, setError, handleChange];
};
export default useFormsHook;
