import PropTypes from "prop-types";

export const ContactsList = ({ contacts, deleteContact }) => {
  // console.log("🚀 ~ ContactsList ~ contacts:", contacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}
          {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
