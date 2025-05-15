// import PropTypes from "prop-types";

export const InputNumber = () => {
  return (
    <div>
      <input
        // onChange={onChange}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
  );
};

// InputNumber.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
