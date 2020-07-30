import React from "react";
import PropTypes from "prop-types";
import { FormFieldWrapper, Label, Input } from "./style";

function FormField({ tag: Tag, label, type, name, value, onChange }) {
  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={Tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
};

FormField.propTypes = {
  Tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
