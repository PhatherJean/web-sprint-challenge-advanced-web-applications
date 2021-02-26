import { useState } from "react";

const useFormsHook = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, setValues, handleChange];
};
export default useFormsHook;
