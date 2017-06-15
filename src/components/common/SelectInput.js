import React, {PropTypes} from 'react';

/**
 * Abstraction over text input to enforce consistency in validation and labels
 */
const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  let inputStyle = {};
  if (error && error.length > 0) {
    inputStyle = {
      border: 'solid 1px red'
    };
  }

  return (
    <div className="fieldset">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
          style={inputStyle}>
          <option value="">{defaultOption}</option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
          }
        </select>
        {error && <div style={{ color: 'red'}}>{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string.isRequired,
  /**
   * Input label
   */
  label: PropTypes.string.isRequired,
  /**
   * Function to call onChange
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Placeholder to display when empty
   */
  defaultOption: PropTypes.string,
  /**
   * Value
   */
  value: PropTypes.string,
  /**
   * String to display when error occurs
   */
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
