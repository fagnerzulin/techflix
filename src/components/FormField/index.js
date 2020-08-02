import React from "react";
import PropTypes from "prop-types";
import { FormFieldWrapper, Label, Input } from "./style";

function FormField({
  tag: Tag,
  label,
  type,
  name,
  value,
  onChange,
  suggestions,
}) {
  const fieldId = `id_${name}`;
  const hasSuggestions = Boolean(suggestions.length);
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={Tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={`suggestion_form_${fieldId}`}
        />
        <Label.Text>{label}</Label.Text>

        {hasSuggestions && (
          <datalist id={`suggestion_form_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestion_form_${fieldId}_opition_${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  Tag: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
