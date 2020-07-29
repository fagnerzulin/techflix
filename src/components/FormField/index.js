import React from "react";

function FormField({ tag: Tag, label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <Tag type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
