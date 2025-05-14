// import PropTypes from "prop-types";

const InputContact = () => {
  return (
    <div>
      <input
        // onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
export default InputContact;

// InputContact.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
