import React from "react";
import FieldLabel from "../FieldLabel";

const FieldInput = (props) => {
  const { value, x, y, id, onChange, type } = props;
  const style = {
    position: "absolute",
    top: y,
    left: x,
    outline: "none",
    border: "1px solid #3F95E7",
    borderRadius: 4,
    fontSize: 12,
  };

  const handleChange = (event) => {
    onChange({ id, value: event.target.value });
  };

  if (type === 'text') {
    return <input style={style} value={value} onChange={handleChange} />;  
  }

  return <FieldLabel {...props} />;
};

export default FieldInput;
