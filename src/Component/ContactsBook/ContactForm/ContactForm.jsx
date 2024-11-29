import PropTypes from "prop-types";
import InputContact from "../InputContact/InputContact";
import { InputNumber } from "../InputNumber/InputNumber";

export const ContactForm = ({ onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <InputContact onChange={onChange} />
        </label>
        <label htmlFor="number">
          Number
          <InputNumber onChange={onChange} />
        </label>

        <button type="submit" style={{ margin: 30 }}>
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
